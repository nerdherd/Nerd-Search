import ChargeStation from "../Forms/ChargeStation.js";
import ScoreButton from "../Forms/ScoreButton.js"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Teleop({getScore, incrementScore, completedForms, setCompletedForms}) {
    const navigate = useNavigate()


    useEffect(() => {
        console.log(completedForms)
        if (completedForms.scouterInfo !== true) {
            navigate('/scouterInfo')
        } else if (completedForms.autonomous !== true) {
            navigate('/autonomous')
        }
    })
    
    function handleSubmit(event) {
        event.preventDefault()
        setCompletedForms({
            ...completedForms,
            teleop: true
        })
        navigate('/formComplete')
    }

    return (
        <div className="mainDiv">
            <div className='cone'>
                <ScoreButton scoreType="High Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
                <ScoreButton scoreType="Mid Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
                <ScoreButton scoreType="Low Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>        
            </div>
            <ChargeStation scoreType="Charge Station Endgame" getScore={getScore} incrementScore={incrementScore}></ChargeStation>
            <button type='submit' onClick={handleSubmit}>Submit Scouting Form</button>
        </div>
    )    
}

export default Teleop;