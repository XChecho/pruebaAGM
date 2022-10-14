import React, { useState } from 'react'

const FiltersList = ({searcher,search}) => {

  return (
    <div className='w-3/12'>
        <section className='pl-8'>
            <h1 className='font-bold text-primary text-2xl flex pl-2'>Filters</h1>
            <div className='flex flex-col md:mt-8'>
              <input value={search} onChange={searcher} type="text" className='w-64 rounded-[30px] focus:outline-none h-10 pl-5'placeholder='Search'/>
            </div>
        </section>
    </div>
  )
}

export default FiltersList