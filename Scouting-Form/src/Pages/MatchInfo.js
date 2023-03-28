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

            <h4>What role did their robot play throughout the match?</h4>
            <div onChange={handleChange} className="radioInput">
                <input type="checkbox" value="scorer" name="robotRole" /> Scorer
                <input type="checkbox" value="defense" name="robotRole" /> Defense
                <input type="checkbox" value="feeder" name="robotRole" /> Feeder
                <input type="checkbox" value="noRole" name="robotRole" /> No Role
            </div>

            <h4>Penalties?</h4>

            <div onChange={handleChange} className="radioInput">
                <input type="radio" value="egregious" name="penalty" /> Egregious (ie. Red/Yellow Card)
                <input type="radio" value="some" name="penalty" /> Some
                <input type="radio" value="none" name="penalty" /> None
            </div>

            <h4>Able to Score</h4>

            <div onChange={handleChange} className="radioInput">
                <input type="checkbox" value="cube" name="scoreAbility" /> Cubes
                <input type="checkbox" value="cone" name="scoreAbility" /> Cones
                <input type="checkbox" value="doesn't score" name="scoreAbility" /> Doesn't score
            </div>

            <div className="gamePieceFocus">
                <h4>Focuses on Scoring</h4>
                <FocusButton scoreType="Game Piece Focus" getScore={getScore} incrementScore={incrementScore}></FocusButton>
            </div>

            <button type='submit' onClick={handleSubmit}>Go To Comments Page</button>
            <button type='back' onClick={handleBack}>Back To Teleop Page</button>

        </div>

    )
}

export default MatchInfo
