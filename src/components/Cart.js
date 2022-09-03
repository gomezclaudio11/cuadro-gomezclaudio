import React, {useContext} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { CartContext } from "../Context/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import { BsTrash } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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

       
        <h5><strong>Total a pagar : $ {totalPrice()}</strong></h5>

        <Button variant="light">
            <Link to={'/'}>  Volver a los productos </Link> 
        </Button>{' '}
        <Button variant="success" onClick={()=>navegar("/checkout")}>Comprar</Button>{' '}
        <Button variant="danger" onClick={clear}>Eliminar Producto</Button>{' '}
      </tbody>
    </Table>
    </Row>
    </Container>
    </>
  )
}


export default Cart