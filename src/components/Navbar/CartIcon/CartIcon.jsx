import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { LinkContainerStyled } from '../NavbarStyle';





const CartIcon = ({ hiddenCart, setHiddenCart }) => {
  return (
    <>
    
      <LinkContainerStyled onClick={() => setHiddenCart(!hiddenCart)}>
    
        <FaShoppingCart />
        <span> 1 </span>

      </LinkContainerStyled>
    
    
    </>
  )
}

export default CartIcon