const express = require('express')
const router = express.Router()

router.get('/api/v1/tasks', (req, res)=> {})
router.get('/api/v1/task/:id', (req, res)=> {})

router.post('/api/v1/tasks', (req, res)=> {})

router.put('/api/v1/task/:id', (req, res)=> {})
router.delete('/api/v1/task/:id', (req, res)=> {})

module.exports = router;