const express = require('express')
const serverless = require('serverless-http')

const googleSheets = require('./googleSheets')

const app = express()
const router = express.Router()

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://nerdherd.github.io");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
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

    res.status(500)
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)