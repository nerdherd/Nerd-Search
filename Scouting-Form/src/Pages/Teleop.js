import ChargeStation from "../Forms/ChargeStation.js";
import MobilityButton from "../Forms/MobilityButton.js";
import ScoreButton from "../Forms/ScoreButton.js"
import CoopertitionButton from "../Forms/CoopertitionButton.js"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './styles/scoringPages.css'

function Teleop({matchInfo, setMatchInfo, getScore, incrementScore, completedForms, setCompletedForms}) {
    const navigate = useNavigate()


    useEffect(() => {
        console.log(completedForms)
        if (completedForms.scouterInfo !== true) {
            navigate('/scouterInfo')
        } else if (completedForms.autonomous !== true) {
            navigate('/autonomous')
        }
    })

    function handleChange(e) {
        setMatchInfo({
            ...matchInfo,
            [e.target.name]: e.target.value
        })
        console.log(matchInfo)
    }

    function handleBack(e) {
        e.preventDefault()
        setCompletedForms({
            ...completedForms,
            teleop: false
        })
        navigate('/autonomous')
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        setCompletedForms({
            ...completedForms,
            teleop: true
        })
        navigate('/matchinfo')
    }

    return (
        <div className="mainDiv">
            <h1 id='title'>Teleop Period</h1>

            <ScoreButton scoreType="High Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
            <ScoreButton scoreType="Mid Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
            <ScoreButton scoreType="Low Teleop" getScore={getScore} incrementScore={incrementScore}></ScoreButton>
            <ScoreButton scoreType="Missed Game Pieces" getScore={getScore} incrementScore={incrementScore}></ScoreButton>        

        
            <div className="radioInput">
                <p><b id="intakeLocationHeader">Where does the robot intake game pieces?</b></p>
                <div onChange={handleChange} >
                    <input type="checkbox" value="floor" name="intakeLocation" /> Floor
                    <input type="checkbox" value="drop" name="intakeLocation" /> Drop
                    <input type="checkbox" value="shelf" name="intakeLocation" /> Shelf
                    <input type="checkbox" value="none" name="intakeLocation" /> No Intake
                </div>
            </div>

            <div className="coopertitionGrid">
                <p id="coopertitionGridHeader"><b>Does the robot score on the coopertition grid?</b></p>
                <CoopertitionButton scoreType="Coopertition Use" getScore={getScore} incrementScore={incrementScore}></CoopertitionButton>
            </div>

            <div className="mobilityAndDock">
                <p id="teleopDockMobilityStatusHeader"><b>Docking and Mobility Status:</b></p>
                <ChargeStation scoreType="Charge Station Endgame" getScore={getScore} incrementScore={incrementScore}></ChargeStation>
                <MobilityButton scoreType="Teleop Mobility" getScore={getScore} incrementScore={incrementScore}></MobilityButton>
            </div>

            <div className="navigation">
                <p></p>
                <button type='submit' onClick={handleSubmit} id='submitButtonText'>Go To Match Info</button>
                <button type='back' onClick={handleBack} id='backButtonText'>Back To Autonomous Page</button>
            </div>
        </div>
    )    
}

export default Teleop;