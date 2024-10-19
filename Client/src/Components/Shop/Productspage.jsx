import React, { useContext, useState, useRef, useEffect } from 'react';
import DATA from '../Data'; // Assume this is where your product data is stored
import { ShopContext } from '../../Context/Cart-context';
import { useNavigate } from 'react-router-dom';
import { Checkbox, TextField } from '@mui/material';

const Productspage = () => {
  const navigate = useNavigate();
  const [close, setClose] = useState(false); // To manage the modal visibility
  const [details, setDetails] = useState([]); // To store product details
  const { addToCart, cartItems } = useContext(ShopContext); // Context for cart actions
  const floatingDivRef = useRef(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isNumberChecked, setIsNumberChecked] = useState(false);

  const [selected, setSelected] = useState('');
  const [otherInput, setOtherInput] = useState(''); // State for the input value

  const sizes = ["S", "M", "XL", "2XL", "3XL"];

  // whatsapp

  const formatDetailsForWhatsApp = () => {
    const product = details[0]; // Since you're only showing one product in the modal at a time
    let message = `Order Details:\n\nProduct: ${product.Title}\nPrice: Ksh ${product.price}\n`;

    if (selectedSize) {
      message += `Selected Size: ${selectedSize}\n`;
    }

    if (isChecked) {
      message += `Printing: Name`;
    }

    if (isNumberChecked) {
      message += `Printing: Number`;
    }

    if (selected) {
      message += `Badge: ${selected}`;
    }

    if (selected === 'OTHER' && otherInput) {
      message += `Other Badge: ${otherInput}`;
    }

    message += `Delivery Charge: Ksh.300`;

    return encodeURIComponent(message); // Encode the message for the URL
  };

  const redirectToWhatsApp = () => {
    const phoneNumber = "+254799357770"; // Replace with actual phone number
    const message = formatDetailsForWhatsApp();
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank"); // Open WhatsApp in a new tab
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleNumberCheckboxChange = () => {
    setIsNumberChecked(!isNumberChecked);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleChange = (event) => {
    setSelected(event.target.value);
    if (event.target.value !== 'OTHER') {
      setOtherInput(''); // Clear the input if "OTHER" is not selected
    }
  };

  const handleInputChange = (event) => {
    setOtherInput(event.target.value);
  };

  // Function to open product details modal
  const ProductsDetails = (product) => {
    setDetails([{ ...product }]);
    setClose(true);
  };

  // Handle clicking outside the modal to close
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
      {/* Product List Section */}
      <div className={`grid grid-cols-2 md:grid-cols-4 min-h-[100vh] pt-[6%] p-[3%] bg-slate-50`}>
        {DATA.map((values) => {
          const { id, Title, price, about, Image } = values;

          return (
            <div
              className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-5 cursor-pointer"
              key={id}
            >
              <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img src={Image} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                    {Title}
                  </p>
                  <p className="block font-sans text-base text-green-500 font-medium leading-relaxed text-blue-gray-900 antialiased">
                    Ksh {price}
                  </p>
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                  {about}
                </p>
                <button
                  className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 "
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

      {/* Product Details Modal */}
      {close && details.length > 0 && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          aria-labelledby="product-modal-title"
          aria-modal="true"
          role="dialog"
          aria-describedby="product-modal-description"
        >
          <div
            ref={floatingDivRef}
            className="bg-white w-[90%] md:w-[50%] p-6 rounded-lg shadow-lg relative max-h-[80vh] overflow-y-auto"
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setClose(false)}
              aria-label="Close modal"
            >
              X
            </button>

            {details.map((product, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 w-[750px] h-auto">
                <img src={product.Image} alt={product.Title} className="w-full md:w-1/2 object-contain rounded-lg" />

                <div className="flex flex-col justify-evenly w-full align-middle">
                  <div className="pt-[2%]">
                    <h2 className="text-2xl font-bold mb-4">{product.Title}</h2>
                    <p className="text-xl font-bold">Price:</p>
                    <p className="text-lg font-semibold text-green-600 mb-2">Ksh {product.price}</p>
                    <div className="flex space-x-1">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeClick(size)}
                          className={`px-4 py-2 border rounded-lg text-lg ${
                            selectedSize === size
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-800"
                          } hover:bg-blue-400 hover:text-white transition`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Printing Section */}
                  <div className="align-top mt-4">
                    <h1>Printing:</h1>
                    <div className="p-4">
                      <div className="flex">
                        <section className="basis-[60%]">
                          <h1 className="text-lg">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                className="form-checkbox h-5 w-5 text-blue-600"
                              />
                              <span> Name</span>
                            </label>
                          </h1>

                          {isChecked && (
                            <input
                              placeholder="Name"
                              type="text"
                              className="mt-4 p-2 border rounded-lg w-full"
                            />
                          )}
                        </section>

                        <section>
                          <h1 className="text-lg">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={isNumberChecked}
                                onChange={handleNumberCheckboxChange}
                                className="form-checkbox h-5 w-5 text-blue-600"
                              />
                              <span>Number:</span>
                            </label>
                          </h1>

                          {isNumberChecked && (
                            <input
                              placeholder="Number"
                              type="number"
                              className="mt-4 p-2 border rounded-lg w-[70px] ml-2"
                            />
                          )}
                        </section>
                      </div>

                      {/* Badges Section */}
                      <h1>Badges:</h1>
                      <section>
                        <h1>
                          <Checkbox
                            checked={selected === 'Premier League'}
                            onChange={handleChange}
                            value="Premier League"
                          />
                          Premier League
                        </h1>
                        <h1>
                          <Checkbox checked={selected === 'UEFA'} onChange={handleChange} value="UEFA" />
                          UEFA
                        </h1>
                        <h1>
                          <Checkbox checked={selected === 'EUROPA'} onChange={handleChange} value="EUROPA" />
                          EUROPA
                        </h1>
                        <h1>
                          <Checkbox checked={selected === 'OTHER'} onChange={handleChange} value="OTHER" />
                          OTHER
                        </h1>

                        {selected === 'OTHER' && (
                          <TextField
                            label="Please specify"
                            value={otherInput}
                            onChange={handleInputChange}
                            variant="outlined"
                            fullWidth
                          />
                        )}
                      </section>

                     
                    </div>
                  </div>

                  {/* Add to Cart Section */}
                  <div className="mt-4">
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                      onClick={() => addToCart(product.id)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="ml-4 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
                      onClick={redirectToWhatsApp}
                    >
                      Whatsapp
                    </button>
                  </div>
                  <section>
                    <h1>
                      or<button className='m-3 text-blue font-bold'
                      onClick={()=>navigate('/cart')}
                      >Go to cart</button>
                    </h1>
                  </section>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Productspage;
