import { createContext, useState } from 'react';

export const CartContext = createContext({}); // 1 crear context

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    

  const addToCart = (item, quantity) => {
    console.log({item, quantity});
    // 1 CARRITO VACIO
    // verifico si el carrito esta vacio asi evitamos logica de duplicados
    if (cart.length === 0) {
      const itemToAdd = {
        ...item,
        quantity: quantity
      }
      setCart([itemToAdd])
      return
    }
}

  const clear = () => {
    setCart([])
  }

  const removeItem = (id) => {
    const smallerCartDraft = cart.filter(data => data.id !== id)
    setCart (smallerCartDraft)
  }

  const cartSize = () =>{
    return cart.reduce((acc, item) => acc += item.quantity, 0)
}

const totalPrice = () =>{
    return cart.reduce((acc, item) => acc += item.price * item.quantity, 0)
}




  return (
    // 2 provedar valores que quiero compartir
    <CartContext.Provider value={{ cart, addToCart, clear, removeItem, cartSize, totalPrice}}> 
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider