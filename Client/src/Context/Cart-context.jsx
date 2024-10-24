import { createContext, useEffect, useState } from "react";

import DATA from '../Components/Data';
import { useReducer } from 'react';



export const ShopContext=createContext()
const getDefaultCart=()=>{
  let cart={};
  for (let i=1; i<DATA.length; i++){
    cart[i]=0;
  } 
  return cart;
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = DATA.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };
      delete newItems[id];
      return newItems;
    });
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    removeItemFromCart,
    clearCart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};