import React, { useState } from 'react'

const FiltersList = ({searcher,search}) => {

  return (
    <div className='w-3/12'>
        <section className='pl-8'>
            <h1 className='font-bold text-primary text-2xl flex pl-2'>Filters</h1>
            <div className='flex flex-col mt-8'>
              <input value={search} onChange={searcher} type="text" className='w-64 rounded-[30px] focus:outline-none h-10 pl-5'placeholder='Search'/>
              <div className='flex flex-col text-left mt-2 md:mt-16 md:mb-24'>
                <p className='font-semibold text-sm text-primary ml-1 w-64'>Filter prices</p>
                <div className='flex flex-col'>
                  <input type="number" name="" id="" className='mt-10 w-64 h-10 rounded-[30px] pl-2 block px-3 py-2 border-input' placeholder='Price From'/>
                  <input type="number" name="" id="" className='mt-4 w-64 h-10 rounded-[30px] pl-2 block px-3 py-2 border-input' placeholder='Price To'/>
                </div>     
              </div>
              <div className='flex flex-col items-start my-0'>
                <p className='text-primary font-semibold text-sm'>Open Market</p>
                <select name="" id="" className='mt-4 w-64 h-10 rounded-[30px] text-gray-400 bg-white border-input'><option value="">Country of Origin</option></select>
                <select name="" id="" className='mt-4 w-64 h-10 rounded-[30px] text-gray-400 bg-white border-input'><option value="">Destination Country</option></select>
                <select name="" id="" className='mt-4 w-64 h-10 rounded-[30px] text-gray-400 bg-white border-input'><option value="">Dispatch Port</option></select>
              </div>
              <div className='text-left mt-12'>
                <p className='font-semibold text-sm text-primary ml-1 w-64'>Filter categories</p>

              </div>
            </div>
        </section>
    </div>
  )
}

export default FiltersList