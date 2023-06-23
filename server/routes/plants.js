const express = require('express');
const router = require('express').Router()
const plantsController = require("../controllers/plantsData")


router.route('/plants')
  .get(plantsController.fetchPlants)



module.exports = router;