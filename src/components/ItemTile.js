import React from 'react';

const ItemTile = ({name, description}) => {
  return(
    <li>
      <span>{name}: {description}</span>
    </li>
  )
}

export default ItemTile
