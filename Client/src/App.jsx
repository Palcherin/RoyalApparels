
import {BrowserRouter,Route,Routes}  from 'react-router-dom'
import Home from './Pages/Home';
import ProductInfor from './Pages/ProductInfor';
import Navbar from './Components/Landing/Navbar';
import Footer from './Components/Landing/Footer';
import Products from './Pages/Products';
import ProductsView from './Components/Shop/ProductsView';
import Carts from './Pages/Carts';
import Contact from './Components/Landing/Contact';





const App=()=>{

  return (
    <>
    <Navbar/>
      <BrowserRouter>
      <Routes>
      
      <Route path='/home' element={<Home/> }/>
      <Route path='/products' element={<Products/> }/>
      {/* <Route path='/cart' element={<Carts/> }/> */}
      <Route path='/cart' element={<Carts/> }/>
      <Route path='/info' element={<ProductInfor/> }/>
      <Route path='/contact' element={<Contact/> }/>
      
      <Route path='/product-details' element={<ProductsView/> }/>
      </Routes>
      <Route></Route>
      </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App;

