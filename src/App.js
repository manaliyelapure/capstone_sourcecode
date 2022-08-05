
import './App.css';
import Navbar from './Components/Header/Navbar';
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./containers/ProductDetails";
import Footer from './Components/Footer/Footer';
import Cart from './containers/Cart';
import ShoppingCart from './ShoppingBag/ShoppingCart';
import Order from './PlaceOrder/Order';
import { Component } from 'react';
import Homepage from './component/Homepage';
import CheckHome from './Checkout/CheckHome';





function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* <CheckHome/> */}
         <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/CheckHome" element={<CheckHome/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/Order" element={<Order/>}/>
          <Route path="/capstone/products/:productId" element={<ProductDetails/>} />
          <Route path="/capstone/shoppingcart" element={<ShoppingCart/>} />
          
           
       </Routes>
      
      <Footer />
      
    
    </div>
  );
}

export default App;
