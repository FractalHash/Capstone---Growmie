const knex = require('knex')
const knexConfig = require('../knexfile');

const db = knex(knexConfig);

const fetchPlants = async (req, res) => {
  try {
    const userEmail = req.query.email;

    const plants = await knex('plants')
      .select()
      .where('user_email', userEmail);

    return res.status(200).json(plants);
  } catch (error) {
    console.error('Error fetching plants:', error);
    return res.status(500).send('Error fetching plants');
  }
};



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
  fetchPlants
};