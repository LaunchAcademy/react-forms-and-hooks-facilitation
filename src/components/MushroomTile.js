import React from 'react';

const MushroomTile = ({name, taste}) => {
  return(
    <li>
      <span>This {name} tastes: {taste}</span>
    </li>
  )
}

export default MushroomTile
