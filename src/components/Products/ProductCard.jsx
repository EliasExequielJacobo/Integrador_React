import React from 'react';
import { ProductsCard,
         ProductsImage,
         ProductsName,
         ProductsPriceCont,
         ProductsPrice,
         ProductsCardButton,
         ProductsInfoCont,

} from './ProductCardStyle';



const ProductCard = ({name, img, bid, subTitle}) => {
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
        <ProductsCardButton> Add </ProductsCardButton>

        </ProductsPriceCont>

    </ProductsCard>

    
    </>
    
  )
}

export default ProductCard