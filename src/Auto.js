import ScoreButton from "./ScoreButton.js"

function Auto({getScore, incrementScore}) {
    return (
        <>
            <ScoreButton scoreType="Cone High Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
            <ScoreButton scoreType="Cone Mid Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
            <ScoreButton scoreType="Cone Low Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
            <ScoreButton scoreType="Cube High Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
            <ScoreButton scoreType="Cube Mid Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
            <ScoreButton scoreType="Cube Low Auto" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
        </>
    )    
}

export default Auto;