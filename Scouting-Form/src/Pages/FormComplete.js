import { useNavigate } from "react-router-dom"
import './styles/formComplete.css'
import QRCode from "react-qr-code";

function FormComplete({matchInfo, scores, scouterInfo, scouterComments, resetStates}) {
    const navigate = useNavigate()

    function handleGoBack() {
        navigate('/scouterInfo')
        resetStates()
    }

    // Shorten all data for QR transmission

    const scoresData = scores.map(score => {
        return score.scoreValue;
    });
    const matchInfoData = Object.values(matchInfo);
    const scouterInfoData = Object.values(scouterInfo);
    const scouterCommentsData = Object.values(scouterComments);

    const matchData = [
        matchInfoData,
        scouterInfoData,
        scoresData,
        scouterCommentsData
    ];

    const qrText = JSON.stringify(matchData);
    console.log("QR Code Data: " + qrText);

    return(
        <div id='mainDiv'>
            <p>Your scouting form for Match {matchInfo.matchNumber}, scouting team {matchInfo.teamNumber} is complete.</p>
            <div id='qrCode'>
                <QRCode
                    size={256}
                    value={qrText}
                />
            </div>
            <button onClick={handleGoBack}>I have another rotation</button>
        </div>
    )
}

export default FormComplete;