import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



const Checkout = () => {
    const [comprador, setComprador]= useState({})
    const [orderId, setOrderId]= useState("")
    const { cart, totalPrice, clear } =  useContext (CartContext)
    const datosComprador = (e) =>{
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
       
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if(Object.values(comprador).length !== 3){
            alert("todos los campos son obligatorios")
        }else{
            const db = getFirestore()
            const ventasCollection = collection (db, "ventas")
        addDoc(ventasCollection,{
            comprador,
            items: cart,
            total: totalPrice (),
            date: serverTimestamp()
        })
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        }
        

    }

  return (
    <>
   {!orderId 
   ?<Row>
        <h2><strong>Ingresa tu datos</strong></h2>
            <form onSubmit={finalizarCompra}>
                <Stack gap={3}  className="col-md-5 mx-auto">
                    <Form.Control type="text" required placeholder='Nombre Completo' name='name'onChange={datosComprador} />
                    <Form.Control type="number"  placeholder='Numero de telefono' name='telefone'onChange={datosComprador} />
                    <Form.Control type="email"  placeholder='Direccion de e-mail' name='email'onChange={datosComprador}/>
                    <Button variant="outline-secondary" id="button-addon1" type='submit'>Finalizar Compra</Button>
                </Stack>
            </form>
    </Row>
    :
    <Card>
    <Card.Header as="h5">Muchas gracias por su compra</Card.Header>
    <Card.Body>
      <Card.Title>Gracias por tu apoyo</Card.Title>
      <Card.Text>
      Su número de orden es: {orderId}.
      </Card.Text>
      <Link to={`/`} style={{ textDecoration: "none"}}>
                    <Button variant="outline-secondary" id="button-addon1" type="submit"> Seguir comprando </Button>
                </Link>
            
    </Card.Body>
  </Card>
     }
    </>
  )
}

export default Checkout

