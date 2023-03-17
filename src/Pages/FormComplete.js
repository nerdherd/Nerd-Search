import { useNavigate } from "react-router-dom"
import './styles/formComplete.css'

function FormComplete({matchNumber, teamNumber, resetStates}) {
    const navigate = useNavigate()

    function handleGoBack() {
        navigate('/scouterInfo')
        resetStates()
    }

    return(
        <div id='mainDiv'>
            <p>Your scouting form for Match {matchNumber}, scouting team {teamNumber} is complete.</p>
            <button onClick={handleGoBack}>I have another rotation</button>
        </div>
    )
}

export default FormComplete;