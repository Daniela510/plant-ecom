import express from 'express'
const router = express.Router()
import {getPlants, addPlant, updatePlant, deletePlant} from '../controllers/plantsController.js'
import {adminCheck} from '../middlware/authMiddleware.js'

router.route('/').get(getPlants).post(adminCheck, addPlant)

router.route('/:id').put(adminCheck, updatePlant).delete(adminCheck, deletePlant)

export default router