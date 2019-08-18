import React, {useState} from 'react';

import MushroomList from "./MushroomList"
import NewMushroomForm from "./NewMushroomForm"

const defaultMushrooms = [
  {
    id: 1,
    name: "Portabella",
    taste: "yummy"
  },
  {
    id: 2,
    name: "Lion's Mane",
    taste: "umami"
  },
  {
    id: 3,
    name: "Reishi",
    taste: "chalky"
  }
]

const App = (props) => {
  const [mushrooms, setMushrooms] = useState(defaultMushrooms)

  const addNewMushroom = (newMushroomObject) => {
    setMushrooms([...mushrooms, newMushroomObject])
  }

  return(
    <div>
      <h1>MUSHROOMS</h1>

      <NewMushroomForm
        addNewMushroom={addNewMushroom}
      />

      <MushroomList
        mushrooms={mushrooms}
      />
    </div>
  )
}

export default App
