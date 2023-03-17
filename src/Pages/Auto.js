import ChargeStation from "../Forms/ChargeStation.js";
import ScoreButton from "../Forms/ScoreButton.js"
import { useNavigate } from "react-router-dom";

function Auto({getScore, incrementScore}) {
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
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