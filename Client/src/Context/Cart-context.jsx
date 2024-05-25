import React, { createContext, useState } from 'react'

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


export const CartContextProvider = (props) => {
  const [cartItems,setCartItems]=useState(getDefaultCart(()=>{
    JSON.parse(localStorage.getItem("Cart"))
  }));


// add to cart
  const addToCart = (itemid) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
 
      updatedCart[itemid] = (updatedCart[itemid] || 0) + 1;
  
      return updatedCart;
    });
  };

  
//  remove from cart
  const removeFromCart = (itemid) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
    
      updatedCart[itemid] = (updatedCart[itemid] || 0) -1;
  
      return updatedCart;
    });
  };
  

  const updateCartItemCount = (newAmount, itemid) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
  
      updatedCart[itemid] = newAmount;
  
      return updatedCart;
    });
  };
  const clearCart = () => {
    setCartItems(getDefaultCart());
}

  const getTotalAmount = () => {
    let totalAmount = 0;
    
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = DATA.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
        }
    }

    return totalAmount;
}

  
  console.log(cartItems)
  const contextValue={cartItems,addToCart,removeFromCart, updateCartItemCount,getTotalAmount, clearCart}
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}


// const total=cartItems.reduce((price,item)=>
//   {
//     total+ item.price * item.quantity,0
//   });