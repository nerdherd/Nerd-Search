const express = require('express')
const serverless = require('serverless-http')
const fs = require('fs');

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
    
    let json = require('./credentials.json');
    console.log(json, 'the json obj');

    let scores = req.body.scores

    const googleSheetsReq = googleSheets.addRowsToSheet([[
        scores[0].scoreValue,
        scores[1].scoreValue,
        scores[2].scoreValue,
        scores[3].scoreValue,
        scores[4].scoreValue,
        scores[5].scoreValue,
    ]])
    res.send("bruh")
    res.end()

})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)