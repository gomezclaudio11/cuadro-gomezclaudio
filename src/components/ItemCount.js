
import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemCount = ({ initial, stock, onAdd }) => {
  const [contador, setContador] = useState(parseInt(initial))  
  const sumar = () => {
      if(contador < stock){
        setContador(contador + 1)
      }
    }
    const restar = () =>{
      if(contador > 0){
        setContador(contador - 1)
      }
    }
    return (
      <Container>
        <Row>
      <Col>
    <ButtonGroup aria-label="Basic example">
      <Button variant="outline-success" onClick={restar}>-</Button>
      <Button variant="outline-success">{contador}</Button>
      <Button variant="outline-success" onClick={sumar}>+</Button>
    </ButtonGroup>
    </Col>
    <br/>
    <Col>
    <Button variant="success" onClick={()=>onAdd(contador)}>Agregar al carrito</Button>
    </Col>
    </Row>
    </Container>
  )
}

export default ItemCount