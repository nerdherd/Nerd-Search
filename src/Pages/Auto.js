import ChargeStation from "../Forms/ChargeStation.js";
import ScoreButton from "../Forms/ScoreButton.js"
import { redirect, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
        <>
            <div className='cone'>
                <ScoreButton scoreType="Cone High Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
                <ScoreButton scoreType="Cone Mid Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
                <ScoreButton scoreType="Cone Low Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>            
            </div>
            <div className='cube'>
                <ScoreButton scoreType="Cube High Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
                <ScoreButton scoreType="Cube Mid Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
                <ScoreButton scoreType="Cube Low Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>       
            </div>
            <ChargeStation scoreType="Charge Station Auto" getScore={getScore} incrementScore={incrementScore}></ChargeStation>
            <button type='submit' onClick={handleSubmit}>Teleop</button>
        </>
    )    
}

export default Auto;