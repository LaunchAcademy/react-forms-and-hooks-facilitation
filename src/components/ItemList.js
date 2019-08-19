import React, {useState} from 'react';

import ItemTile from "./ItemTile"

const ItemList = (props) => {
  const itemComponents = props.items.map((item) => {
    return(
      <ItemTile
        key={item.name}
        name={item.name}
        description={item.description}
      />
    )
  })

  return(
    <div className="callout">
      <h4>List of Glorious Items</h4>
      {itemComponents}
    </div>
  )
}

export default ItemList
