import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function Item({producto}) {
    
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={producto.img} />
    <Card.Body>
      <Card.Title>{producto.name}</Card.Title>
      <Card.Text>{producto.subtitle}</Card.Text>
      <Card.Text>{producto.size}</Card.Text>
      <Card.Text>{producto.price}</Card.Text>
      <Link to={`/item/${producto.id}`}>
      <Button variant="primary" >Ver mas</Button>
      </Link>
    </Card.Body>
  </Card>
  )
}

export default Item