const express = require('express')
const app = express()
const mongoConnect = require('./services/mongoose')
const routes = require('./routes/routes.js')

require('dotenv').config()

app.use(express.json())

// routes
app.use(routes)

const start = async () => {
    try {
        await mongoConnect(process.env.MONGO_URI)
        const port = 3001
        app.listen(port || 5000, () => {
        console.log(`Server Running on http://localhost:${port || 5000}`)
        })
    } catch (e) {
        console.log(e)
        console.log('Erro ao conectar!')
    }
}

start()
