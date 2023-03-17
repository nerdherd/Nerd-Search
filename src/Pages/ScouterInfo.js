import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

        // check if fields are empty first

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
            {error !== '' ? <p className='error'>{error}</p> : null}
        </>
    )
}

export default ScouterInfo;