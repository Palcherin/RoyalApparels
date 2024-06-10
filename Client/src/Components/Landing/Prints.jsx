import React from 'react'
import DATA from '../Data'

const Prints = () => {
  return (
    <>
    <div className='text-center text-2xl font-bold mb-5 text-sky-500'>
      <h1 className=''>New Arrivals</h1>
      
    </div>
    <div className='shadow-2xl bg-sky-400 border-collapse h-[45vh] w-[50vw] ml-[20%] mb-[5%]'>
        {DATA.slice(6,7).map((values)=>{
            const{id, Image, Title, price, about}=values
            return(
                <div className='h-[40vh] W-[60%]'>
                    <section className='flex justify-start h-[41vh] p-1'>
                       <img src={Image} className='object-contain h-[40vh] basis-[30%] w-[100%]' /> 
                       <section className=' mt-[3%] text-center'>
                        <h1 className='text-4xl font-bold'>{Title} </h1>
                        <h1>Available {about} </h1>
                        <h1 className='m-3 font-bold font-mono'>Ksh.{price} </h1>
                        <h1 className='font-bold text-red-600 animate-pulse text-xl bg-sky-500 p-2 '>Free Delivery!!!</h1>
                        <button className='rounded-full p-2 w-[200px] border m-5'>Buy Now</button>
                       </section>
                    </section>
                    
                </div>
            )
        }) }
      
    </div>
    </>
  )
}

export default Prints
