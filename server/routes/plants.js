const router = require('express').Router()
const plantsController = require("../controllers/plantsData")

router.route('/plants')
  .get(plantsController.fetchPlants)
  .post(plantsController.addPlant)
  .delete(plantsController.deletePlant)

module.exports = router;