import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { LinkContainerStyled } from '../NavbarStyle';
import { useDispatch, useSelector } from 'react-redux';
import { mostrarCarrito } from '../../../Redux/cart/cartSlice';





const CartIcon = () => {
  const totalCartItems = useSelector(state => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0);
  const dispatch = useDispatch();

  return (
    <>
    
      <LinkContainerStyled onClick={() => dispatch(mostrarCarrito())}>
    
        <FaShoppingCart />
        <span> {totalCartItems} </span>

      </LinkContainerStyled>
    
    
    </>
  )
}

export default CartIcon