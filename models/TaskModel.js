const mongoose = require('mongoose')
const { Schema } = mongoose

const taskSchema = new Schema({
    name: {
        type: String,
        maxlength: 20,
        // required: [true, 'Task must have a name!']
    },
    completed: {
        type: Boolean,
        default: false,
    }
},{
    collection: 'Tasks',
})

module.exports = TaskDB = mongoose.model('Tasks', taskSchema)