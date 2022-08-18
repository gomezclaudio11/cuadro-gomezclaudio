import { useContext } from 'react';
import { BsCart } from "react-icons/bs";
import styled from 'styled-components';
import { CartContext} from '../Context/CartContext';


const StyledCount = styled.h5`
  color: white;
  padding-top: 4px;
  margin-left: 4px;
`

const CartWidget = () => {
   
  const  { cartSize }= useContext(CartContext)
  return ( 
      <>
       < BsCart />
       <StyledCount>{ cartSize () }</StyledCount>
      </>
     );
}
 
export default CartWidget;