import React from 'react';
import DATA from '../Data';


const Offers = () => {
  // Filter products by 'Premier league' category
  const premierLeagueProducts = DATA.filter(product => 
    product.category && product.category === 'La liga'
  );

  // Log to see if the filtering is working
  console.log(premierLeagueProducts); 

  return (
    <>
      <div className='grid-cols-1 sm:grid md:grid-cols-4 min-h-[100vh] max-h-fit pt-[6%] p-[3%]'>
        {premierLeagueProducts.map((values) => {
          const { id, Title, price, about, Image } = values;
          return (
            <div className='relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-5' key={id}>
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
                 <p className="block font-sans text-base text-green-500 font-medium leading-relaxed text-blue-gray-900 antialiased">
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
          );
        })}
      </div>
    </>
  );
};

export default Offers;
