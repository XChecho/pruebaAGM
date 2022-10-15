import React from 'react'

//Components
import ItemCardsList from '../components/ItemCardsList'

const CardList = ({pagdata,resdata,searcher,avPage,rePage,count}) => {

    return (
    <div className='w-9/12 text-left'>
        <div className='pl-14'>
            <h1 className='mt-0 font-bold text-2xl text-primary '>Results</h1>
            <p className='mt-1 text-fourth text-sm font-normal '>Your search results... {resdata.length} products</p>
        </div>
        <div className='flex px-7 ml-10 mt-5 items-center'>
            <button className='font-semibold text-second bg-primary py-3 px-5 rounded-[30px] text-sm' onClick={rePage}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            </button>
            <p className='font-semibold text-primary px-10'>{count+1} to {count+9}</p>
            <button className='font-semibold text-second mx-0 bg-primary py-3 px-5 rounded-[30px] text-sm' onClick={avPage}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            </button>
            <button onClick={searcher} value={""} className='px-3 py-2 bg-primary border-2 border-second rounded-[30px] w-[140px] text-second text-center text-semibold text-sm ml-10'>Clear Filters</button>
        </div>
        <div className='grid grid-cols-3 items-center mt-10'>
                {pagdata.map(product => {
                    return <ItemCardsList product = {product} key={product.id}/>
                })}
            </div>
    </div>
    )
}

export default CardList