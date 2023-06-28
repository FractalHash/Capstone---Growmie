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

const fetchCalendar = async (req, res) => {
  const { accessToken, refreshToken } = req.cookies;

  oAuth2Client.setCredentials({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  try {
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: timeMin,
      maxResults: 500,
      singleEvents: true,
      orderBy: 'startTime',
    });


    const events = response.data.items;

    return res.status(200).json(events);
  } catch (error) {
    console.error('Error retrieving events:', error);
    return res.status(500).send('Failed to retrieve calendar events');
  }
};



const addUser = async (req, res) => {
  
}

module.exports = {
  fetchCalendar,
  addUser
};