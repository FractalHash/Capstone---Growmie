const knex = require('knex')
const knexConfig = require('../knexfile');

const db = knex(knexConfig);

const { google } = require('googleapis')
const { OAuth2 } = google.auth

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
})

const timeMin = '2023-06-22T00:00:00Z'







const addPlant = async (req, res) => {
  const {
    name,
    stageOfLife,
    growingMedium,
    growingEnvironment,
    nutrients,
    date,
    time,
    email
  } = req.body;

  if (
    !name ||
    !stageOfLife ||
    !growingMedium ||
    !growingEnvironment ||
    !nutrients ||
    !date ||
    !time ||
    !email
  ) {
    return res.status(400).send("Please fill out all fields before submission");
  }

  try {
    await db('plants').insert({
      name: name,
      stage_of_life: stageOfLife,
      growing_medium: growingMedium,
      growing_environment: growingEnvironment,
      nutrients: nutrients,
      start_date: date,
      event_time: time,
      user_email: email,
      harvest_date: "2023-10-10"
    });

    return res.status(201).json(`Added plant ${name}`);
  } catch (error) {
    console.error("Error adding plant:", error);
    return res.status(500).send("Error adding plant");
  }
};



const fetchCalendar = async (req, res) => {
  const { accessToken, refreshToken } = req.cookies;
  console.log(req.cookies)

  oAuth2Client.setCredentials({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  try {
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: timeMin,
      maxResults: 100,
      singleEvents: true,
      orderBy: 'startTime',
    });


    const events = response.data.items;

    if (events.length) {
      console.log('Upcoming events:');
      events.forEach((event) => {
        const start = event.start.dateTime || event.start.date;
        console.log(`${start} - ${event.summary}`);
      });
    } else {
      console.log('No upcoming events found.');
    }

    return res.status(200).json(events);
  } catch (error) {
    console.error('Error retrieving events:', error);
    return res.status(500).send('Failed to retrieve calendar events');
  }
};



// const eventStartTime = new Date()
// eventStartTime.setDate(eventStartTime.getDay() + 27)

// const eventEndTime = new Date()
// eventEndTime.setDate(eventEndTime.getDay() + 27)
// eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)

// const event = {
//   summary: 'Test growmie event',
//   location: '278A Queen St W, Toronto, ON M5V 2A1',
//   description: 'Testing the growmie scheduler',
//   start: {
//     dateTime: eventStartTime,
//     timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
//   },
//   end: {
//     dateTime: eventEndTime,
//     timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
//   },
//   colorId: 2,
// }

// calendar.freebusy.query(
//   {
//     resource: {
//       timeMin: eventStartTime,
//       timeMax: eventEndTime,
//       timeZone: 'America/Toronto',
//       items: [{ id: 'primary' }],
//     },
//   },
//   (err, res) => {
//   if (err) return console.error("Free Busy Query Error: ", err)
  
//   const eventsArr = res.data.calendars.primary.busy

//   if (eventsArr.length === 0)
//     return calendar.events.insert(
//       { calendarId: 'primary', resource: event },
//       err => {
//         if (err) return console.error("Calendar event creation error: ", err)
      
//         return console.log("Calendar event created")
//       }
//     )
//       return console.log("Sorry I'm busy")
//   }
// )


module.exports = {
  addPlant,
  fetchCalendar
};