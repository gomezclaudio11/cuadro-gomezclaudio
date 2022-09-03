import React, {useContext} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { CartContext } from "../Context/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import { BsShop, BsTrash, BsTruck } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from 'react-icons/lib';
import Form from 'react-bootstrap/Form';
const Cart = () => {
  const { cart, removeItem, clear, totalPrice } = useContext (CartContext)
  const navegar = useNavigate()

  return (
    <>
    <h3><strong>CARRITO DE COMPRAS</strong></h3>
    <Container>
    <Row className="justify-content-md-center">
    <Table striped bordered hover size="sm" >
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
      {cart.map((item)=>
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
          <td>{item.price * item.quantity}</td>
          <td>
          <Button variant="light" onClick={()=>removeItem(item.id)}><BsTrash/></Button>
          </td>
        </tr>
         )}
       
        <h5 className="m-4"><strong>Total a pagar : $ {totalPrice()}</strong></h5>
        
        <Button variant="primary">
            <Link to={'/'} style={{ color:"white", textDecoration: "none"}}>  Seguir comprando </Link> 
        </Button>{' '}
        <Button variant="success" onClick={()=>navegar("/checkout")}>Comprar</Button>{' '}
        <Button variant="danger" onClick={clear}>Vaciar carrito</Button>{' '}
       
      </tbody>
    </Table>
    </Row>

    <Row >
      <Col clasName= "m-3">
        <IconContext.Provider value={{ size:"1em"}}>
        <h4><BsTruck/> Medios de envio</h4>
        </IconContext.Provider>
       </Col>
     </Row>

     <Row clasName= "m-3">
     <h6><BsShop/> Nuestro local</h6>
     </Row>
     <Row md={4}>
      <Col><Form.Check type={"checkbox"}/> <p>enMarcados Showroom / taller: Felix Frias 464 B° General Paz / Coordinar día y hora antes de retirar por mail a enMarcados@gmail.com</p></Col>
      <Col><p><strong>Gratis</strong></p></Col>
      </Row>
    </Container>
    </>
  )
}


export default Cart