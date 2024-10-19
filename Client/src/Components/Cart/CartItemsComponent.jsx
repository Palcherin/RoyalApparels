import React, { useContext } from "react";
import { ShopContext } from "../../Context/Cart-context";

const CartItem = (props) => {
  const { id, Title, price, Image } = props.data;
  const { cartItems, addToCart, removeFromCart,removeItemFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0) {
      updateCartItemCount(value, id);
    }
  };

  return (
    <div className="">
      
    <div className="flex basis-[70%] justify-between w-[60vw] min-h-[8vh] p-[2%] pl-[10%]  ml-[5%] border-b-2 border-black">
      <img src={Image} alt={Title} className="object-contain basis-[40%] min-h-[120px] max-w-[200px]"/>
      <div className="align-middle">
        <p className="text-2xl w-[70%]">
          {Title}
        </p>
        <p>Sizes available:S,M,L,XL,XXL</p>
        <p className="font-bold text-lg"> KSH{price}</p>
      </div>
      <div className="w-[30px] pt-[8%] ">
          <button 
            onClick={() => removeFromCart(id)} 
            aria-label={`Remove one ${Title} from cart`}
            className="font-bold text-4xl w-[100%] border border-black hover:bg-red-500"
          >
            -
          </button>
          <input
            type="number"
            value={cartItems[id] || 0} // Default to 0 if undefined
            onChange={handleInputChange}
            min="0" // Prevent negative values
            className="border-1 p-2 w-[50px] m-1"
          />
          <button 
            onClick={() => addToCart(id)} 
            className="text-3xl border border-black p-2 hover:bg-green-500"
            
          >
            +
          </button>
        </div>
        <button onClick={() => removeItemFromCart(id)}  className="bg-red-800 text-white h-fit font-bold rounded p-2 hover:bg-red-700">Remove</button>
    </div>
    <h1 className="underline w-[80%] h-2"></h1>
    </div>
  );
};

export default CartItem;
