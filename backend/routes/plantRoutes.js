import express from 'express'
const router = express.Router()
import {getPlants, addPlant, updatePlant, deletePlant} from '../controllers/plantsController.js'

router.route('/').get(getPlants).post(addPlant)

router.route('/:id').put(updatePlant).delete(deletePlant)

export default router