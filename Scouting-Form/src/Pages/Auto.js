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

    function handleBack(e) {
        e.preventDefault()
        setCompletedForms({
            ...completedForms,
            autonomous: false
        })
        navigate('/')
    }

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
            <h1 id='title'>Autonomous Period</h1>
            <div className='cone'>
                <ScoreButton scoreType="High Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
                <ScoreButton scoreType="Mid Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
                <ScoreButton scoreType="Low Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>            
            </div>
            
            <div className="mobilityAndDock">
                <p id="autoDockMobilityStatusHeader"><b>Docking and Mobility Status:</b></p>
                <ChargeStation scoreType="Charge Station Auto" getScore={getScore} incrementScore={incrementScore}></ChargeStation>
                <MobilityButton scoreType="Auto Mobility" getScore={getScore} incrementScore={incrementScore} isAuto={true}></MobilityButton>
            </div>

            <div className="navigation">
                <p></p>
                <button type='submit' onClick={handleSubmit}>Go To Teleop Page</button>
                <button type='back' onClick={handleBack}>Back To User Info</button>
            </div>
        </div>
    )    
}

export default Auto;