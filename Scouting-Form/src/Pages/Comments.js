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
    }
    
    return (
        <div id='scouterComments'>
            <h1 id='title'>Comments and Criticism:</h1>
            <p id='driverCommentsheader'><b>How good is their driver?</b></p>
            <input
                name = "driverComments"
                placeholder="How good is their driver?"
                onChange={handleChange}
                type='text'
                value={scouterComments.driverComments}
                className='inputField'
            ></input>

            <p id='intakeCommentsheader'><b>How consistent/efficient is their intake?</b></p>
            <input
                name = "intakeComments"
                placeholder="How consistent/efficient is their intake?"
                type='text'
                onChange={handleChange}
                className='inputField'
                value={scouterComments.intakeComments}
            ></input>

            <p id='autonomousCommentsheader'><b>Additional Autonomous Comments</b></p>
            <input
                name = "autonomousComments"
                placeholder="Additional Autonomous Comments:"
                type='text'
                onChange={handleChange}
                className='inputField'
                value={scouterComments.autonomousComments}
            ></input>

            <p id='teleopCommentsheader'><b>Additional Teleop Comments</b></p>
            <input
                name = "teleopComments"
                placeholder="Additional Teleop Comments:"
                onChange={handleChange}
                type='text'
                value={scouterComments.teleopComments}
                className='inputField'
            ></input>

            <p id='uniqueCommentsheader'><b>Anything unique/strong about this robot?</b></p>
             <input
                name = "uniqueComments"
                placeholder="Anything unique/strong about this robot?"
                type='text'
                onChange={handleChange}
                className='inputField'
                value={scouterComments.uniqueComments}
            ></input>

            <p id='redFlagsheader'><b>Are there any red flags about this robot?</b></p>
            <input
                name = "redFlags"
                placeholder="Are there any red flags about this robot?"
                type='text'
                className='inputField'
                onChange={handleChange}
                value={scouterComments.redFlags}
            ></input>

            <p id='additionalCommentsheader'><b>Additional Comments</b></p>
            <input
                name = "additionalComments"
                placeholder="Additional Comments:"
                type='text'
                className='inputField'
                onChange={handleChange}
                value={scouterComments.additionalComments}
            ></input>

            <button type='submit' onClick={handleSubmit} id='submitButton'>Submit Form</button>
            <button type='back' onClick={handleBack}>Back To Match Info</button>
            {error !== '' ? <p className='error'>{error}</p> : null}
        </div>
    )
}

export default Comments;