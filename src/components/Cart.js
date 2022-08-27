import React, {useContext} from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { CartContext } from "../Context/CartContext";
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, clear, totalPrice } = useContext (CartContext)
  const navegar = useNavigate()

  return (
    <Table striped bordered hover size="sm">
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
          <button onClick={()=>removeItem(item.id)}>Borrar item</button>
          </td>
        </tr>
         )}

       
        <span>Total a pagar : {totalPrice()}</span>

        <Button variant="light">
            <Link to={'/'}>  Volver a los productos </Link> 
        </Button>{' '}
        <Button variant="success" onClick={()=>navegar("/checkout")}>Comprar</Button>{' '}
        <Button variant="danger" onClick={clear}>Eliminar Producto</Button>{' '}
      </tbody>
    </Table>
  )
}


export default Cart