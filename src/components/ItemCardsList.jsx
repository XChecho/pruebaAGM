import React from 'react'

const ItemCardsList = ({product}) => {
  return (
    <div className='w-[280px] h-[400px] mx-3 mb-6 bg-white flex flex-col justify-center rounded-3xl hover:-mt-2 hover:shadow-lg hover:shadow-second '>
      <div className='mx-7 mt-2 pb-3 flex justify-end'>
        <div className='text-second text-right'>
          <img src='' alt="" />
        </div>
      </div>
      <button className='mt-2 self-center'>
        <img src={product.imgP} alt="" className='w-[140px] h-[96px] rounded-[15px]'/>
      </button>
      <button className='ml-7 mt-2 mr-5 text-left'>
        <p className='pt-2 text-second text-sm font-semibold '>{product.category}</p>
        <p className='h-10 mt-2 text-primary text-lg font-bold leading-6 uppercase'>{product.title}</p>
        <p className='h-9 text-primary text-xs capitalize leading-5 overflow-hidden '>{product.description}</p>
        <div className='my-3 flex items-center'>
          <p className='text-lg font-semibold text-green-500'>
            ${product.productPrice}.00 USD
            <span className='text-black'> x Mt</span>
            <span className='text-xs text-black'>(EXW)</span>
          </p>
        </div>
      </button>
      <div className='flex items-center -mt-1 ml-7'>
        <button className='w-28 py-2 bg-second text-[10px] rounded-[30px] text-white font-semibold disabled:bg-second hover:bg-fourthLight'>Add cart</button>
        <div className='w3/12 ml-3'>
          <button className='px-1 py-1 rounded-[30px] border-2 border-solid border-second disabled:bg-second hover:bg-fourth'>Cross</button>
        </div>
      </div>
    </div>
  )
}

export default ItemCardsList