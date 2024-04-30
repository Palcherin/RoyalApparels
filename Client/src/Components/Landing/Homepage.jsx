import React from 'react'
import Offers from './Offers'
import Prints from './Prints'
import Gallery from './Gallery'

const Homepage = () => {
  return (
    <div className=''>
        <section className='text-center'>
            <h1 className='text-xl font-bold'>Weekly Highlights</h1>
        </section>
        <div>
          <Offers/>
          <Prints/>
          <Gallery/>
        </div>
      
    </div>
  )
}

export default Homepage
