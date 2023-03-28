const express = require('express')
const app = express()
const googleSheets = require('./googleSheets')

app.use(express.json())

app.get('/api/scouting/results', (req, res) => {
    res.send('hi')
})

app.post('/api/scouting/results', (req, res) => {
    res.send('hi')    

    let scores = req.body.scores
    googleSheets.addRowsToSheet([[
        scores[0].scoreValue,
        scores[1].scoreValue,
        scores[2].scoreValue,
        scores[3].scoreValue,
        scores[4].scoreValue,
        scores[5].scoreValue,
    ]])
})

module.exports = app