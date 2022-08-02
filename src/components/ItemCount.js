
import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
    <ButtonGroup aria-label="Basic example">
      <Button variant="outline-success" onClick={restar}>-</Button>
      <Button variant="outline-success">{contador}</Button>
      <Button variant="outline-success" onClick={sumar}>+</Button>
    </ButtonGroup>
    </div>
    <br/>
    <div>
    <Button variant="success" onClick={()=>onAdd(contador)}>Agregar al carrito</Button>
    </div>
    </>
  )
}

export default ItemCount