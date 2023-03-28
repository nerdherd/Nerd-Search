import "./styles/CoopertitionButton.css"

function CoopertitionButton({scoreType, getScore, incrementScore}) {
    let increment = (getScore(scoreType) == 2) ? -2 : 1
    let buttonColor; 
    let coopertitionStatus;

    // TODO: switch case for better code 

    if (getScore(scoreType) == 0) {
        buttonColor = "no"
        coopertitionStatus = "No"
    } else if (getScore(scoreType) == 1) {
        buttonColor = "default"
        coopertitionStatus = "Default"
    } else if (getScore(scoreType) == 2) {
        buttonColor = "yes"
        coopertitionStatus = "Yes"
    }

    return (     
        <>
            <button onClick={() => incrementScore(scoreType, increment)} id={buttonColor}>{coopertitionStatus}</button>
        </>
    );
  }
  
  export default CoopertitionButton;
  