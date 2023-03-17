import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teleop from './Pages/Teleop.js'
import Auto from './Pages/Auto.js'
import "./index.css"
import ScouterInfo from "./Pages/ScouterInfo.js";
import FormComplete from "./Pages/FormComplete.js";

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

  const [scouterInfo, setScouterInfo] = useState({
    username: "",
    matchNumber: "",
    teamNumber: ""
  })

  const [completedForms, setCompletedForms] = useState({
    scouterInfo: false,
    autonmous: false,
    teleop: false,
  })

  const initialScouterInfoState = {
    username: "",
    matchNumber: "",
    teamNumber: ""
  }

  const initialScoreState = [
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
  ]

  const initialCompletedForms = {
    scouterInfo: false,
    autonmous: false,
    teleop: false,
  }

  const resetStates = () => {
    setScores(initialScoreState)
    setScouterInfo(initialScouterInfoState)
    setCompletedForms(initialCompletedForms)
  }

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
          <Route path='/scouterInfo' element={<ScouterInfo scouterInfo={scouterInfo} setScouterInfo={setScouterInfo} completedForms={completedForms} setCompletedForms={setCompletedForms}/>} />
          <Route path="/autonomous" element={<Auto getScore={getScore} incrementScore={incrementScore} completedForms={completedForms} setCompletedForms={setCompletedForms}/>}  />
          <Route path="/teleop" element={<Teleop getScore={getScore} incrementScore={incrementScore} setCompletedForms={setCompletedForms} completedForms={completedForms}/>}  />
          <Route path="/formComplete" element={<FormComplete matchNumber={scouterInfo.matchNumber} teamNumber={scouterInfo.teamNumber} resetStates={resetStates}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
