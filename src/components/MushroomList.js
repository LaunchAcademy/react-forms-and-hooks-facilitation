import React, {useState} from 'react';

import MushroomTile from "./MushroomTile"

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

const MushroomList = (props) => {
  const [mushrooms, setMushrooms] = useState(defaultMushrooms)

  const mushroomComponents = mushrooms.map((mushroom) => {
    return(
      <MushroomTile
        key={mushroom.id}
        name={mushroom.name}
        taste={mushroom.taste}
      />
    )
  })

  return(
    <div className="callout">
      <h4>List of Glorious Mushrooms</h4>
      {mushroomComponents}
    </div>
  )
}

export default MushroomList
