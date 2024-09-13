import React from 'react'
import DATA from '../Data'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Offers = () => {
  return (
    <>
    {/* <div>
      <h1>How it works</h1>
      <div className='flex justify-between w-[90%] p-[2%]'>
        <section>
          <h1 className='h-[50px] w-[50px] bg-green-500 font-bold text-white text-4xl align-middle rounded-full text-center p-2'>1</h1>
          <h1 className='text-xl font-bold'>Explore</h1>
          <h1>Take your time to explore all the available products in our store.</h1>
        </section>
        <section>
          <h1 className='h-[50px] w-[50px] bg-green-500 font-bold text-white text-4xl align-middle rounded-full text-center p-2'>2</h1>
          <h1>Make your pick! </h1>
          <h1>Choose among the variety online, and decide on which product you want.</h1>
        </section>
        <section>
          <h1 className='h-[50px] w-[50px] bg-green-500 font-bold text-white text-4xl align-middle rounded-full text-center p-2'>3</h1>
          <h1>Order</h1>
          <h1>Place your order through whichever channel you want, call, whatsapp, or online</h1>
        </section>
        <section>
          <h1 className='h-[50px] w-[50px] bg-green-500 font-bold text-white text-4xl align-middle rounded-full text-center p-2'>4</h1>
          <h1>We deliver</h1>
          <h1>After you successfully make your order, expect your product to be delivered within 3 working days</h1>
        </section>
      </div>
    </div> */}
    <div className='grid-cols-1 sm:grid md:grid-cols-4 h-[100vh] pt-[6%] p-[3%]'>
        {DATA.slice(0,4).map((values)=>{
          const { id, Title, price, about, Image } = values;
          return(
            <div className=' shadow-xl w-65   h-[410px] p-2 m-4'  key={id}>
              <img src={Image} className='h-[62%] w-[90%] object-contain'/>
              <section>
                <h1 className='font-bold text-xl m-1'>{Title} </h1>
                <h1>{about} </h1>
                <section>
                  <span className='font-bold text-green-700'>Ksh{price}</span>
                </section>
                <button className='border text-slate-600 p-2 w-[100%]'>Order Now</button>
               
              </section>
            </div>
          )
        })}
      
    </div>
    </>
  )
}

export default Offers
