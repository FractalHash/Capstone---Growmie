const router = require('express').Router()
const calendarController = require("../controllers/calendarData")

router.route('/calendar')
  .get(calendarController.fetchCalendar)
  .post(calendarController.addUser)

module.exports = router;