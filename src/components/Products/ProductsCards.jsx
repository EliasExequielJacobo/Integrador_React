import React from 'react'
import { ProductsContainer } from './ProductCardStyle'
import ProductCard from './ProductCard'
import { productsData } from '../../Data/DataProducts'


const ProductsCards = () => {
  return (
    
    <>
    
    <ProductsContainer>

        {

          productsData.map((product) =>{

            return <ProductCard { ...product } key={ product.id } />

          })

        }


    </ProductsContainer>
    
    </>


  );
};

export default ProductsCards