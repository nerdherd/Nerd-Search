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
    try {
        let response = googleSheets.addRowsToSheet([[
            scores[0].scoreValue,
            scores[1].scoreValue,
            scores[2].scoreValue,
            scores[3].scoreValue,
            scores[4].scoreValue,
            scores[5].scoreValue,
        ]])
        res.json(response)
        res.status(200)
    } catch (err) {
        res.send(err)
        res.status(500)
    }

    res.end()
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)