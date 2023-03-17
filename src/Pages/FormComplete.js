import { useNavigate } from "react-router-dom"

function FormComplete({matchNumber, teamNumber, resetStates}) {
    const navigate = useNavigate()

    function handleEdit(event) {
        navigate('/autonomous')
    }

    function handleFinalSubmission() {
        resetStates()
        navigate('/')
    }

    return(
        <>
            <p>Your scouting form for Match {matchNumber}, scouting team {teamNumber} is complete.</p>
            <button onClick={handleEdit}>Edit your submission</button>
            <button onClick={handleFinalSubmission}>I have another rotation</button>
        </>
    )
}

export default FormComplete;