import PenaltiesButton from "../Forms/PenaltiesButton.js";
import FocusButton from "../Forms/FocusButton.js";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './styles/matchInfo.css'

function MatchInfo({matchInfo, setMatchInfo, getScore, incrementScore, completedForms, setCompletedForms}) {
    const navigate = new useNavigate()
    
    useEffect(() => {
        if (completedForms.teleop !== true) {
            navigate('/scouterInfo')
        }
    })

    function handleChange(e) {
        setMatchInfo({
            ...matchInfo,
            [e.target.name]: e.target.value
        })
        console.log(matchInfo)
    }

    function handleBack(e) {
        e.preventDefault()
        setCompletedForms({
            ...completedForms,
            matchInfo: false
        })
        navigate('/teleop')
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        setCompletedForms({
            ...completedForms,
            matchInfo: true
        })
        navigate('/comments')
    }

    return (
        <div id='mainDiv'> 
            <p id='title'><b>Match Info</b></p>
            <p id="roleHeader"><b>What role did they play?</b></p>
            <div onChange={handleChange} className="matchInforadioInput">
                <input type="checkbox" value="scorer" name="robotRole" /> Scorer
                <input type="checkbox" value="defense" name="robotRole" /> Defense
                <input type="checkbox" value="feeder" name="robotRole" /> Feeder
                <input type="checkbox" value="noRole" name="robotRole" /> No Role
            </div>

            <div id="penalties">
                <p id="penaltiesHeader"><b>Penalties?</b></p>
                <PenaltiesButton scoreType="Penalties" getScore={getScore} incrementScore={incrementScore}></PenaltiesButton>
            </div>

            <p id="abilityHeader"><b>Able to Score</b></p>

            <div onChange={handleChange} className="matchInforadioInput">
                <input type="checkbox" value="cube" name="scoreAbility" /> Cubes
                <input type="checkbox" value="cone" name="scoreAbility" /> Cones
                <input type="checkbox" value="doesn't score" name="scoreAbility" /> Doesn't score
            </div>

            <div id="gamePieceFocus">
                <p id="focusHeader"><b>Focuses on Scoring</b></p>
                <FocusButton scoreType="Game Piece Focus" getScore={getScore} incrementScore={incrementScore}></FocusButton>
            </div>

            <button type='submit' onClick={handleSubmit}>Go To Comments Page</button>
            <button type='back' onClick={handleBack}>Back To Teleop Page</button>

        </div>

    )
}

export default MatchInfo
