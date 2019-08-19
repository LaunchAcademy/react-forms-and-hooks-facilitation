import React, { useState} from "react"

import TextField from "./TextField"
import ErrorList from "./ErrorList"

const NewItemForm = props => {
  const [itemObject, setItemObject] = useState({
    name: "",
    description: ""
  })

  const handleFieldChange = (event) => {
    setItemObject({
      ...itemObject,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const [errors, setErrors] = useState({})
  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "description"]

    requiredFields.forEach(field => {
      if (itemObject[field].trim() === "") {

        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleItemFormSubmit = (event) => {
    event.preventDefault()

    if (validForSubmission()) {
      props.addNewItem(itemObject)
      clearForm()
    }
  }

  const clearForm = (event) => {
    event.preventDefault()
    setItemObject({
      name: "",
      description: ""
    })
    setErrors({})
  }

  return (
    <>
    <form onSubmit={handleItemFormSubmit} className="callout" id="new-item-form">
      <ErrorList errors={errors} />

      <h3>New Item</h3>
      <div>
        <TextField
          inputName="name"
          inputValue={itemObject.name}
          handleFieldChange={handleFieldChange}
        />
      </div>

      <div>
        <TextField
          inputName="description"
          inputValue={itemObject.description}
          handleFieldChange={handleFieldChange}
        />
      </div>

      <input type="submit" className="button" value="ADD STUFF"/>

    </form>
    <button className="button" onClick={clearForm}> Clear Form </button>
    </>
  )
}

export default NewItemForm
