const TaskDB = require('../models/TaskModel')

const createTask = async (req, res) => {
    const task = req.body
    const newTask = await TaskDB.create(task)
    res.status(200).json(newTask)
}

const getAllTasks = async (req, res) => {
    try{
        const tasks = await TaskDB.find()
        res.status(200).json(tasks)
    } catch (e) {
        console.log(e)
    }
}

const getSingleTask = async (req, res) => {
    const {id} = req.params
    try {
        const task = await TaskDB.findById({_id: id})
        res.status(200).json(task)
    } catch (e) {
        res.status(404).json({status: 'Task not found!'})
    }
}

const editTask = async (req, res) => {
    const {id} = req.params
    const body = req.body

    try {
        const task = await TaskDB.findByIdAndUpdate(id, body, {returnDocument: 'after', useFindAndModify: false})
        task.save()
        res.status(200).json(task)
    } catch (e) {
        res.status(404).json({status: 'Task not found!'})
    }    
}

const deleteTask = async (req, res) => {
    const {id} = req.params
    try {
        await TaskDB.findByIdAndDelete(id)
        res.status(200).json({status: 'Task Deleted!'})
    } catch (e) {
        console.log(e)
        res.status(404).json({status: 'Task not found!'})
    }    
}


module.exports= {
    createTask,
    getAllTasks,
    getSingleTask,
    editTask,
    deleteTask
}