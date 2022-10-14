import React from 'react'
import ItemCardsList from '../components/ItemCardsList'

const CardList = ({resdata,search}) => {

    return (
    <div className='w-9/12 text-left'>
        <div className='pl-8 md:pl-14'>
            <h1 className='mt-10 md:mt-0 font-bold text-2xl text-primary '>Results</h1>
            <p className='mt-1 text-fourth text-sm font-normal '>Your search results... {resdata.length} products</p>
        </div>
        <div className='flex px-7 md:ml-10 mt-5 items-center'>
            <button className='font-semibold text-second bg-[#D6E7FF] py-3 px-2 md:px-5 rounded-[30px] text-sm'>leftArrow</button>
            <p className='font-semibold text-primary px-3 md:px-10'>1 to 9</p>
            <button className='font-semibold text-second mx-2 md:mx-0 bg-[#D6E7FF] py-3 px-2 md:px-5 rounded-[30px] text-sm'>rightArrow</button>
            <button  className='md:px-3 py-2 bg-[#D6E7FF] border-2 border-second rounded-[30px] w-28 md:w-[140px] text-second text-center text-semibold text-sm md:ml-10'>Clear Filters</button>
        </div>
        <div className='grid grid-cols-3 col-auto mt-10'>
                {resdata.map(product => {
                    return <ItemCardsList product = {product} key={product.id}/>
                })}
            </div>
    </div>
    )
}

export default CardList