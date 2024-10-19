import { Checkbox } from '@mui/material'
import React from 'react'
import { Navigate, useParams } from 'react-router-dom'

const ProductsView = () => {
    const params=useParams();
  return (
    <div className='bg-white flex justify-start min-h-[110vh]'>
        <div className='basis-[60%] p-[2%] items-center'>
            <img src='assets/Arsenal third kit.webp' className='h-[80%] object-contain w-[80%]' />
        </div>
        <div className='basis-[40%]'>
            <h1 className='text-3xl m-3'>Arsenal Third Kit 23/24</h1>
            <h1 className='font-bold font-mono text-xl'>Ksh.1500 {JSON.stringify(params)}</h1>
            <section>
                <h1 className='border-slate-400 p-2 w-fit font-bold mt-4'>Size Chart</h1>
                <div className='flex'>
                    <button className='bg-slate-200 py-1 px-2 m-1'>S</button>
                    <button className='bg-slate-200 py-1 px-2 m-1'>M</button>
                    <button className='bg-slate-200 py-1 px-2 m-1'>L</button>
                    <button className='bg-slate-200 py-1 px-2 m-1'>XL</button>
                    <button className='bg-slate-200 py-1 px-2 m-1'>XXL</button>
                </div>
            </section>
            <section className='mt-5'>
            <h1 className='mb-4 text-2xl'>Custom Name Printing +KES.200</h1>
            <input placeholder='John Doe' className='w-[90%] ng-slate-50 p-2 outline-none border border-solid border-neutral-200 shadow-sm'/>
            <h1 className='text-slate-800 text-sm'>max 8 letters</h1>
            </section>
            <section className='mt-7'>
            <h1 className='mb-4 text-2xl'>Custom Number Printing +KES.200</h1>
            <input placeholder='John Doe' type='numbers' className='w-[90%] ng-slate-50 p-2 outline-none border border-solid border-neutral-200 shadow-sm'/>
             <h1 className='text-slate-800 text-sm'>max 3 numbers</h1>
            </section>
            <section className='mt-7'>
            <h1><Checkbox/>Premier League badge +KES 200.00</h1>
            <h1><Checkbox/>UEFA champions League badge +KES 200.00</h1>
            </section>
            <section className='mt-6'>
                <h1 className='text-xl'>Parcel Information</h1>
                <input placeholder='Location' className='w-[90%] ng-slate-50 p-2 outline-none border border-solid border-neutral-200 shadow-sm'/>
                <p>Parcel fees is KES300.00 accross the country</p>
            </section>
            <section className='m-5'>
                <button className='bg-sky-600 p-2 w-[35%] rounded m-1 font-bold'>Proceed to Pay</button> or
                <button className='bg-green-600 p-2 w-[35%] m-1 font-bold'>Order by Whatsapp</button>
                
            </section>
            <section>
                <h1>or  
                    <button onClick={Navigate('./cart')}>Go to Cart</button>
                </h1>
            </section>
        </div>
      
    </div>
  )
}

export default ProductsView
