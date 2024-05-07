import React from 'react'
import DATA from '../Data'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const Shop = (props) => {
    const { id, Title, price, about, Image } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemsAmout = cartItems[id];
    return(
        <div className=' shadow-xl w-65   h-[400px] p-2 m-4 '  key={id}>
          <img src={Image} className='h-[50%] w-[80%]  object-cover'/>
          <section>
            <h1 className='font-bold text-xl m-4'>{Title} </h1>
            <h1>{about} </h1>
            <section>
              <span className='font-bold text-green-700'>Ksh{price}</span>
            </section>
            {/* <Link to={`/product-details`} className='border text-slate-600 p-2 w-[85%]' >More Details</Link> */}
            <button className='border text-slate-600 p-2 w-[80%]'   onClick={() => ProductsDetails(values)} >Order Now</button>
            <ShoppingCartTwoToneIcon  onClick={() => addToCart(id)} className='text-white bg-emerald-500 p-1 text-4xl  '  fontSize='70px' size='30px'/>
            <section>
              
              
            </section>
           
          </section>
        </div>

      
      )
}

export default Shop
