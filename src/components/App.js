import React, {useState} from 'react';

import ItemList from "./ItemList"
import NewItemForm from "./NewItemForm"

const defaultItems = [
  {
    id: 1,
    name: "Fire Ferret",
    description: "its adorable"
  },
  {
    id: 2,
    name: "Dinglehopper",
    description: "shiny and perhaps a powerful artifact"
  },
  {
    id: 3,
    name: "Reishi",
    description: "chalky"
  }
]

const App = (props) => {
  const [items, setItems] = useState(defaultItems)

  const addNewItem = (newItemObject) => {
    setItems([...items, newItemObject])
  }

  return(
    <div>
      <h1>Items</h1>

      <NewItemForm
        addNewItem={addNewItem}
      />

      <ItemList
        items={items}
      />
    </div>
  )
}

export default App
