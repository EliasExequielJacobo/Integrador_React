import React from 'react'
import { ProductsCategoriesCont,  } from './CategoriesStyle'
import { categoryData } from '../../Data/DataCategories'
import CategoryBtn from './CategoryBtn'



const Categories = () => {
  return (
    
    <>
    
    <ProductsCategoriesCont>

    {

      categoryData.map((category) => {

          return <CategoryBtn {...category} key={ category.id } />


      })



    }
    

    </ProductsCategoriesCont>
    
    </>


  )
}

export default Categories