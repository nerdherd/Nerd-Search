const express = require('express')
const serverless = require('serverless-http')

const googleSheets = require('./googleSheets')

const app = express()
const router = express.Router()

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/scouting/results', (req, res) => {
    res.send('hi')
})

router.post('/scouting/results', (req, res) => {
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

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)