import ChargeStation from "../Forms/ChargeStation.js";
import ScoreButton from "../Forms/ScoreButton.js"
import MobilityButton from "../Forms/MobilityButton.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './styles/scoringPages.css'
function Auto({getScore, incrementScore, completedForms, setCompletedForms}) {
    const navigate = useNavigate()

    useEffect(() => {
        if (completedForms.scouterInfo !== true) {
            navigate('/scouterInfo')
        }
    })


    function handleSubmit(event) {
        event.preventDefault()
        setCompletedForms({
            ...completedForms,
            autonomous: true
        })
        navigate('/teleop')
    }

    return (
        <div className='mainDiv'>
            <div className='cone'>
                <ScoreButton scoreType="High Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
                <ScoreButton scoreType="Mid Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
                <ScoreButton scoreType="Low Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>            
            </div>
            
            <ChargeStation scoreType="Charge Station Auto" getScore={getScore} incrementScore={incrementScore}></ChargeStation>
            <MobilityButton scoreType="Auto Mobility" getScore={getScore} incrementScore={incrementScore} isAuto={true}></MobilityButton>
            <button type='submit' onClick={handleSubmit}>Teleop Started</button>
        </div>
    )    
}

export default Auto;