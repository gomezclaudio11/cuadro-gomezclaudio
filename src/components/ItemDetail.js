import React from 'react'

const ItemDetail = ({item}) => {
  console.log("el item", item)
  return (

    <div >
            <h3>ItemDetail</h3>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            

        </div>
    );

}

export default ItemDetail