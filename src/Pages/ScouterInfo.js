import { useNavigate } from "react-router-dom";

function ScouterInfo({scouterInfo, setScouterInfo}) {
    
    const navigate = useNavigate();
    
    function handleChange(event) {
        setScouterInfo({
            ...scouterInfo,
            [event.target.name]: event.target.value 
        });
    };
    
    function handleSubmit(event) {
        event.preventDefault()
        navigate('/autonomous')
    }
    
    return (
        <>
            <input
                name = "username"
                placeholder="Username"
                id='username'
                onChange={handleChange}
                type='text'
                value={scouterInfo.username}
            ></input>
            <input
                name = "matchNumber"
                placeholder="Match Number"
                id='matchnumber'
                type='number'
                onChange={handleChange}
                value={scouterInfo.matchNumber}
            ></input>
            <input
                name = "teamNumber"
                placeholder="Team Number"
                id='matchnumber'
                type='number'
                onChange={handleChange}
                value={scouterInfo.teamNumber}
            ></input>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default ScouterInfo;