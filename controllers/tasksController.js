const TaskDB = require('../models/TaskModel')

const createTask = async (req, res) => {
    const task = req.body
    const newTask = await TaskDB.create(task)
    res.status(200).json(newTask)
}

const getAllTasks = async (req,res) => {
    const tasks = await TaskDB.find()
    res.status(200).json(tasks)
}
const getSingleTask = async (req,res) => {
    const {id} = req.params
    try {
        const task = await TaskDB.findById({_id: id})
        res.status(200).json(task)
    } catch (e) {
        res.status(404).json({status: 'Task not found!'})
    }
}
const editTask = async (req,res) => {
    const {id} = req.params
    const {body} = req.body
    const task = await TaskDB.findByIdAndUpdate({_id: id}, body)
    if(!task){
        res.status(404).json({status: 'Task not found!'})
    } else {
        res.status(200).json(task)
    }
}
const deleteTask = async (req,res) => {
    const {id} = req.params
    const task = await TaskDB.findByIdAndDelete({_id: id})
    if(!task){
        res.status(404).json({status: 'Task not found!'})
    } else {
        res.status(200).json({status: "Task deleted!"})
    }
}


module.exports= {
    createTask,
    getAllTasks,
    getSingleTask,
    editTask
}