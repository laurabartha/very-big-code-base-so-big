import { useState } from 'react';

function useInputValue( initialValue ) {
    // create bits of state with an input param
    const [inputValue, setInputValue] = useState(initialValue);
    // create a generic event handler
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    // reset the state

    const clearInput = () => {
        setInputValue('');
    }

    const myReturnValues = [inputValue, handleChange, clearInput]
    return myReturnValues

}

export default useInputValue;