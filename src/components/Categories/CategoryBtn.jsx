import React from 'react'
import { ProductsCategory } from './CategoriesStyle'

const CategoryBtn = ({title, category}) => {

    

  return (
    <>
    
    <ProductsCategory
    //  Selected = { true }
    > 
        
        <p> { title } </p>
    
    </ProductsCategory>
    
    </>
  )
}

export default CategoryBtn