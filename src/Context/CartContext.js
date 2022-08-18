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
    // 2 CARRITO CON ITEM DUPLICADO
    // logica de duplicados y consistente
    // obtenemos el indice del elemento si estuviese duplicado
    const itemDuplicateIndex = cart.findIndex((itemInTheCart) => itemInTheCart.id === item.id)
    // si es mayor o igual 0, el item esta duplicado en el carrito
    if (itemDuplicateIndex >= 0) {
      // creamos un objeto con la cantidad actualizada
      const itemToUpdate = {
        ...item,
        quantity: cart[itemDuplicateIndex].quantity + quantity
      }

      // creamos un borrador del carrito para poder actualizar sin dañar el estado de react
      const cartDraft = [...cart]

      // actualizamo el borrado con el item con cantidad actualizada
      cartDraft[itemDuplicateIndex] = itemToUpdate

      // actualizamos el carrito con el carrito borrador actualizado
      setCart(cartDraft)

    } else {
      // 3 CARRITO SIN ITEM DUPLICADO
      // el item no esta duplicado
      // creamos el item con la cantidad que user ingreso
      const itemToAdd = {
        ...item,
        quantity: quantity
      }

      // creamos un carrito borrador para agregar el item nuevo 
      const cartDraft = [...cart, itemToAdd]
      
      // actualizamo el carrito con el carrito borrador
      setCart(cartDraft)
      console.log('no esta duplicado');
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