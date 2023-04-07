import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './styles/comments.css'
function Comments({scouterComments, setScouterComments, completedForms, setCompletedForms, postData}) {
    
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

        if (scouterComments.driverComments == '' || scouterComments.intakeComments=='' || scouterComments.redFlags == '' || scouterComments.teleopComments == '' || scouterComments.uniqueComments == '' || scouterComments.autonomousComments == '' || scouterComments.additionalComments == '') {
            setError('Enter valid fields')
        } else {
            setError('')
            navigate('/formComplete')       
            setCompletedForms({
                ...completedForms,
                scouterComments: true
            })
        }

        postData()
    }
    
    return (
        <div id='scouterComments'>
            <h1 id='title'>Comments and Criticism</h1>
            <p id="driverCommentsHeader"><b>How good is their driver?</b></p>
            <textarea
                name = "driverComments"
                placeholder="Type here"
                onChange={handleChange}
                type='textarea'
                value={scouterComments.driverComments}
                className='inputField'
            ></textarea>

            <p id="intakeCommentsHeader"><b>How consistent/efficient is their intake?</b></p>
            <textarea
                name = "intakeComments"
                placeholder="Type here"
                type='text'
                onChange={handleChange}
                className='inputField'
                value={scouterComments.intakeComments}
            ></textarea>

            <p id="autoCommentsHeader"><b>Additional Autonomous Comments</b></p>
            <textarea
                name = "autonomousComments"
                placeholder="Type here"
                type='text'
                onChange={handleChange}
                className='inputField'
                value={scouterComments.autonomousComments}
            ></textarea>

            <p id="teleopCommentsHeader"><b>Additional Teleop Comments</b></p>
            <textarea
                name = "teleopComments"
                placeholder="Type here"
                onChange={handleChange}
                type='text'
                value={scouterComments.teleopComments}
                className='inputField'
            ></textarea>

            <p id="uniqueCommentsHeader"><b>Anything unique/strong about this robot?</b></p>
             <textarea
                name = "uniqueComments"
                placeholder="Type here"
                type='text'
                onChange={handleChange}
                className='inputField'
                value={scouterComments.uniqueComments}
            ></textarea>

            <p id="redFlagsHeader"><b>Are there any red flags about this robot?</b></p>
            <textarea
                name = "redFlags"
                placeholder="Type here"
                type='text'
                className='inputField'
                onChange={handleChange}
                value={scouterComments.redFlags}
            ></textarea>

            <p id="additionalCommentsHeader"><b>Additional Comments</b></p>
            <textarea
                name = "additionalComments"
                placeholder="Type here"
                type='text'
                className='inputField'
                onChange={handleChange}
                value={scouterComments.additionalComments}
            ></textarea>

             <p id="additionalCommentsHeader"><b> </b></p>

            <button type='submit' onClick={handleSubmit} id='submitButtonText'>Submit Form</button>
            <button type='back' onClick={handleBack} id='backButtonText'>Back To Match Info</button>
            {error !== '' ? <p className='error'>{error}</p> : null}
        </div>
    )
}

export default Comments;