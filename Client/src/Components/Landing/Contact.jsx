import { Textarea } from '@material-tailwind/react'
import { Email, EmailOutlined, Person, PhoneCallback } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-white min-h-[100vh] w-[100vw] flex justify-between'>
      <div className='basis-[40%] p-[3%]'>
        <h1 className='text-emerald-600 font-bold'>contact us</h1>
        <h1 className='font-bold text-3xl '>Royal Apparels <span className='text-emerald-600 '>Jersey</span> Stores</h1>
        <h1 className='text-xl w-[80%]'>We are here because we listen. Talk to us, we will get back to you as soon as possible</h1>
        <section className='mt-[2%] flex'>
          <h1 className='text-emerald-600 font-bold text-4xl'><PhoneCallback/> </h1>
          <h1 className='m-0 text-sm'>+254 743666719<br/>+254 799357770</h1>
          
        </section>
        <section className='mt-[2%] flex'>
          <h1 className='text-emerald-600 font-bold text-4xl '><EmailOutlined/> </h1>
          <h1 className='text-sm'> palcherin17@gmail.com <br/> royalapparels.co.ke </h1>
        </section>
      </div>
      <div className='basis-[50%] mr-[2%] mt-[2%]'>
        <h1 className='text-emerald-600 font-bold'>Send us a message...</h1>
        <section className='flex'>
          <input placeholder='e.g John Doe' className='w-[100%] p-2 outline-sky-600 border m-3'/>
          <input placeholder='e.g Nairobi' className='w-[100%] p-2 outline-sky-600 border m-3'/>
        </section>
        <section className='flex'>
          <input placeholder='e.g Phone' className='w-[100%] p-2 outline-sky-600 border m-3'/>
          <input placeholder='e.g Email' className='w-[100%] p-2 outline-sky-600 border m-3'/>
        </section>
        <section className='flex'>
          <input placeholder='e.g John Doe' className='w-[100%] p-2 outline-sky-600 border m-3'/>
          
        </section>
        <section className='flex'>
          <Textarea className='min-h-[25vh] outline-sky-600 text-xl' placeholder='Send us your message...'/>
        </section>
        <section className='align-center'>
            <button className='mt-[2%] p-2 bg-emerald-600 rounded-full w-[50%] text-xl hover:bg-emerald-500 hover:text-white'>Send Message</button>
        </section>
      
      </div>
    </div>
  )
}

export default Contact
