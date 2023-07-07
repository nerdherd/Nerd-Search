import "./styles/chargeStation.css"

function ChargeStation({scoreType, getScore, incrementScore}) {
    let increment = (getScore(scoreType) == 2) ? -2 : 1
    let buttonColor; 
    let stationStatus;

    // TODO: switch case for better code 

    if (getScore(scoreType) == 0) {
        buttonColor = "notDocked"
        stationStatus = "Not Docked"
    } else if (getScore(scoreType) == 1) {
        buttonColor = "docked"
        stationStatus = "Docked"
    } else if (getScore(scoreType) == 2) {
        buttonColor = "engaged"
        stationStatus = "Balanced"
    }

    return (     
        <>
            <button onClick={() => incrementScore(scoreType, increment)} 
            id={buttonColor}
            className="charge-button" // Add the CSS class here
            >
              {stationStatus}
            </button>
          </>
        );
      }

  
  export default ChargeStation;
  