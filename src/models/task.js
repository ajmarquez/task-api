const mongoose = require('mongoose')
const { ObjectID } = require('mongodb')


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
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
})

module.exports = Task