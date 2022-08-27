import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'

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
   ?<div>
        <h2>Checkout</h2>
        <form onSubmit={finalizarCompra}>
        <input type="text" required placeholder='Nombre Completo' name='name'onChange={datosComprador} />
            <input type="number"  placeholder='Numero de telefono' name='telefone'onChange={datosComprador} />
            <input type="email"  placeholder='tumail@mail.com' name='email'onChange={datosComprador}/>
            <button type='submit'>Finalizar Compra</button>
        </form>
    </div>
    :<div>
        <h2>Muchas gracias por su compra</h2>
        <h3>Su orden es: {orderId}</h3>
        <button>Volver a la home</button>
    </div>}
    </>
  )
}

export default Checkout