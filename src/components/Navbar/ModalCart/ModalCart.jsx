import React from 'react'
import { AnimatePresence } from 'framer-motion';
import { ButtonContainerStyled, CartBuyBtn, CartDeletBtn, CloseButtonContainerStyled, CloseButtonStyled, ContainerStyled, MainContainerStyled, PriceContainerStyled, ProductsWrapperStyled, TitleStyled, TotalPrice } from './ModalCartStyle';
import ModalCartCard from './ModalCartCard';

const ModalCart = ({ hiddenCart, setHiddenCart }) => {
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

            <CloseButtonContainerStyled onClick={() => setHiddenCart(!hiddenCart)}>
                <CloseButtonStyled>
                        x
                </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
                <TitleStyled>
                    <h1>Productos</h1>
                </TitleStyled>

                <ProductsWrapperStyled>

                    <ModalCartCard />

                </ProductsWrapperStyled>


            </MainContainerStyled>

            <PriceContainerStyled>
                
                <TotalPrice>
                <p>Precio Total:</p>
                <span>$ 100</span>
                </TotalPrice>
            
            
            


            </PriceContainerStyled>
            
            <ButtonContainerStyled>

                <CartBuyBtn> Comprar ahora </CartBuyBtn>
                <CartDeletBtn> Borrar carrito </CartDeletBtn>


            </ButtonContainerStyled>

            
          </ContainerStyled>
     )}


    </AnimatePresence>
    
    
    </>
  )
}

export default ModalCart