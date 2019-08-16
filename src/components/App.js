import React from 'react';

import MushroomList from "./MushroomList"
import NewMushroomForm from "./NewMushroomForm"

const App = (props) => {
  return(
    <div>
      <h1>MUSHROOMS</h1>

      <NewMushroomForm />

      <MushroomList />
    </div>
  )
}

export default App
