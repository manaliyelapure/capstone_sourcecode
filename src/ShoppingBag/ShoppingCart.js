import React, {useEffect} from "react";
import PP_BTN from '../Assets/PP_BTN.png';
import lock from '../Assets/lock.svg';
import chevrondown from "../Assets/chevron-down.svg";
import editblack from "../Assets/edit-black.svg";
import trash2 from "../Assets/trash-2.svg";
import heart from "../Assets/heart.svg";
import { useSelector, useDispatch } from "react-redux";

import checkout from '../Assets/checkout.png';
import { productsActions } from "../redux/cartSlice";
import { NavLink } from "react-router-dom";



function ShoppingCart() {
  
  const dispatch = useDispatch()

  const handleRemoveFromCart = (val) => {
    dispatch(productsActions.removeFromCart(val))
  }

  const cart = useSelector((state) => state.handlecartSlice.cartTotalAmount);
  useEffect(() => {
    dispatch(productsActions.getTotals())
    
  }, [cart, dispatch])
  console.log(cart)

  const handleDecreaseCart = (val) => {
    dispatch(productsActions.decreaseCart(val))
  }

  const handleIncreaseCart = (val) => {
    dispatch(productsActions.increaseCart(val))
  }

  const shoppingbagitem = useSelector((Value) => Value.handlecartSlice.items);
  const removeitem = (id) => {
    
    console.log(id, "deleted product");
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(json => console.log(json))

  }

  return (
    <section className="shopCart customContainer container">
      <div className="aem-Grid aem-Grid--12 shop-head">
        <h2 className="shopCart">Your Shopping Bag</h2>
        <div className="bottom-line"></div>
      </div>

      {shoppingbagitem.length === 0 ? (
        <div className="empty_cart">
        <p>Your Cart is Empty</p>

      </div>
      ) : (
        <div className="aem-Grid aem-Grid--12 BagWrapper">







          {shoppingbagitem.map((val) => {
            return (
              <>

              <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 leftSideCart pr-32">
                <div className="aem-Grid aem-Grid--12">
                  <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--12  shopping-cart">
                    <img src={val.image} className="productimage" />

                  </div>
                
                   <div className=" aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn--phone--12 aem-GridColumn--default--3 py-1 details-pricing">
                       <h4>{val.title}</h4>
                        <p>Size : Medium</p>
                        <p>Color : Storm</p>
                        <p>${val.price}</p>
                    </div>




                      <div className="aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn--phone--12 aem-GridColumn--default--3  py-1 cartBtn">
                        <button onClick={() => handleDecreaseCart(val)}>-</button>
                        <div className="quantity">{val.cartQuantity}</div>
                       
                        <button onClick={() => handleIncreaseCart(val)}>+</button>
                      </div>
                      <div className="Outerwrap">
                      <div className=" aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn--phone--12 aem-GridColumn--default--3  outer">
                      <div className="innerwrap">
                        <img src={editblack} alt="edit details" />
                        <span> Edit item</span>
                      </div>
                      <button className="innerwrap " onClick={() => handleRemoveFromCart(val)}>
                        <img src={trash2} alt="remove products" />
                        
                        <span > Remove</span>
                      </button>
                      <div className="innerwrap">
                        <img src={heart} alt="save for later" />
                        <span> Save for later</span>
                      </div>
                    </div>

                      </div>

                  


               
                  </div>
                </div>
                
                
              </>

            );
          })}



          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 summary">


              <div className="prod-Summary">
                <div>
                  <h3>Pricing Summary</h3>
                  <ul>
                    <li>Subtotal</li>
                    <li>Coupon</li>
                    <li>Gift Card</li>
                    <li>Estimated tax</li>
                    <li>Estimated shipping</li>
                    <h3>Estimated Total</h3>
                  </ul>
                </div>
                <div>
                  <h3 className="price-val">""</h3>
                  <ul>
                    <li></li>
                    <li>$ {cart}</li>
                    <li>- $ 77.60</li>
                    <li>- $ 100.00</li>
                    <li>$ 23.28</li>
                    <li>FREE</li>
                    <h3>$ {cart}</h3>
                  </ul>
                </div>
              </div>

              <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--4 check" style={{textAlign:"center"}}>
                <NavLink to='/CheckHome'><img src={checkout} alt="checkout button" /></NavLink>
              </div>
              


            </div>
          </div>

          <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--8 pr-32">


            <button class="accordion">Estimate your Shipping <span>shipping to 91001 <img src={chevrondown} /> </span></button>
            <div className="panel aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 " >
              <p>Lorem ipsum...</p>
            </div>

            <button class="accordion">Enter a Coupon Code<span>20%discount applied <img src={chevrondown} /></span></button>
            <div className="panel aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 ">
              <p>Lorem ipsum...</p>
            </div>

            <button class="accordion">Apply Gift Card </button>
            <div className="panel aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12">
              <p>Lorem ipsum...</p>
            </div>


          </div>






        </div>




        
      )}








  
    </section>
  );
}

export default ShoppingCart;