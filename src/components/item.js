import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

function item({producto}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={producto.img} />
    <Card.Body>
      <Card.Title>{producto.name}</Card.Title>
      <Card.Text>{producto.description}</Card.Text>
      <Card.Text>{producto.price}</Card.Text>
      <Card.Text>stock del producto: {producto.stock}</Card.Text>
      <Button variant="primary">COMPRAR</Button>
    </Card.Body>
  </Card>
  )
}

export default item