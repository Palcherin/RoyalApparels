import React, { useContext, useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import DATA from '../Data';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { ShopContext } from '../../Context/Cart-context';
import { Phone, WhatsApp, Call, Instagram, Facebook } from '@mui/icons-material';
import ReactWhatsapp from 'react-whatsapp';

const Productspage = () => {
  const navigate = useNavigate();
  const [close, setClose] = useState(false);
  const [details, setDetails] = useState([]);
  const { addToCart, cartItems } = useContext(ShopContext);
  const floatingDivRef = useRef(null);

  const ProductsDetails = (product) => {
    setDetails([{ ...product }]);
    setClose(true);
  };
    const [showCategories, setShowCategories] = useState(false);
  
    const handleToggle = () => {
      setShowCategories(!showCategories);
    };
  
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (floatingDivRef.current && !floatingDivRef.current.contains(event.target)) {
        setClose(false);
      }
    };

    if (close) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [close]);

  return (
    <>
    <div className='w-full'>
      {/* Categories button visible on small screens */}
      <section className="md:hidden flex justify-center my-4">
        <button
          onClick={handleToggle}
          className="bg-green-600 text-white px-4 py-2 rounded-lg focus:outline-none">
          Categories
        </button>
      </section>

      {/* Categories list (conditionally shown on small screens) */}
      <section className={`md:flex md:flex-row md:justify-center space-x-4 my-4 ${showCategories ? 'block' : 'hidden'} md:block`}>
        <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0">
          BONDESLIGA
        </button>
        <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0">
          PREMIER LEAGUE
        </button>
        <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0">
          LA LIGA
        </button>
        <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0">
          SEREA A
        </button>
        <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0">
         LEAGUE 1
        </button>
        <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0">
        INTERNATIONALS
        </button>
        <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0">
          KENYA
        </button>
        <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0">
          KIDS
        </button>
        <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0">
          FOOTWEAR
        </button>
        <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0">
          OTHERS
        </button>
      </section>
    </div>
      {close && (
        <div className="fixed top-0 flex items-center justify-top bg-black bg-opacity-10 z-50">
          <div className='bg-white w-fit h-fit  p-5 ' ref={floatingDivRef}>
            {details.map((x) => (
              <div className='flex flex-col md:flex-row justify-start h-auto md:h-[100vh] w-[90vw] md:w-[88vw] rounded shadow-2xl' key={x.id}>
                <button className='absolute top-2 right-2 text-xl font-bold bg-slate-100 rounded-full p-2 text-red-500' onClick={() => setClose(false)}>X</button>
                <div className='basis-full md:basis-[45%] p-[2%] items-center text-center h-[100%]'>
                  <img src={x.Image} className='h-auto md:h-[90%] object-cover w-full mt-2 md:mt-0' />
                  
                </div>
                <div className='basis-full md:basis-[40%] pt-2'>
                  <h1 className='text-3xl mb-3'>{x.Title}</h1>
                  <h1 className='font-bold font-mono text-xl mb-3 text-emerald-500'>KSH.{x.price}</h1>
                  <section>
                    <h1 className='border-b border-slate-400 p-2 w-fit font-bold mt-1'>Size Chart</h1>
                    <div className='flex'>
                      <button className='bg-slate-200 py-1 px-2 m-1'>S</button>
                      <button className='bg-slate-200 py-1 px-2 m-1'>M</button>
                      <button className='bg-slate-200 py-1 px-2 m-1'>L</button>
                      <button className='bg-slate-200 py-1 px-2 m-1'>XL</button>
                      <button className='bg-slate-200 py-1 px-2 m-1'>XXL</button>
                    </div>
                  </section>
                  <section>
                    <h1 className='text-2xl'>Custom Name Printing +KES.200</h1>
                    <input placeholder='John Doe' className='w-[90%] bg-slate-50 p-2 outline-none border border-solid border-neutral-200 shadow-sm' />
                    <h1 className='text-slate-800 text-sm'>max 8 letters</h1>
                  </section>
                  <section>
                    <h1 className='text-2xl'>Custom Number Printing +KES.200</h1>
                    <input placeholder='John Doe' type='number' className='w-[90%] bg-slate-50 p-2 outline-none border border-solid border-neutral-200 shadow-sm' />
                    <h1 className='text-slate-800 text-sm'>max 3 numbers</h1>
                  </section>
                  <section className='mt-3'>
                    <h1><Checkbox />Premier League badge +KES 200.00</h1>
                    <h1><Checkbox />UEFA champions League badge +KES 200.00</h1>
                  </section>
                  <section>
                    <h1 className='text-xl'>Parcel Information</h1>
                    <input placeholder='Location' className='w-[90%] bg-slate-50 p-2 outline-none border border-solid border-neutral-200 shadow-sm' />
                    <p>Parcel fees is KES300.00 </p>
                  </section>
                  <section className='m-1'>
                    <button className='bg-sky-600 hover:bg-sky-500 p-2 w-[35%] rounded m-1 font-bold'>BUY NOW</button> or
                    <ReactWhatsapp number="+254743666719" message="Hello Pedi Wa Jersey, how are you?" className='bg-green-600 hover:bg-green-500 rounded p-2 w-[35%] m-1 font-bold' >
                    WhatsApp
                    </ReactWhatsapp>
                  </section>
                  <section className='flex justify-evenly'>
                    <a href={`tel:+254743666719`} className='bg-blue-600 hover:bg-blue-500 p-2 text-white m-1 font-bold inline-flex items-center justify-center'>
                      <Call className='mr-2 ' fontSize='90px' size='30px'/> 
                    </a>
                    <section>
                  
                    <ReactWhatsapp number="+254743666719" message="Hello Pedi Wa Jersey, how are you?" >
                    <WhatsApp className='text-white bg-emerald-500 p-1 text-5xl' fontSize='90px' size='30px'/>
                    </ReactWhatsapp>
                    
                    </section>
                    <a href='https://instagram.com/pediwajersey'>
                    <Instagram className='text-white bg-pink-500 p-1 text-5xl' fontSize='90px' size='30px'/></a>
                    <a href='facebook.com/pediwajersey'>
                    <Facebook className='text-white bg-blue-500 p-1 text-5xl ' fontSize='90px' size='30px'/>
                    </a>
                    
                    
                  </section>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={`content ${close ? 'opacity-50' : ''} grid grid-cols-2 md:grid-cols-4 min-h-[100vh] pt-[6%] p-[3%] bg-slate-50`}>
        {DATA.map((values) => {
          const { id, Title, price, about, Image } = values;
          const cartItemsAmount = cartItems[id];

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

export default Productspage;
