import "./styles/penaltiesButton.css"

function PenaltiesButton({scoreType, getScore, incrementScore}) {
    let increment = (getScore(scoreType) == 2) ? -2 : 1
    let buttonColor; 
    let penaltyStatus;

    // TODO: switch case for better code 

    if (getScore(scoreType) == 0) {
        buttonColor = "none"
        penaltyStatus = "None"
    } else if (getScore(scoreType) == 1) {
        buttonColor = "some"
        penaltyStatus = "Some"
    } else if (getScore(scoreType) == 2) {
        buttonColor = "egregious"
        penaltyStatus = "Egregious (yellow/red card)"
    }

    return (     
        <>
            <button onClick={() => incrementScore(scoreType, increment)} id={buttonColor}>{penaltyStatus}</button>
        </>
    );
  }
  
  export default PenaltiesButton;
