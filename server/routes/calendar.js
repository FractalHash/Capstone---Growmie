const router = require('express').Router()
const calendarController = require("../controllers/calendarData")

router.route('/calendar')
  .post(calendarController.addPlant)
  .get(calendarController.fetchCalendar)



module.exports = router;