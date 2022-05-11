const express = require('express')
const cors = require('cors')
require('dotenv').config()
const projects = require('./projects.json')
const about = require('./about.json')

const app = express()
const PORT = process.env.PORT

app.use(cors())

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/projects', (req, res) => {
    res.json(projects)
})

app.get('/about', (req, res) => {
    res.json(about) 
})


app.listen(PORT, () => {
    console.log(`Listening on port - ${PORT} ✔`)
})