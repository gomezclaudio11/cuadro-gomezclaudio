import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { CartContext } from "../Context/CartContext";
import { Link } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';

const Cart = () => {
    const { cart, removeItem, clear } = useContext (CartContext)


  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
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

       

        <Button variant="light">
            <Link to={'/'}>  Volver a los productos </Link> 
        </Button>{' '}
        <Button variant="success" onClick={clear}>Comprar</Button>{' '}
        <Button variant="danger" onClick={clear}>Eliminar Producto</Button>{' '}
      </tbody>
    </Table>
  )
}


export default Cart