import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'
import CardGroup from 'react-bootstrap/CardGroup';

const Item = ({ item }) => {
  const navigate = useNavigate()

  const handleClick =()=> {
    navigate (`/item/${item.id}`)
  }

    
  return (    
      <CardGroup>
        <Card className="text-center p-1 m-2" style={{ width: '15rem'}}>
         <Card.Img  className="rounded mx-auto img-fluid h-auto" variant="top" src={item.img} />
         <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.subtitle}</Card.Text>
            <Card.Text>Medidas: {item.size}</Card.Text> 
            <Card.Text>Precio : $ {item.price}</Card.Text>
          </Card.Body>
          <Card.Footer className="bg-secondary">
            <Button variant="secondary" onClick={handleClick} >Ver mas</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
  );
}

export default Item