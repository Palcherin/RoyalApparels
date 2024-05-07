
import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  
  let Links = [
    { name: "Home", link: "/home" },
    { name: "Jerseys", link: "/products" },
    { name: "Products", link: "/products" },
    { name: "Contact", link: "/contact" },

  ];
  let [open, setOpen] = useState(false);

  return (
    <>


      <div className='  w-full   top-0 left-0 z-10 border-2'>
        <div className='md:flex items-center justify-between bg-sky-100 py-4 md:px-10 px-7'
          style={{
            background: ""
          }}>
          {/* logo section */}
          <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>

            <span className='h-20'><img src='assets/pedi wa jersey logo.png' className='object-fit h-[100%]' /> </span>
            {/* search bar */}
            <div class="relative flex ml-[4%]">
              <input
                type="search"
                class="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary w-[60%]"
                placeholder="Search"
                aria-label="Search"
                id="exampleFormControlInput2"
                aria-describedby="button-addon2" />
              <span
                class="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
                id="button-addon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </span>
            </div>
          </div>
          {/* Menu icon */}
          <div onClick={() => setOpen(!open)} className='absolute right-8 top-6  cursor-pointer md:hidden w-7 h-7'>
            {
              open ? <XMarkIcon /> : <Bars3BottomRightIcon />
            }
          </div>
          {/* linke items */}
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-sky-100   md:z-auto z-0 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px] mr-[5%] bg-sky-100'}`}>
            {
              Links.map((link) => (
                <li className='md:ml-8 md:my-0 my-7 font-semibold '>
                  <a href={link.link} className='text-black-600 font-bold hover:text-sky-400  duration-500'>{link.name}</a>
                </li>))
            }
            <div className='flex justify-normal w-fit gap-0 ml-[2%]'>

              <button className=' text-black py-2 px-3  

     duration-500 hover:text-black border'>
                <Person2TwoToneIcon className='text-slate-500 text-3xl h-10' />
              </button>
              <button className='font-bold  text-sm text-orange-500  py-2 px-3 rounded-3xl  hover:text-orange-400 
     duration-500 '>
                
              </button>
              <a href='/cart' className='font-bold  text-sm text-orange-500  py-2 px-3 rounded-3xl  hover:text-orange-400 
     duration-500'><ShoppingCartTwoToneIcon className='text-6xl' /></a>
            </div>
          </ul>
          {/* button */}
        </div>

      </div>
      {/* <div className='border-1 text-center w-full bg-sky-200 p-[3%]'>
            
              <buttton className='text-xl text-slate-500 m-3'>Bondes League</buttton>
              <buttton className='text-xl text-slate-500 m-3'>Bondes League</buttton>
              <buttton className='text-xl text-slate-500 m-3'>Bondes League</buttton>
              <buttton className='text-xl text-slate-500 m-3'>Bondes League</buttton>
              <buttton className='text-xl text-slate-500 m-3'>Bondes League</buttton>
            
        </div> */}
    </>
  );
};

export default Navbar;

