function GenericTextInput({state, textState, setTextState, name, placeholder}) {

    function handleChange(event) {
        setTextState({
            ...state,
            [event.target.name]: event.target.value 
        });
     };
    
    return (
        <>
            <input
                name = {name}
                placeholder={placeholder}
                id='username'
                onChange={handleChange}
                type='text'
                value={textState}
            ></input>
        </>
    )
}

export default GenericTextInput;