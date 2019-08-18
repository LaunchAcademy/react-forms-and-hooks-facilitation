import React, { useState} from "react"

import TextField from "./TextField"

const NewMushroomForm = props => {
  const [mushroomObject, setMushroomObject] = useState({
    name: "",
    taste: ""
  })

  const handleFieldChange = (event) => {
    setMushroomObject({
      ...mushroomObject,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = () => {
    setMushroomObject({
      name: "",
      taste: ""
    })
  }

  const handleMushroomFormSubmit = (event) => {
    event.preventDefault()

    props.addNewMushroom(mushroomObject)
    clearForm()
  }

  return (
    <>
    <form onSubmit={handleMushroomFormSubmit} className="callout" id="new-mushroom-form">
      <h3>New Mushroom</h3>
      <div>
        <TextField
          inputName="name"
          inputValue={mushroomObject.name}
          handleFieldChange={handleFieldChange}
        />
      </div>

      <div>
        <TextField
          inputName="taste"
          inputValue={mushroomObject.taste}
          handleFieldChange={handleFieldChange}
        />
      </div>

      <input type="submit" className="button" value="ADD FUNGI"/>
      
    </form>
    <button onClick={clearForm}> Clear Form </button>
    </>
  )
}

export default NewMushroomForm
