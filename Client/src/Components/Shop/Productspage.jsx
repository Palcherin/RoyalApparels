import React, {useContext, useState} from 'react'
import DATA from '../Data'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Modal/modal';
import { Checkbox } from '@mui/material';
import { ShopContext } from '../../Context/Cart-context';

const Productspage = () => {
  const navigate = useNavigate();
  const [close, setClose] = useState(false);
  const [details, setDetails]=useState([]);

  const ProductsDetails=(product)=>{
    
    setDetails([{...product}])
    setClose(true)
    
  }

  return (
    <>
    {
    close?
     <div className='bg-white w-fit h-fit' >
      
      {details.map((x)=>{ 
        
        return(
      
    <div className='bg-white flex justify-start h-[105vh] w-[88vw] absolute z-1 ml-[5%] rounded mt-[10%] shadow-2xl' >
      <button className='text-xl font-bold bg-slate-100 rounded-full h-fit tet-top m-2 text-red-500' onClick={()=>setClose(false)}>X</button>
        <div className='basis-[45%] p-[2%] items-center text-center'>
            <img src={x.Image} className='h-[90%] object-cover w-[100%] mt-[2%]' />
            
        </div>
        <div className='basis-[40%] pt-[2%]'>
            <h1 className='text-3xl M-3'>{x.Title}</h1>
            <h1 className='font-bold font-mono text-xl m-3 text-emerald-500'>KSH.{x.price}</h1>
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
            <section className=''>
            <h1 className=' text-2xl'>Custom Name Printing +KES.200</h1>
            <input placeholder='John Doe' className='w-[90%] ng-slate-50 p-2 outline-none border border-solid border-neutral-200 shadow-sm'/>
            <h1 className='text-slate-800 text-sm'>max 8 letters</h1>
            </section>
            <section className=''>
            <h1 className=' text-2xl'>Custom Number Printing +KES.200</h1>
            <input placeholder='John Doe' type='numbers' className='w-[90%] ng-slate-50 p-2 outline-none border border-solid border-neutral-200 shadow-sm'/>
             <h1 className='text-slate-800 text-sm'>max 3 numbers</h1>
            </section>
            <section className='mt-3'>
            <h1><Checkbox/>Premier League badge +KES 200.00</h1>
            <h1><Checkbox/>UEFA champions League badge +KES 200.00</h1>
            </section>
            <section className=''>
                <h1 className='text-xl'>Parcel Information</h1>
                <input placeholder='Location' className='w-[90%] ng-slate-50 p-2 outline-none border border-solid border-neutral-200 shadow-sm'/>
                <p>Parcel fees is KES300.00 </p>
            </section>
            <section className='m-1'>
                <button className='bg-sky-600 hover:bg-sky-500 p-2 w-[35%] rounded m-1 font-bold'>BUY NOW</button> or
                <button className='bg-green-600 hover:bg-green-500 rounded p-2 w-[35%] m-1 font-bold' >ADD TO CART</button>
            </section>
        </div>
      
    </div>
    )})}
    </div>:null
    }
   
    <div className='grid-cols-2 sm:grid md:grid-cols-4 min-h-[100vh] pt-[6%] p-[3%]'>
        {DATA.map((values)=>{
          const { id, Title, price, about, Image } = values;
          const { addToCart, cartItems } = useContext(ShopContext);
          const cartItemsAmout = cartItems[id];
         
          return(
            <div className=' shadow-xl w-65   h-[400px] p-2 m-4 '  key={id}>
              <img src={Image} className='h-[50%] w-[80%]  object-cover'/>
              <section>
                <h1 className='font-bold text-xl m-4'>{Title} </h1>
                <h1>{about} </h1>
                <section>
                  <span className='font-bold text-green-700'>Ksh{price}</span>
                </section>
                {/* <Link to={`/product-details`} className='border text-slate-600 p-2 w-[85%]' >More Details</Link> */}
                <button className='border text-slate-600 p-2 w-[75%]'   onClick={() => ProductsDetails(values)} >Order Now</button>
                <ShoppingCartTwoToneIcon  onClick={() => addToCart(id)} className='text-white bg-emerald-500 p-1 text-4xl  '  fontSize='70px' size='30px'/>
                
                {cartItemsAmout>0 &&<>({cartItemsAmout})</>}
                <section>
                  
                  
                </section>
               
              </section>
            </div>

          
          )
        })}
      
    </div>
    
    </>
  )
}

export default Productspage
