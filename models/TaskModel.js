const mongoose = require('mongoose')
const { Schema } = mongoose

const taskSchema = new Schema({
    title: String,
    description: String,
    completed: Boolean
},{
    collection: 'Tasks',
})

module.exports = TaskDB = mongoose.model('Tasks', taskSchema)