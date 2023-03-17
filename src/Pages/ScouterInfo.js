import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './styles/scouterInfo.css'
function ScouterInfo({scouterInfo, setScouterInfo, completedForms, setCompletedForms}) {
    
    const [error, setError] = useState(null)

    const navigate = useNavigate();
    
    function handleChange(event) {
        setScouterInfo({
            ...scouterInfo,
            [event.target.name]: event.target.value 
        });
    };
    
    function handleSubmit(event) {
        event.preventDefault()

        // check if fields are empty/are numbers first

        if (scouterInfo.username == '' || scouterInfo.matchNumber == '' || scouterInfo.teamNumber == '') {
            setError('Enter valid fields')
        } else {
            setError('')
            navigate('/autonomous')       
            setCompletedForms({
                ...completedForms,
                scouterInfo: true
            })
        }


    }
    
    return (
        <div id='scouterInfo'>
            <h1 id='title'>BETA: 687 Scouting App 2023</h1>
            <input
                name = "username"
                placeholder="Username"
                onChange={handleChange}
                type='text'
                value={scouterInfo.username}
                className='inputField'
            ></input>
            <input
                name = "matchNumber"
                placeholder="Match Number"
                type='number'
                onChange={handleChange}
                className='inputField'
                value={scouterInfo.matchNumber}
            ></input>
            <input
                name = "teamNumber"
                placeholder="Team Number"
                type='number'
                className='inputField'
                onChange={handleChange}
                value={scouterInfo.teamNumber}
            ></input>
            <button type='submit' onClick={handleSubmit} id='submitButton'>Submit</button>
            {error !== '' ? <p className='error'>{error}</p> : null}
        </div>
    )
}

export default ScouterInfo;