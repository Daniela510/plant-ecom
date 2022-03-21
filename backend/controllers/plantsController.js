import asyncHandler from 'express-async-handler'

import Plants from "../models/plantModel.js"

// @desc Get goals 
// @route GET /api/goals
//access Private
const getPlants = asyncHandler(async (req, res) => {
    const plants = await Plants.find()
    res.status(200).json(plants)
})

// @desc Set goals 
// @route POST /api/goals
//access Private
const addPlant = asyncHandler(async (req, res) => {
    if(!req.body.name) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    const plant = await Plants.create({
        name: req.body.name,
        genus: req.body.genus,
        light: req.body.light,
        origin: req.body.origin,
        water: req.body.water,
        desc: req.body.desc,
        sizecm: req.body.sizecm,
        size: req.body.size,
        toxic: req.body.toxic,
        rating: req.body.rating,
        image: req.body.image,
    })
    res.status(200).json(plant)
})

// @desc Update goal
// @route PUT /api/goals/:id
//access Private
const updatePlant = asyncHandler(async (req, res) => {
    const plant = await Plants.findById(req.params.id)
    if(!plant){
        res.status(400)
        throw new Error('plant not found')
    }
    const updatedPlant = await Plants.findByIdAndUpdate(req.params.id, req .body, {
        new: true,
    })
    res.status(200).json(updatedPlant)
})

// @desc Delete goal
// @route DELETE /api/goals/:id
//access Private
const deletePlant = asyncHandler(async (req, res) => {
    const plant = await Plants.findById(req.params.id)
    if(!plant){
        res.status(400)
        throw new Error('plant not found')
    }
    await plant.remove()
    res.status(200).json({
        id: req.params.id,
        message: `deleted the plant`})
})


export {
    getPlants, addPlant, updatePlant, deletePlant 
}