import React from 'react'

import cardImage from '../assets/categoriesCardImage.webp'

const CategoryCards = () => {
  return (
    <div className='my-5 ml-3 flex flex-col items-center w-[300px] h-[300px] rounded-[30px] bg-white shadow-lg'>
        <img src={cardImage} alt="" className='w-64 h-32 mt-3 rounded-3xl false '/>
        <p className='w-64 mt-6 text-left text-second font-semibold'>Categories</p>
        <div className='flex justify-between w-64 mt-3'>
            <p className='w-48 text-2xl text-primary font-extrabold'>Suply to feed mills</p>
            <div>
                <button className='mr-1 mt-3 text-second rounded-[30px] bg-primary py-2 px-4'>{'>'}</button>
            </div>
        </div>
    </div>
  )
}

export default CategoryCards