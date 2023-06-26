const express = require('express');
const router = require('express').Router()
const calendarController = require("../controllers/calendarData")

router.route('/calendar')
  .get(calendarController.fetchCalendar)


module.exports = router;