import React from 'react'

//Components
import CategoryCards from '../components/CategoryCards'

const CategoriesList = () => {
  return (
    <div className='flex place-content-around'>
        <CategoryCards/>
        <CategoryCards/>
        <CategoryCards/>
        <CategoryCards/>
        <CategoryCards/>
    </div>
  )
}

export default CategoriesList