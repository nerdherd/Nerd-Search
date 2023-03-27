import "./styles/mobilityButton.css"

function MobilityButton({scoreType, getScore, incrementScore, isAuto}) {
    let increment = (getScore(scoreType) == 1) ? -1 : 1
    let buttonColor;
    let buttonText;

    
    if (getScore(scoreType) == 0) {
        buttonColor = "noMobility"
        buttonText = ((isAuto)) ? "In Community" : "Outside Community"
    } else if (getScore(scoreType) == 1) {
        buttonColor = "hasMobility"
        buttonText = ((isAuto)) ? "Leaves Community" : "Parked"
    }

    return (     
        <>
            <button onClick={() => incrementScore(scoreType, increment)} id={buttonColor}>{buttonText}</button>
        </>
    );
  }
  
  export default MobilityButton;
  