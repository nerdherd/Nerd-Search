import ScoreButton from "./ScoreButton.js"

function Teleop({getScore, incrementScore}) {
    return (
        <>
            <ScoreButton scoreType="Cone High Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
            <ScoreButton scoreType="Cone Mid Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
            <ScoreButton scoreType="Cone Low Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
            <ScoreButton scoreType="Cube High Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
            <ScoreButton scoreType="Cube Mid Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
            <ScoreButton scoreType="Cube Low Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
        </>
    )    
}

export default Teleop;