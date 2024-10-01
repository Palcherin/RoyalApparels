import React from 'react'
import DATA from '../Data'

const Prints = () => {
  return (
    <>
      <div className='text-center text-2xl font-bold mb-5 text-sky-500'>
        <h1 className=''>New Arrivals</h1>

      </div>
      <div className='shadow-2xl bg-sky-400 border-collapse h-[45vh] w-[50vw] ml-[20%] mb-[5%]'>
        {DATA.slice(6, 7).map((values) => {
          const { id, Image, Title, price, about } = values
          return (
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
              
              <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                  <img
                    src={Image}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <div class="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                      {Title}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                      Ksh{price}
                    </p>
                  </div>
                  <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                    {about}
                  </p>
                </div>
                <div class="p-6 pt-0">
                  <button
                    className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={() => ProductsDetails(values)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
              <div class="w-full pt-5 px-4 mb-8 mx-auto ">
                <div className="text-sm text-gray-700 py-1">
                  Made with <a class="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
                </div>
              </div>

           
            </div>
          )
        })}

      </div>
    </>
  )
}

export default Prints
