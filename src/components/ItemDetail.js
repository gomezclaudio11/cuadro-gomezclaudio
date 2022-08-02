import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {
  console.log("el item", item)
  const onAdd = (cantidad) =>{
    console.log(`agregaste ${cantidad} items al carrito`)
}

  return (

    <div >
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text> {item.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio: {item.price}</ListGroup.Item>
        <ListGroup.Item>{item.subtitle}</ListGroup.Item>
        <ListGroup.Item>Medidas: {item.size}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
      </Card.Body>
    </Card>

        </div>
    );

}

export default ItemDetail