import React from 'react'
import { CardQuantityContainerSty, CartCardBtn, CartCardCountSty, CartCardPriceStyled, CartCardTextContainerStyled, CartCardTitleStyled, ProductCardCartContainerSty } from './ModalCartStyle'
import { useDispatch } from 'react-redux'
import { addToCart, removeItem } from '../../../Redux/cart/cartSlice';

const ModalCartCard = ({name,img,id,bid,quantity}) => {
  const dispatch = useDispatch();


  return (
    <>
    
    <ProductCardCartContainerSty>
        <img src={img} alt={name}/>

        <CartCardTextContainerStyled>

            
         <CartCardTitleStyled> {name} </CartCardTitleStyled>
         <CartCardPriceStyled> $ {bid} </CartCardPriceStyled>
        
         <CardQuantityContainerSty>

            <CartCardBtn onClick={() => dispatch(removeItem(id))}> - </CartCardBtn>

            <CartCardCountSty> {quantity} </CartCardCountSty>

            
            <CartCardBtn onClick={() => dispatch(addToCart({name,img,id,bid,quantity}))}> + </CartCardBtn>

         </CardQuantityContainerSty>

        </CartCardTextContainerStyled>


    </ProductCardCartContainerSty>
    
    
    </>
  )
}

export default ModalCartCard