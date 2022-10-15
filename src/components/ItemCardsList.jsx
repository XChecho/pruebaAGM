import React from 'react'
import swal from 'sweetalert'

const ItemCardsList = ({product}) => {

  const alertClick = (value) => {
    swal  ({
			title: 'Boton presionado.',
			text: `Alerta de boton ${value}`,
			icon: 'success',
			button: 'Aceptar',
			timer: "2500"
		});
  }
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
            $ {!product.productPrice?"0":parseFloat(product.productPrice).toFixed(2)} USD
            <span className='text-black'> x Mt </span>
            <span className='text-xs text-black'>(EXW)</span>
          </p>
        </div>
      </button>
      <div className='flex items-center mt-1 ml-7'>
        <button onClick={()=>alertClick('addCart')} className='w-28 py-2 pl-4 flex items-center bg-second text-[10px] rounded-[30px] text-white font-semibold disabled:bg-second hover:bg-fourthLight'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          add Cart
        </button>
        <div className='w3/12 ml-3'>
          <button onClick={()=>alertClick('Compare')} className='px-1 py-1 rounded-[30px] border-2 border-solid border-second disabled:bg-second hover:bg-fourth'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-second">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemCardsList