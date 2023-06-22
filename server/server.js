require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const cookieParser = require("cookie-parser");
const router = express.Router()
const calendarRoute = require('./routes/calendar.js')
const PORT = process.env.PORT || 5050;


// const { google } = require('googleapis')
// const { OAuth2 } = google.auth

// const oAuth2Client = new OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.REDIRECT_URL
// )

// oAuth2Client.setCredentials({
//   refresh_token: process.env.refresh_token
// })


// const calendar = google.calendar({
//   version: 'v3',
//   auth: oAuth2Client,
// })

// const timeMin = '2023-06-22T00:00:00Z'



require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/', calendarRoute);


app.get("/", (_req, res) => {
  res.status(200).json("Welcome to the Growmie API!")
})

// calendar.events.list(
//   {
//     calendarId: 'primary',
//     timeMin: timeMin,
//     maxResults: 100,
//     singleEvents: true,
//     orderBy: 'startTime',
//   },
//   (err, response) => {
//     if (err) {
//       console.error('Error retrieving events:', err);
//       return;
//     }
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
//   }
// );


app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});

module.exports = router;