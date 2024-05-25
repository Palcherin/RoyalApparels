import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Cart-context';
import { Delete } from '@mui/icons-material';

export const CartItemsComponent = (props) => {
  const { id, Title, price, about, Image } = props.data;
  const {cartItems,addToCart,removeFromCart, updateCartItemCount, clearCart}=useContext(ShopContext)
  return (
    <div className='min-h-[100vh] bg-slate-50'>
      <div className='flex  shadow-2xl h-[350px] w-[60%] ml-[20%] bg-white object-top' key={id}>
        <div className='h-[100%] basis-[50%] p-[2%]'>
          <img src={Image} className='h-[100%] object-cover w-[70%]'/>
        </div>
        <div className='basis-40% pt-[2%]'>
        <h1 className='bg-black p-1 rounded-full text-white font-bold w-fit px-3 animate-bounce'>Fast shipment</h1>
          <h1 className='text-2xl font-bold font-mono'>{Title}</h1>
          <section className='w-[10 0%] flex justify-between'>
          <section>
                <h1 className='border-slate-400 p-2 w-fit font-bold mt-1'>Size Chart</h1>
                <div className='flex'>
                    <button className='bg-slate-200 py-1 px-2 m-1'>S</button>
                    <button className='bg-slate-200 py-1 px-2 m-1'>M</button>
                    <button className='bg-slate-200 py-1 px-2 m-1'>L</button>
                    <button className='bg-slate-200 py-1 px-2 m-1'>XL</button>
                    <button className='bg-slate-200 py-1 px-2 m-1'>XXL</button>
                </div>
            </section>
           <h1 className='text-green-600 text-xl font-bold font-mono ml-[10%]'>Ksh.{price}</h1>
          </section>
          <section className='mt-5'>
            
            <button className='p-2 border w-[45px] text-red-600 text-3xl bg-slate-200 m-2 rounded' onClick={()=>removeFromCart(id )}>-</button>
            <input className='p-2 border w-[50px]  text-3xl outline-none m-2' value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id )}/>
            <button className='p-2 border w-[45px] text-3xl bg-slate-200 text-green-600 m-2 rounded'  onClick={()=>addToCart(id)}>+</button>
          
          </section>
          <section className='mt-[5%]'>
            <button className='w-[40%] rounded-full p-2 border-2 m-2 bg-emerald-500'>Pay Now</button>
            <button className='w-[40%] rounded-full p-2 border-2  m-2'>Whatsapp</button>
          </section>
        </div>
      </div>
    </div>
  )
}

