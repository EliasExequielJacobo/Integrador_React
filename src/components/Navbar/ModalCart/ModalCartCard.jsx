import React from 'react'
import { CardQuantityContainerSty, CartCardBtn, CartCardCountSty, CartCardPriceStyled, CartCardTextContainerStyled, CartCardTitleStyled, ProductCardCartContainerSty } from './ModalCartStyle'

const ModalCartCard = () => {
  return (
    <>
    
    <ProductCardCartContainerSty>
        <img src='https://s.pacn.ws/1/p/yq/final-fantasy-vii-remake-statuette-sephiroth-625009.1.jpg?v=qm63zt&quality=72&width=1024&crop=998,998' />

        <CartCardTextContainerStyled>

            
         <CartCardTitleStyled> Sephiroth figura  </CartCardTitleStyled>
         <CartCardPriceStyled> $ 250 </CartCardPriceStyled>
        
         <CardQuantityContainerSty>

            <CartCardBtn> - </CartCardBtn>

            <CartCardCountSty> 1 </CartCardCountSty>

            
            <CartCardBtn> + </CartCardBtn>

         </CardQuantityContainerSty>

        </CartCardTextContainerStyled>


    </ProductCardCartContainerSty>
    
    
    </>
  )
}

export default ModalCartCard