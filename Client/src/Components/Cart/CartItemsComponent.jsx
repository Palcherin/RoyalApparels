import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Cart-context';
import { Delete } from '@mui/icons-material';

export const CartItemsComponent = (props) => {
  const { id, title, price, about, Image } = props.data;
  const {cartItems,addToCart,removeFromCart, updateCartItemCount, clearCart}=useContext(ShopContext)
  return (
    <div className='pl-40 ' key={id}>
      <div className="flex g-[5rem]  rounded border shadow-md p-5 mb-10 h-fit w-[40%]">
        <img className='w-[9rem] h-[8rem] object-contain ' src={Image}/>
    
        <div className="align-center mt-[2%] ml-[2rem]"  key={id}>
        <h4 className='text-[1rem] font-bold w-[70%]'>{title}</h4>
        <p className='font-0.5'  key={id}>{about}</p>
        
        <div className="flex g-[2rem] w-[2rem] flex-start mt-[2%]">
          <button className='font-bold w-[1.9rem] border text-black px-2 py-2  h-[1.9rem]  ' onClick={()=>removeFromCart(id )} >-</button>
          <input className='w-[2rem] border-black border  ml-[1rem] text-center font-bold' value={cartItems[id]}  onChange={(e)=>updateCartItemCount(Number(e.target.value),id )}/>
          <button className='font-bold w-[1.9rem] border text-white pb-[0.9rem] px-2 py-2 h-[1.9rem] text-center  ml-[1rem]' onClick={()=>addToCart(id)}>+</button>
        </div>
      

        </div>
        <div className=" block   ml-[1.5rem]" >
        <p className=' ml-[2rem] text-green-600'>Ksh{price}</p>
          <h1 className='font-bold mt-[75%] ml-[5rem] text-red-600' onClick={()=>clearCart(id)}><Delete/></h1>
          
        </div>
      </div>
    </div>
  )
}
