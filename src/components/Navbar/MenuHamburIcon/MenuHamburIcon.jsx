import React from 'react'
import { LinkContainerStyled } from '../NavbarStyle'
import { useDispatch, useSelector } from 'react-redux';

import { FaBars } from "react-icons/fa";
import { toggleHambur } from '../../../Redux/HamburRedux/hamburSlice';
import { mostrarCarrito } from '../../../Redux/cart/cartSlice';

const MenuHamburIcon = () => {
  const hiddenCart = useSelector (state => state.cart.hidden);
  const dispatch = useDispatch();

  return (
    <>
    
    <LinkContainerStyled onClick={() =>{ 
      if (hiddenCart === false){
          dispatch(mostrarCarrito())
      }
      dispatch(toggleHambur())}}>
    
        <FaBars />
    
    </LinkContainerStyled>
    
    </>
  )
}

export default MenuHamburIcon