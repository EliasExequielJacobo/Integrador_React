import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { ButtonContainerStyled, CartBuyBtn, CartDeletBtn, CloseButtonContainerStyled, CloseButtonStyled, ContainerStyled, MainContainerStyled, PriceContainerStyled, ProductsWrapperStyled, TitleStyled, TotalPrice } from './ModalCartStyle';
import ModalCartCard from './ModalCartCard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { borrarCarrito, clearCart, mostrarCarrito } from '../../../Redux/cart/cartSlice';

const ModalCart = () => {
  const hiddenCart = useSelector (state => state.cart.hidden)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector ( state => state.cart );

  const totalPrice = cartItems.reduce((acc, item) =>{
    return (acc += item.bid * item.quantity)
  }, 0)

  const confirmarVaciarCarrito = (confirmMsg, succesMsg) =>{
    if(!cartItems.length) return;
    if (window.confirm(confirmMsg)) {
      dispatch(borrarCarrito());
      alert(succesMsg);
    };
  }

  const vaciarTodo = () =>{

    confirmarVaciarCarrito("¿Desea borrar todo?", "Productos borrados");

  };

  const comprarTodo = () =>{

    confirmarVaciarCarrito("¿Desea realizar su compra?", "Compra exitosa, muchas gracias")

  }

  return (
    <>
    
    <AnimatePresence>

    {!hiddenCart && (
          <ContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ type: 'spring', damping: 27 }}
          key='cart-modal'
          >

            <CloseButtonContainerStyled onClick={() => dispatch(mostrarCarrito())}>
                <CloseButtonStyled>
                        x
                </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
                <TitleStyled>
                    <h1>Productos</h1>
                </TitleStyled>

                <ProductsWrapperStyled>
                  {

                    cartItems.length ? (
                      cartItems.map((item) => {
                        return <ModalCartCard {...item} key={item.id} />
                      })
                      ) : ( <p> Carrito Vacio </p> )

                  }
                    

                </ProductsWrapperStyled>


            </MainContainerStyled>

            <PriceContainerStyled>
                
                <TotalPrice>
                <p>Precio Total:</p>
                <span>$ { totalPrice }</span>
                </TotalPrice>
            
            
            


            </PriceContainerStyled>
            
            <ButtonContainerStyled>

                <CartBuyBtn onClick={() => { navigate('/FormularioCompra'); dispatch(mostrarCarrito()) }} disabled={ !cartItems.length } > Comprar ahora </CartBuyBtn>
                <CartDeletBtn onClick={vaciarTodo} disabled={ !cartItems.length }> Borrar carrito </CartDeletBtn>


            </ButtonContainerStyled>

            
          </ContainerStyled>
     )}


    </AnimatePresence>
    
    
    </>
  )
}

export default ModalCart