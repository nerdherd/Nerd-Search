import "./styles/focusButton.css"

function FocusButton({scoreType, getScore, incrementScore}) {
    let increment = (getScore(scoreType) == 2) ? -2 : 1
    let buttonColor; 
    let focusStatus;

    // TODO: switch case for better code 

    if (getScore(scoreType) == 0) {
        buttonColor = "cannotScore"
        focusStatus = "Didn't Score"
    } else if (getScore(scoreType) == 1) {
        buttonColor = "cubes"
        focusStatus = "Cubes"
    } else if (getScore(scoreType) == 2) {
        buttonColor = "cones"
        focusStatus = "Cones"
    }

    return (     
        <>
            <button onClick={() => incrementScore(scoreType, increment)} id={buttonColor}>{focusStatus}</button>
        </>
    );
  }
  
  export default FocusButton;
