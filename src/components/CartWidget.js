import { useContext } from 'react';
import { BsCart } from "react-icons/bs";
import styled from 'styled-components';
import { CartContext} from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';


const StyledCount = styled.h6`
  color: white;
  padding-top: 4px;
  margin-left: 4px;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
cursor: pointer;

`

const CartWidget = () => {
   
  const  { cartSize }= useContext(CartContext)
  const navigate = useNavigate()
  const handleClick = () => navigate ("/cart")
  return ( 
      <Wrapper onClick={handleClick} >
       < BsCart />
       <StyledCount>{ cartSize () }</StyledCount>
      </Wrapper>
     );
}
 
export default CartWidget;