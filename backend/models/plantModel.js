const mongoose = require('mongoose')
const plantSchema = mongoose.Schema({
    desc: {
        type: String,
        required: [true, 'Please add text value']
    }
}, {
    timeStamps: true,
})

module.exports = mongoose.model('Plant', plantSchema)