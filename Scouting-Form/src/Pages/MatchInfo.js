import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './styles/matchInfo.css'

function MatchInfo({matchInfo, setMatchInfo, completedForms, setCompletedForms}) {
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

            <p>What role did their robot play throughout the match?</p>
            <div onChange={handleChange} className="radioInput">
                <input type="radio" value="scorer" name="robotRole" /> Scorer
                <input type="radio" value="defense" name="robotRole" /> Defense
                <input type="radio" value="feeder" name="robotRole" /> Feeder
                <input type="radio" value="noRole" name="robotRole" /> No Role
            </div>

            <p>How good was their driver?</p>
            <div onChange={handleChange} className="radioInput">
                <input type="radio" value="good" name="driver" /> Good
                <input type="radio" value="okay" name="driver" /> Okay
                <input type="radio" value="bad" name="driver" /> Bad
            </div>

            <p>Penalties?</p>

            <div onChange={handleChange} className="radioInput">
                <input type="radio" value="egregious" name="penalty" /> Egregious (ie. Red/Yellow Card)
                <input type="radio" value="some" name="penalty" /> Some
                <input type="radio" value="none" name="penalty" /> None
            </div>

            <p>Game Piece Focus</p>

            <div onChange={handleChange} className="radioInput">
                <input type="radio" value="cone" name="focus" /> Cone
                <input type="radio" value="cube" name="focus" /> Cube
            </div>

            <button type='submit' onClick={handleSubmit}>Comments Page</button>

        </div>

    )
}

export default MatchInfo