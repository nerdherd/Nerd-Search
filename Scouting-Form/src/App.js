import React, { useState } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Teleop from './Pages/Teleop.js'
import Auto from './Pages/Auto.js'
import "./index.css"
import ScouterInfo from "./Pages/ScouterInfo.js";
import FormComplete from "./Pages/FormComplete.js";
import MatchInfo from "./Pages/MatchInfo.js";
import Comments from "./Pages/Comments.js";

function App() {

  const initialMatchInfoState = {
    robotRole: '',
    penalty: '',
    ability: '',
    focus: '',
  }

  const [matchInfo, setMatchInfo] = useState(initialMatchInfoState)

  const initialScoreState = [
    {
      scoreType: "High Auto",
      scoreValue: 0,
    },
    {
      scoreType: "Mid Auto",
      scoreValue: 0,
    },
    {
      scoreType: "Low Auto",
      scoreValue: 0,
    },
    {
      scoreType: "High Teleop",
      scoreValue: 0,
    },
    {
      scoreType: "Mid Teleop",
      scoreValue: 0,
    },
    {
      scoreType: "Low Teleop",
      scoreValue: 0,
    },

    {
      scoreType: "Missed Game Pieces",
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
    },

    // during auto: 0 is has not left community, 1 is left community
    // during teleop: 0 is not parked in community, 1 is parked in community
    {
      scoreType: "Auto Mobility",
      scoreValue: 0
    },
    {
      scoreType: "Teleop Mobility",
      scoreValue: 0
    },

    // coopertition use: 0 is cannot score, 1 is no, 2 is yes
    {
      scoreType: "Coopertition Use",
      scoreValue: 1
    },
    // game piece focus: 0 is didn't score, 1 is cubes, 2 is cones
    {
      scoreType: "Game Piece Focus",
      scoreValue: 1
    },

    // penalties: 0 is none, 1 is some, 2 is egregious
    {
      scoreType: "Penalties",
      scoreValue: 0
    }
  ]

  const [scores, setScores] = useState(initialScoreState)
  


  const [scouterInfo, setScouterInfo] = useState({
    username: '',
    matchNumber: '',
    teamNumber: ""

  })

  const [scouterComments, setScouterComments] = useState({
    driverComments: '',
    intakeComments: '',
    redFlags: '',
    teleopComments: '',
    uniqueComments: '',
    autonomousComments: '',
    additionalComments: ""

  })
  
  const initialScouterInfoState = {
    username: scouterInfo.username,
    matchNumber: Number(scouterInfo.matchNumber) + 1,
    teamNumber: ""
  }

  const initialCompletedForms = {
    scouterInfo: false,
    autonomous: false,
    teleop: false,
    matchInfo: false
  }

  const [completedForms, setCompletedForms] = useState(initialCompletedForms)

  const resetStates = () => {
    setScores(initialScoreState)
    setScouterInfo(initialScouterInfoState)
    setCompletedForms(initialCompletedForms)
    setMatchInfo(initialMatchInfoState)
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

  function postData() {
    fetch('https://kaleidoscopic-syrniki-80cc89.netlify.app/.netlify/functions/api/scouting/results', {
      method: 'POST',
      body: JSON.stringify({
          scores: scores
      }),  
      headers: {
        'Content-type': 'application/json; charset=UTF-8',

      },
    }).catch((err) => {
      console.log(err.message)
    })
  }

  return (
    <HashRouter>
      <Routes>
          <Route path='/' element={<ScouterInfo scouterInfo={scouterInfo} setScouterInfo={setScouterInfo} completedForms={completedForms} setCompletedForms={setCompletedForms}/>} />  
          <Route path='/scouterInfo' element={<ScouterInfo scouterInfo={scouterInfo} setScouterInfo={setScouterInfo} completedForms={completedForms} setCompletedForms={setCompletedForms}/>} />
          <Route path="/autonomous" element={<Auto getScore={getScore} incrementScore={incrementScore} completedForms={completedForms} setCompletedForms={setCompletedForms}/>}  />
          <Route path="/teleop" element={<Teleop getScore={getScore} incrementScore={incrementScore} matchInfo={matchInfo} setMatchInfo={setMatchInfo} setCompletedForms={setCompletedForms} completedForms={completedForms}/>}  />
          <Route path="/formComplete" element={<FormComplete matchNumber={scouterInfo.matchNumber} teamNumber={scouterInfo.teamNumber}  resetStates={resetStates}/>}></Route>
          <Route path='/matchInfo' element={<MatchInfo getScore={getScore} incrementScore={incrementScore} matchInfo={matchInfo} setMatchInfo={setMatchInfo} completedForms={completedForms} setCompletedForms={setCompletedForms}/>} />
          <Route path='/comments' element={<Comments scouterComments={scouterComments} setScouterComments={setScouterComments} completedForms={completedForms} setCompletedForms={setCompletedForms} postData={postData}/>} />
      </Routes>
    </HashRouter>
  )
}

export default App;
