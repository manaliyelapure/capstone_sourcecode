
import './App.css';
import Navbar from './Components/Header/Navbar';
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./containers/ProductDetails";
import Footer from './Components/Footer/Footer';
import Cart from './containers/Cart';
import ShoppingCart from './ShoppingBag/ShoppingCart';

import { Component } from 'react';
import Homepage from './component/Homepage';




function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homepage/> */}
     
         <Routes>
          
           <Route path="/capstone/products/:productId" element={<ProductDetails/>} />
           <Route path="/capstone/shoppingcart" element={<ShoppingCart/>} />
           <Route path="/" element={<Cart/>}/>
           
       </Routes>
      
      <Footer />
      
    
    </div>
  );
}

export default App;
