require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const router = express.Router()
const calendarRoute = require('./routes/calendar.js')
const plantsRoute = require("./routes/plants.js")
const PORT = process.env.PORT || 5050;


require('dotenv').config();

app.use(express.json());
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParser());

app.use('/', calendarRoute);
app.use('/', plantsRoute)

app.get("/", (_req, res) => {
  res.status(200).json("Welcome to the Growmie API!")
})

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});

module.exports = router;