const mongoose = require('mongoose')
const { Schema } = mongoose

const taskSchema = new Schema({
    name: String,
    description: String,
    completed: Boolean
},{
    collection: 'Tasks',
})

module.exports = TaskDB = mongoose.model('Tasks', taskSchema)