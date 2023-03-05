import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teleop from './Teleop.js'
import Auto from './Auto.js'
import "./index.css"

function App() {
  const [scores, setScores] = useState([
    {
      scoreType: "Cone High Auto",
      scoreValue: 0,
    },
    {
      scoreType: "Cone Mid Auto",
      scoreValue: 0,
    },
    {
      scoreType: "Cone Low Auto",
      scoreValue: 0,
    },
    {
      scoreType: "Cube High Auto",
      scoreValue: 0,
    },
    {
      scoreType: "Cube Mid Auto",
      scoreValue: 0,
    },
    {
      scoreType: "Cube Low Auto",
      scoreValue: 0,
    },
    {
      scoreType: "Cone High Teleop",
      scoreValue: 0,
    },
    {
      scoreType: "Cone Mid Teleop",
      scoreValue: 0,
    },
    {
      scoreType: "Cone Low Teleop",
      scoreValue: 0,
    },
    {
      scoreType: "Cube High Teleop",
      scoreValue: 0,
    },
    {
      scoreType: "Cube Mid Teleop",
      scoreValue: 0,
    },
    {
      scoreType: "Cube Low Teleop",
      scoreValue: 0,
    },

    // 0 is undocked, 1 is docked, 2 is engaged
    {
      scoreType: "Charge Station Auto",
      scoreValue: 0
    },
    {
      scoreType: "Charge Station Endgame",
      scoreValue: 0
    }
  ])

  // change 
  function incrementScore(scoreType, increment) {
    let newScoreObject = scores.map(score => {
      if (score.scoreType == scoreType && score.scoreValue + increment >= 0) {
        return {
          ...score,
          scoreValue: score.scoreValue + increment
        }
      }
      return score   
    })
    setScores(newScoreObject)
  }

  function getScore(scoreType) {
    let getScoreIndex = scores.findIndex((score => score.scoreType == scoreType));
    return scores[getScoreIndex].scoreValue
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/autonomous" element={<Auto getScore={getScore} incrementScore={incrementScore}/>} />
          <Route path="/teleop" element={<Teleop getScore={getScore} incrementScore={incrementScore}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
