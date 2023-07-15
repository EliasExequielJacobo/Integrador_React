import React from 'react';
import { ProductsCard,
         ProductsImage,
         ProductsName,
         ProductsPriceCont,
         ProductsPrice,
         ProductsCardButton,
         ProductsInfoCont,

} from './ProductCardStyle';
import { useDispatch } from "react-redux";
import { addToCart } from '../../Redux/cart/cartSlice';


const ProductCard = ({name, img, bid, subTitle, id}) => {

  const dispatch = useDispatch();

  return (

    <>
    
    <ProductsCard>
        <ProductsImage src={ img } />

        <ProductsInfoCont>

        <ProductsName> { name } </ProductsName>
        <p> { subTitle } </p>

        </ProductsInfoCont>
        
    
        <ProductsPriceCont>

        <ProductsPrice> $ { bid } </ProductsPrice>
        <ProductsCardButton onClick={() => dispatch(addToCart({name, img, bid, subTitle, id}))} > Add </ProductsCardButton>

        </ProductsPriceCont>

    </ProductsCard>

    
    </>
    
  )
}

export default ProductCard