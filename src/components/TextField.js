import React from 'react';

const TextField = ({ inputName, inputValue, handleFieldChange }) => {
  return(
    <label htmlFor={inputName}>
      Mushroom {inputName}:
      <input
        type="text"
        id={inputName}
        name={inputName}
        value={inputValue}
        onChange={handleFieldChange}
      />
    </label>



  )
}

export default TextField
