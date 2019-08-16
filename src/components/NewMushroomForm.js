import React, { useState} from "react"

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


  const [name, setName] = useState("")
  const handleNameChange = (event) => {
    setName(event.currentTarget.value)
  }

  const [taste, setTaste] = useState("")
  const handleTasteChange = (event) => {
    setTaste(event.currentTarget.value)
  }

  const clearForm = () => {
    setName("")
    setTaste("")
  }

  const handleMushroomFormSubmit = (event) => {
    event.preventDefault()

    const mushroomPayload = {
      name: name,
      taste: taste
    }

    props.addNewMushroom(mushroomPayload)
    clearForm()
  }

  return (
    <>
    <form onSubmit={handleMushroomFormSubmit} className="callout" id="new-mushroom-form">
      <h3>New Mushroom</h3>
      <div>
        <label htmlFor="name">Mushroom Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div>
        <label htmlFor="taste">Taste:</label>
        <input
          type="text"
          id="taste"
          name="taste"
          value={taste}
          onChange={handleTasteChange}
        />
      </div>

      <input type="submit" className="button" value="ADD FUNGI"/>
    </form>
    <button onClick={clearForm}> Clear Form </button>
    </>
  )
}

export default NewMushroomForm
