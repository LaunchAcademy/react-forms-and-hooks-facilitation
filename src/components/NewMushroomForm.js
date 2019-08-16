import React from "react"

const NewMushroomForm = props => {
  return (
    <form className="callout" id="new-mushroom-form">
      <h3>New Mushroom</h3>
      <div>
        <label htmlFor="name">Mushroom Name:</label>
        <input type="text" id="name" name="name" />
      </div>

      <div>
        <label htmlFor="taste">Taste:</label>
        <input type="text" id="taste" name="taste" />
      </div>

      <input type="submit" className="button" value="ADD FUNGI"/>
    </form>
  )
}

export default NewMushroomForm
