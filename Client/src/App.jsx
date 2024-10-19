
import {BrowserRouter,Route,Routes}  from 'react-router-dom'
import Home from './Pages/Home';
import ProductInfor from './Pages/ProductInfor';
import Navbar from './Components/Landing/Navbar';
import Footer from './Components/Landing/Footer';
import Products from './Pages/Products';
import ProductsView from './Components/Shop/ProductsView';
import Carts from './Pages/Carts';
import Contact from './Components/Landing/Contact';
import ProductView from './Components/Shop/product';
import CheckoutPage from './Pages/Checkout';





const App=()=>{

  return (
    <>
    <Navbar/>
      <BrowserRouter>
      <Routes>
      
      <Route path='/home' element={<Home/> }/>
      <Route path='/' element={<Home/> }/>
      <Route path='/products' element={<Products/> }/>
      {/* <Route path='/cart' element={<Carts/> }/> */}
      <Route path='/cart' element={<Carts/> }/>
      <Route path='/info' element={<ProductInfor/> }/>
      <Route path='/contact' element={<Contact/> }/>
      <Route path='/checkout' element={<CheckoutPage/> }/>
      <Route path='/product-details' element={<ProductsView/> }/>
      
      <Route path='/productdetails/:id' element={<ProductView/> } />
       
      </Routes>
      </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App;

