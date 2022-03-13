const asyncHandler = require('express-async-handler')

const Plants = require("../models/plantModel")

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
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    const plant = await Plants.create({
        text: req.body.text
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
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req .body, {
        new: true,
    })
    res.status(200).json(updatedPlant)
})

// @desc Delete goal
// @route DELETE /api/goals/:id
//access Private
// const deleteGoal = asyncHandler(async (req, res) => {
//     const goal = await Goal.findById(req.params.id)
//     if(!goal){
//         res.status(400)
//         throw new Error('goal not found')
//     }
//     await goal.remove()
//     res.status(200).json({
//         id: req.params.id,
//         message: `deleted the goal`})
// })


module.exports = {
    getPlants, addPlant, updatePlant, 
}