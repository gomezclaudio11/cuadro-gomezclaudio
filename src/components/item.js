import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'

const Item = ({ item }) => {
  const navigate = useNavigate()

  const handleClick =()=> {
    navigate (`/item/${item.id}`)
  }
  
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>{item.subtitle}</Card.Text>
      <Card.Text>{item.size}</Card.Text>
      <Card.Text>{item.price}</Card.Text>
      
      <Button variant="primary" onClick={handleClick} >Ver mas</Button>
      
          </Card.Body>
  </Card>
  )
}

export default Item