import "../index.css"

function ChargeStation({scoreType, getScore, incrementScore}) {
    let increment = (getScore(scoreType) == 2) ? -2 : 1
    let buttonColor; 
    let stationStatus;

    if (getScore(scoreType) == 0) {
        buttonColor = "red"
        stationStatus = "Not Docked"
    } else if (getScore(scoreType) == 1) {
        buttonColor = "grey"
        stationStatus = "Docked"
    } else if (getScore(scoreType) == 2) {
        buttonColor = "green"
        stationStatus = "Balanced"
    }

    return (     
        <>
            <button onClick={() => incrementScore(scoreType, increment)} id={buttonColor}>{stationStatus}</button>
        </>
    );
  }
  
  export default ChargeStation;
  