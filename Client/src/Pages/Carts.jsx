import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import DATA from "../Components/Data";
import CartItems from "../Components/Cart/CartItemsComponent";
import { ShopContext } from "../Context/Cart-context";
const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const shippingEstimate = 300; // Shipping estimate amount
  const orderTotal = totalAmount + shippingEstimate; // Calculate order total
  const navigate = useNavigate();


  return (
   <div className="cart">

  <section className="text-center mt-8">
  <h1 className="align-center text-2xl font-bold ml[10%] m-2 mb-[1%]"> Your Cart Items</h1>
  
  </section>
  <div className=" align-middle w-[60%] pl-[10%]">
    {DATA.map((product) => {
      if (cartItems[product.id] > 0) {
        return <CartItems key={product.id} data={product} />;
      }
      return null; // Explicitly return null if condition isn't met
    })}
  </div>

  {totalAmount > 0 ? (
    <div className="bg-slate-300 w-[40%] ml-[20%] min-h-[150px] align-middle items-center p-[2%] mb-6">
      <h1 className="text-2xl font-bold">Order Summary</h1>
      
      <section className="flex justify-between pr-[20%] text-xl m-4">
       <h1>Subtotal: Ksh</h1>
       <p className="font-bold border border-black p-2">{totalAmount.toFixed(2)}</p>
      </section>
      <section className="flex justify-between pr-[20%] text-xl m-4">
        <h1>Shipping Estimate: Ksh</h1>
        <h1 className="font-bold border border-black p-2">{shippingEstimate.toFixed(2)}</h1>
      </section>
      
      <h1 className="text-xl w-[80%] border-2 border-black"></h1>
      <section className="flex justify-between pr-[20%] text-xl m-4">
        <h1>Order Total</h1>
        <h1 className="font-bold border-black p-2">KES.{orderTotal.toFixed(2)}</h1>
      </section>
      <section>
      <button
      className=" bg-emerald-700 p-3 w-[90%] text-white font-bold text-2xl rounded-lg hover:bg-emerald-400 hover:text-2xl"
        onClick={() => {
          checkout();
          navigate("/checkout");
        }}
      >
        Checkout
      </button>
      </section>
      or
      <button onClick={() => navigate("/")} className="text-blue-600 font-bold text-lg ml-2 hover:underline">Continue Shopping</button>
      
    </div>
  ) : (
    <h1>Your Shopping Cart is Empty</h1>
  )}
</div>

  );
};

export default Cart