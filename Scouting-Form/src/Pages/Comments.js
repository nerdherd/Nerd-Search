import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './styles/comments.css'
function Comments({scouterComments, setScouterComments, completedForms, setCompletedForms}) {
    
    const [error, setError] = useState(null)

    const navigate = useNavigate();
    
    function handleChange(event) {
        setScouterComments({
            ...scouterComments,
            [event.target.name]: event.target.value 
        });
    };

    function handleBack(e) {
        e.preventDefault()
        setCompletedForms({
            ...completedForms,
            scouterComments: false
        })
        navigate('/matchInfo')
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (scouterComments.redFlags == '' || scouterComments.teleopComments == '' || scouterComments.uniqueComments == '' || scouterComments.autonomousComments == '' || scouterComments.additionalComments == '') {
            setError('Enter valid fields')
        } else {
            setError('')
            navigate('/formComplete')       
            setCompletedForms({
                ...completedForms,
                scouterComments: true
            })
        }
    }
    
    return (
        <div id='scouterComments'>
            <h1 id='title'>Comments and Criticism:</h1>
            <input
                name = "teleopComments"
                placeholder="Additional Teleop Comments:"
                onChange={handleChange}
                type='text'
                value={scouterComments.teleopComments}
                className='inputField'
            ></input>
            
            <input
                name = "autonomousComments"
                placeholder="Additional Autonomous Comments:"
                type='text'
                onChange={handleChange}
                className='inputField'
                value={scouterComments.autonomousComments}
            ></input>

            <input
                name = "redFlags"
                placeholder="Are there any red flags with this robot?"
                type='text'
                className='inputField'
                onChange={handleChange}
                value={scouterComments.redFlags}
            ></input>

             <input
                name = "uniqueComments"
                placeholder="Anything unique/strong about this robot?"
                type='text'
                onChange={handleChange}
                className='inputField'
                value={scouterComments.uniqueComments}
            ></input>

            <input
                name = "additionalComments"
                placeholder="Additional Comments:"
                type='text'
                className='inputField'
                onChange={handleChange}
                value={scouterComments.additionalComments}
            ></input>

            <button type='back' onClick={handleBack}>Back To Match Info</button>
            <button type='submit' onClick={handleSubmit} id='submitButton'>Submit Form</button>
            {error !== '' ? <p className='error'>{error}</p> : null}
        </div>
    )
}

export default Comments;