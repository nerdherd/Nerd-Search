import ChargeStation from "../Forms/ChargeStation.js";
import MobilityButton from "../Forms/MobilityButton.js";
import ScoreButton from "../Forms/ScoreButton.js"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Teleop({matchInfo, setMatchInfo, getScore, incrementScore, completedForms, setCompletedForms}) {
    const navigate = useNavigate()


    useEffect(() => {
        console.log(completedForms)
        if (completedForms.scouterInfo !== true) {
            navigate('/scouterInfo')
        } else if (completedForms.autonomous !== true) {
            navigate('/autonomous')
        }
    })

    function handleChange(e) {
        setMatchInfo({
            ...matchInfo,
            [e.target.name]: e.target.value
        })
        console.log(matchInfo)
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        setCompletedForms({
            ...completedForms,
            teleop: true
        })
        navigate('/matchinfo')
    }

    return (
        <div className="mainDiv">
            <div className='cone'>
                <ScoreButton scoreType="High Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
                <ScoreButton scoreType="Mid Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
                <ScoreButton scoreType="Low Teleop" getScore={getScore} incrementScore={incrementScore} isAuto={false}></ScoreButton>        
            </div>

            <p>Where does the robot intake game pieces?</p>
            <div onChange={handleChange} className="radioInput">
                <input type="checkbox" value="floor" name="intakeLocation" /> floor
                <input type="checkbox" value="singleSubstation" name="intakeLocation" /> single substation
                <input type="checkbox" value="doubleSubstationD" name="intakeLocation" /> double substation: drop
                <input type="checkbox" value="doubleSubstationS" name="intakeLocation" /> double substation: shelf
                <input type="checkbox" value="none" name="intakeLocation" /> no intake
            </div>
            
            <ChargeStation scoreType="Charge Station Endgame" getScore={getScore} incrementScore={incrementScore}></ChargeStation>
            <MobilityButton scoreType="Teleop Mobility" getScore={getScore} incrementScore={incrementScore}></MobilityButton>
            <button type='submit' onClick={handleSubmit}>Match Info</button>
        </div>
    )    
}

export default Teleop;