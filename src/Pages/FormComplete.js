import { useNavigate } from "react-router-dom"

function FormComplete({matchNumber, teamNumber, resetStates}) {
    const navigate = useNavigate()

    function handleGoBack() {
        navigate('/scouterInfo')
        resetStates()
    }

    return(
        <>
            <p>Your scouting form for Match {matchNumber}, scouting team {teamNumber} is complete.</p>
            <button onClick={handleGoBack}>I have another rotation</button>
        </>
    )
}

export default FormComplete;