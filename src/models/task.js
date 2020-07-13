const mongoose = require('mongoose')


const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
            if (value.length === 0) {
                throw new Error('Task description can\'t be empty')
            }
        }
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task