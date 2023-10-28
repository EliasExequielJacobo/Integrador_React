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


const ProductCard = ({name, img, id,title, price}) => {

  const dispatch = useDispatch();

  return (

    <>
    
    <ProductsCard>
        <ProductsImage src={ img } />

        <ProductsInfoCont>

        <ProductsName> { name } </ProductsName>
        <p> { title } </p>

        </ProductsInfoCont>
        
    
        <ProductsPriceCont>

        <ProductsPrice> $ { price } </ProductsPrice>
        <ProductsCardButton onClick={() => dispatch(addToCart({name, img, price, title, id}))} > Add </ProductsCardButton>

        </ProductsPriceCont>

    </ProductsCard>

    
    </>
    
  )
}

export default ProductCard