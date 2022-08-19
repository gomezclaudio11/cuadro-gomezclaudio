import React from 'react'
import Item from "./Item"


const ItemList = ({items}) => {
  return (
    <div style={{display:"flex", justifyContent: "space-between", alignItems:"center", flexWrap:"wrap"}}>
        {items.map((item)=><Item key={item.id} item={item}/>)}
    </div>
  )
}

export default ItemList