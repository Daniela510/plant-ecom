import mongoose from "mongoose";
const plantSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add plant name']
    },
    genus:{
        type: String,
        required: [true, 'Please add plant scientific genus']
    },
    light:{
        type: String,
        required: [true, 'Please specify plant light preference']
    },
    origin:{
        type: String,
        required: [true, 'Please specify plant origin area']
    },
    water:{
        type: String,
        required: [true, 'Please specify water needs']
    },
    desc: {
        type: String,
        required: [true, 'Please add a plant decription']
    },
    size: {
        type: String,
        required: [true, 'Please add aproximate plant size']
    },
    sizecm: {
        type: String,
        required: [true, 'Please add aproximate plant size']
    },
    toxic: {
        type: Boolean,
        required: [true, 'Please specify if the plant is toxic']
    },
    rating: {
        type: Number,
        required: [true, 'Please add overall care difficulty out of 5']
    },
    image: {
        type: String,
        required: [true, 'Please add image url']
    },
}, {
    timeStamps: true,
})

export default mongoose.model('Plant', plantSchema)