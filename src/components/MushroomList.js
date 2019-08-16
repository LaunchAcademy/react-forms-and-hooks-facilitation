import React, {useState} from 'react';

import MushroomTile from "./MushroomTile"



const MushroomList = (props) => {

  const mushroomComponents = props.mushrooms.map((mushroom) => {
    return(
      <MushroomTile
        key={mushroom.name}
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
