import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add password']
    },
    admin: {
        type: Boolean,
    },
    fave: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plant' 
    }
}, {
    timeStamps: true,
})

export default mongoose.model('User', userSchema)