import React, { useContext, useState, useRef, useEffect } from 'react';
import DATA from '../Data';
import ReactWhatsapp from 'react-whatsapp';
import { ShopContext } from '../../Context/Cart-context';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { Phone, WhatsApp, Call, Instagram, Facebook } from '@mui/icons-material';

const Productspage = () => {
  const navigate = useNavigate();
  const [close, setClose] = useState(false);
  const [details, setDetails] = useState([]);
  const { addToCart, cartItems } = useContext(ShopContext);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const floatingDivRef = useRef(null);
  const [showCategories, setShowCategories] = useState(false);

  const ProductsDetails = (product) => {
    setDetails([{ ...product }]);
    setClose(true);
  };

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

  // Handle Category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set the selected category
  };

  // Clear category filter
  const clearCategoryFilter = () => {
    setSelectedCategory(""); // Reset selected category
  };

  return (
    <>
      <div className="relative flex ml-[4%]">
        <input
          type="search"
          className="relative mt-5 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.80rem] 
          text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3]
          focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 
          dark:autofill:shadow-autofill dark:focus:border-primary w-[300px]"
          placeholder="Search product..."
          onChange={(e) => setSearch(e.target.value)} // Update search input
          aria-describedby="button-addon2"
        />
      </div>

      {/* Categories section */}
      <div className='w-full'>
        <section className="md:hidden flex justify-center my-4">
          <button
            onClick={handleToggle}
            className="bg-green-600 text-white px-4 py-2 rounded-lg focus:outline-none">
            Categories
          </button>
        </section>

        <section className={`md:flex md:flex-row md:justify-center space-x-4 my-4 ${showCategories ? 'block' : 'hidden'} md:block`}>
          {/* List of category buttons */}
          <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0" onClick={() => handleCategoryClick('BONDESLIGA')}>
            BONDESLIGA
          </button>
          <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0" onClick={() => handleCategoryClick('PREMIER LEAGUE')}>
            PREMIER LEAGUE
          </button>
          <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0" onClick={() => handleCategoryClick('LA LIGA')}>
            LA LIGA
          </button>
          <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0" onClick={() => handleCategoryClick('SEREA A')}>
            SEREA A
          </button>
          <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0" onClick={() => handleCategoryClick('LEAGUE 1')}>
            LEAGUE 1
          </button>
          <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0" onClick={() => handleCategoryClick('INTERNATIONALS')}>
            INTERNATIONALS
          </button>
          <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0" onClick={() => handleCategoryClick('KENYA')}>
            KENYA
          </button>
          <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0" onClick={() => handleCategoryClick('KIDS')}>
            KIDS
          </button>
          <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0" onClick={() => handleCategoryClick('FOOTWEAR')}>
            FOOTWEAR
          </button>
          <button className="text-sm bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-2 md:mb-0" onClick={() => handleCategoryClick('OTHERS')}>
            OTHERS
          </button>
          <button className="text-sm bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg mb-2 md:mb-0" onClick={clearCategoryFilter}>
            Clear Filter
          </button>
        </section>
      </div>

      {/* Products section */}
      <div className={`content ${close ? 'opacity-50' : ''} grid grid-cols-2 md:grid-cols-4 min-h-[100vh] pt-[6%] p-[3%] bg-slate-50`}>
        {DATA.filter((val) => {
          // Check if the product matches the search or the selected category
          const matchesSearch = search === "" || (val.Title && val.Title.toLowerCase().includes(search.toLowerCase()));
          const matchesCategory = selectedCategory === "" || (val.Category && val.Category.toLowerCase() === selectedCategory.toLowerCase());

          return matchesSearch && matchesCategory;
        }).map((values) => {
          const { id, Title, price, about, Image } = values;

          return (
            <div className='relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-5' key={id}>
              <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img src={Image} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">{Title}</p>
                  <p className="block font-sans text-base text-green-500 font-medium leading-relaxed text-blue-gray-900 antialiased">Ksh{price}</p>
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">{about}</p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105"
                  type="button"
  
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
