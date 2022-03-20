const express = require("express")
const router = express.Router()
const {getPlants, addPlant} = require('../controllers/plantsController')

router.route('/').get(getPlants).post(addPlant)

//router.route('/:id').put(updatePlant).delete(deletePlant)

module.exports = router