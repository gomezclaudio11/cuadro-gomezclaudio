import { useContext } from 'react';
import { BsCart } from "react-icons/bs";
import styled from 'styled-components';
import { CartContext } from '../Context/CartContext';


const StyledCount = styled.h5`
  color: white;
  padding-top: 4px;
  margin-left: 4px;
`

const CartWidget = () => {
  const valueToShare = useContext(CartContext)
  console.log (valueToShare)  
  return ( 
      <>
       < BsCart />
       <StyledCount>{valueToShare.cantInCart}</StyledCount>
       </>
     );
}
 
export default CartWidget;