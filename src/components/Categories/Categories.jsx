import React from 'react'
import { ProductsCategoriesCont,  } from './CategoriesStyle'
import { categoryData } from '../../Data/DataCategories'
import CategoryBtn from './CategoryBtn'
import { useSelector } from 'react-redux'



const Categories = () => {

  const categories = useSelector((state)=> state.categories.categories)


  return (
    
    <>
    
    <ProductsCategoriesCont>

    {

        categories.map((category) => {

          return <CategoryBtn {...category} key={ category.id } />
          

      })



    }
    

    </ProductsCategoriesCont>
    
    </>


  )
}

export default Categories