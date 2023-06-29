import React from 'react'
import { ProductsContainer } from './ProductCardStyle'
import ProductCard from './ProductCard'
import { productsData } from '../../Data/DataProducts'
import { useSelector } from 'react-redux';
import { Products } from '../../Data/DataProducts';


const ProductsCards = () => {

  

  let productos = useSelector((state) => state.products.products)
  
  const selectedCategory = useSelector((state) =>state.categories.selectedCategory);
  
  if (selectedCategory) {
    productos = {

       [selectedCategory] : productos[selectedCategory]

    }
  };

  

  return (
    
    

    <>
    
    
    <ProductsContainer>

        {

          Object.entries(productos).map(([, prods]) =>{
            return prods.map((prod) =>{
              return <ProductCard {...prod} key={ prod.id } />
            })
          })

        }


    </ProductsContainer>
    
    </>


  );
};

export default ProductsCards