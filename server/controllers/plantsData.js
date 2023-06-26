const knex = require('knex')
const knexConfig = require('../knexfile');
const { scheduleMaker, createEvents } = require("../utils")
const { batchFetchImplementation } = require('@jrmdayn/googleapis-batcher')

const db = knex(knexConfig);

const { google } = require('googleapis');
const { OAuth2 } = google.auth

const fetchImpl = batchFetchImplementation()

const oAuth2Client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
)

oAuth2Client.setCredentials({
  refresh_token: process.env.refresh_token
})

const calendar = google.calendar({
  version: 'v3',
  auth: oAuth2Client,
  fetchImplementation: fetchImpl
})

const fetchPlants = async (req, res) => {
  try {
    const userEmail = req.query.email;

    const plants = await db('plants')
      .select()
      .where('user_email', userEmail);

    return res.status(200).json(plants);
  } catch (error) {
    console.error('Error fetching plants:', error);
    return res.status(500).send('Error fetching plants');
  }
};

const addPlant = async (req, res) => {
  const {
    name,
    stageOfLife,
    growingMedium,
    growingEnvironment,
    nutrients,
    startTime,
    email,
    color
  } = req.body;
  const { accessToken, refreshToken } = req.cookies;
  console.log('accessToken', accessToken)
  console.log('refreshToken', refreshToken)
  console.log(req.cookies)

  if (
    !name ||
    !stageOfLife ||
    !growingMedium ||
    !growingEnvironment ||
    !nutrients ||
    !startTime ||
    !email ||
    !accessToken ||
    !refreshToken ||
    !color
  ) {
    return res.status(400).send("Please fill out all fields before submission");
  }

  try {
    const schedule = scheduleMaker({ stageOfLife, growingMedium })
    console.log('schedule', schedule)
    const events = createEvents(schedule, { stageOfLife, startTime, name, growingMedium, color })
    const date = events[events.length - 1].start.dateTime
    const harvestDate = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
    console.log('events', events)
    const plantRes = await db('plants').insert({
      name: name,
      stage_of_life: stageOfLife,
      growing_medium: growingMedium,
      growing_environment: growingEnvironment,
      nutrients: nutrients,
      start_date: startTime,
      user_email: email,
      harvest_date: harvestDate,
      color: color
    }, 'id');
    const plantId = plantRes[0]

    oAuth2Client.setCredentials({
      access_token: accessToken,
      refresh_token: refreshToken,
    });

    const results = await Promise.all(events.map((event) => {
      return calendar.events.insert(
        { calendarId: 'primary', resource: event },
        async (err, eventRes) => {
          if (err) return console.error("Calendar event creation error: ", err)
          
          await db("events").insert({ plant_id: plantId, google_id: eventRes.data.id })
          return console.log("Calendar event created")
        }
      )
    }))
    console.log('results', results);

    return res.status(201).json(`Added plant ${name}`);
  } catch (error) {
    console.error("Error adding plant:", error);
    return res.status(500).send("Error adding plant");
  }
};

const deletePlant = async (req, res) => {
  const { plantId } = req.body
  const { accessToken, refreshToken } = req.cookies;

  try {
    const events = await db("events")
      .where({ plant_id: plantId })
      .select('google_id');
    console.log('ids', events, plantId)

    oAuth2Client.setCredentials({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    
    const results = await Promise.all(events.map(async (event) => {
      const id = event.google_id
      calendar.events.delete(
        { calendarId: "primary", eventId: id },
        (err, eventRes) => {
          if (err) return console.error("Calendar event deletion error: ", err)

          return console.log("Calendar event was deleted!", id)
        }
      )
    }))
    console.log('results', results);

    await db("plants").where({ id: plantId }).del()

    return res.status(201).json(`Deleted plant: ${plantId}`);
  } catch (error) {
    console.error("Error deleting plant:", error);
    return res.status(500).send("Error deleting plant");
  }
} 


// const fetchCalendar = async (req, res) => {
//   const { accessToken, refreshToken } = req.cookies;
//   console.log(req.cookies)

//   oAuth2Client.setCredentials({
//     access_token: accessToken,
//     refresh_token: refreshToken,
//   });

//   try {
//     const response = await calendar.events.list({
//       calendarId: 'primary',
//       timeMin: timeMin,
//       maxResults: 100,
//       singleEvents: true,
//       orderBy: 'startTime',
//     });


//     const events = response.data.items;

//     if (events.length) {
//       console.log('Upcoming events:');
//       events.forEach((event) => {
//         const start = event.start.dateTime || event.start.date;
//         console.log(`${start} - ${event.summary}`);
//       });
//     } else {
//       console.log('No upcoming events found.');
//     }

//     return res.status(200).json(events);
//   } catch (error) {
//     console.error('Error retrieving events:', error);
//     return res.status(500).send('Failed to retrieve calendar events');
//   }
// };
module.exports = {
  addPlant,
  fetchPlants,
  deletePlant
};