import React from 'react'
import { ProductsCategory } from './CategoriesStyle'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../Redux/categoriesSlice'

const CategoryBtn = ({title, category}) => {

    const dispatch = useDispatch();

    const selectedCategory = useSelector((state)=> state.categories.selectedCategory)

  return (
    <>
    
    <ProductsCategory
      active = { category === selectedCategory }
      onClick={() => dispatch(selectCategory(category))}
      
    > 
        
        <p> { title } </p>
    
    </ProductsCategory>
    
    </>
  )
}

export default CategoryBtn