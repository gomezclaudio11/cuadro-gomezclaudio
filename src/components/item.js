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
    <Card.Img variant="top" src={item.Img} />
    <Card.Body>
      <Card.Title>{item.Name}</Card.Title>
      <Card.Text>{item.Subtitle}</Card.Text>
      <Card.Text>{item.Size}</Card.Text>
      <Card.Text>{item.Price}</Card.Text>
      
      <Button variant="primary" onClick={handleClick} >Ver mas</Button>
      
          </Card.Body>
  </Card>
  )
}

export default Item