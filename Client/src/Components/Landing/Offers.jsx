import React from 'react'
import DATA from '../Data'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Offers = () => {
  return (
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
  )
}

export default Offers
