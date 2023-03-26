import "./styles/mobilityButton.css"

function MobilityButton({scoreType, getScore, incrementScore, isAuto}) {
    let increment = (getScore(scoreType) == 1) ? -1 : 1
    let buttonColor;
    let buttonText;

    
    if (getScore(scoreType) == 0) {
        buttonColor = "noMobility"
        buttonText = ((isAuto)) ? "Stays In Community" : "Outside of Community"
    } else if (getScore(scoreType) == 1) {
        buttonColor = "hasMobility"
        buttonText = ((isAuto)) ? "Leaves The Community" : "Parks In Community"
    }

    return (     
        <>
            <button onClick={() => incrementScore(scoreType, increment)} id={buttonColor}>{buttonText}</button>
        </>
    );
  }
  
  export default MobilityButton;
  