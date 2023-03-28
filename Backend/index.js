const express = require('express')
const app = express()
const googleSheets = require('./googleSheets')

app.use(express.json())

app.get('/api/scouting/results', (req, res) => {
    res.send('hi')
})

app.post('/api/scouting/results', (req, res) => {
    res.send('hi')
    googleSheets.addRow()
})

module.exports = app