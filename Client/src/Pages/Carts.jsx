import React, { useContext } from 'react'
import { CartItemsComponent } from '../Components/Cart/CartItemsComponent'
import DATA from '../Components/Data'
import { ShopContext } from '../Context/Cart-context'

const Carts = () => {
  const {cartItems,getTotalAmount}=useContext(ShopContext)
  const total=getTotalAmount();
  
  return(
  <div >
    
      <div className='bg-slate-50 min-h-[10vh]'>
        <h1 className='ml-40 font-bold s-20'>Cart Items</h1>
      </div>
      <div className='cartItems'>
        {DATA.map((product)=>{
          if(cartItems[product.id]!==0){
            return <CartItemsComponent data={product}/>
          }
        })};
      </div>

    </div>
  )
}

export default Carts
