import asyncHandler from 'express-async-handler'

import Plants from "../models/plantModel.js"

// @desc Get plants 
// @route GET /api/plants
// access Public
const getPlants = asyncHandler(async (req, res) => {
    const plants = await Plants.find()
    res.status(200).json(plants)
})

// @desc Add plant 
// @route POST /api/plants
// access Admin
const addPlant = asyncHandler(async (req, res) => {
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
        price: req.body.price,
    })
    res.status(200).json(plant)
})

// @desc Update plant
// @route PUT /api/plants/:id
// access Admin
const updatePlant = asyncHandler(async (req, res) => {
    const plant = await Plants.findById(req.params.id)
    if(!plant){
        res.status(401)
        throw new Error('plant not found')
    }
    const updatedPlant = await Plants.findByIdAndUpdate(req.params.id, req .body, {
        new: true,
    })
    res.status(200).json(updatedPlant)
})

// @desc Delete plant
// @route DELETE /api/plants/:id
// access Admin
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