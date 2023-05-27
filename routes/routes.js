const express = require('express')
const router = express.Router()

const { 
    createTask, 
    getAllTasks, 
    getSingleTask
} = require('../controllers/tasksController')

router.get('/api/v1/tasks', getAllTasks)
router.get('/api/v1/tasks/:id', getSingleTask)

router.post('/api/v1/tasks', createTask)

router.put('/api/v1/tasks/:id', (req, res)=> {})
router.delete('/api/v1/task/:id', (req, res)=> {})

module.exports = router;