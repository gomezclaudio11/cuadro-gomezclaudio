import React, { useContext, useEffect, useState } from 'react'
import ItemCount from './ItemCount';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext"

const ItemDetail = ({item}) => {
  const { addToCart } = useContext (CartContext)

  const navigate = useNavigate();
  const [contador, setContador] = useState(0)
  console.log({item})
  
  const onAdd = (quantityToAdd) =>{
    console.log(`agregaste items al carrito: `, quantityToAdd);
    setContador (quantityToAdd)
    addToCart (item, quantityToAdd)
    navigate ("/cart")
  }
  useEffect (() =>{
    console.log ({ contador })
  }, [contador])

  return (
    <div >
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.Img} />
      <Card.Body>
        <Card.Title>{item.Name}</Card.Title>
        <Card.Text> {item.Description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio: {item.Price}</ListGroup.Item>
        <ListGroup.Item>{item.Subtitle}</ListGroup.Item>
        <ListGroup.Item>Medidas: {item.Size}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <ItemCount initial="1" stock={item.Stock} onAdd={onAdd}/>
      </Card.Body>
    </Card>
    </div>
    );

}

export default ItemDetail