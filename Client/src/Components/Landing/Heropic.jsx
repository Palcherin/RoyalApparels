import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Sliderpage from './Sliderpage';

const Heropic = () => {
  return (
    <div className=' min-h-[90vh] flex justify-normal  bg-sky-100 '>
     <div className='rounded-right-full basis-[50%] p-[5%]  '>
      <h1 className='text-6xl font-bold font-sans m-3'>Royal Apparels Jersey Stores</h1>
      <p className='font-light text-l m-3'>Kua fan wa nguvu. Get the jersey of your choice printed and delivered to you anywhere in the country.</p>
      <section className='flex justify-start m-5'>
        <button className='bg-green-400 p-2 rounded-full m-2 animate-pulse'>Get Started</button>
        <button className='bg-orange-400 p-2 rounded-full m-2 '>Our Products</button>
      </section>
      <section className='flex justify-around w-fit gap-5 mt-10 ml-6'>
      {  <FaFacebook href='https://www.facebook.com/profile.php?id=100092180382939' className='text-blue-500 text-xl'/> }
    {  <FaTwitter href='https://twitter.com/KenLumuli?s=20' className='text-blue-500 text-xl'/> }
    {  <FaInstagram  href='https://www.instagram.com/mure_enterprises/' className='text-purple-500 text-xl'/> }
      </section>
      <div className='flex justify-normal'>
        <section className='m-4 text-center'>
          <h1 className='font-bold text-4xl'>+3000</h1>
          <h1 className='font-bold'>Jerseys Sold</h1>
        </section>
        <section className='m-5 text-center text-green-600'>
          <h1 className='text-4xl font-bold'>+500</h1>
          <h1 className='font-bold'>Deliveries Made</h1>
        </section>
        <section className='m-5 text-center text-red-600'>
          <h1 className='text-4xl font-bold'>+1000</h1>
          <h1 className='font-bold'>Jerseys Printed</h1>
        </section>
      </div>
     </div>
     <div className='basis-[50%] w-full h-[90vh] mr-5'>
      <Sliderpage/>
     </div>
    </div>
  )
}

export default Heropic