
import React from 'react'
import { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [contador, setContador] = useState(initial)
    const sumar = () => {
      if(contador < stock){
        setContador(contador + 1)
      }
    }
    const restar = () =>{
      if(contador >0){
        setContador(contador - 1)
      }
    }
    return (
      <>
    <div>
        <button onClick={restar}>-</button>
        <span>{contador}</span>
        <button onClick={sumar}>+</button>
    </div>
    <button onClick={()=>onAdd(contador)}>Comprar</button>

    </>
  )
}

export default ItemCount