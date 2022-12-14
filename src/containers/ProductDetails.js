import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../redux/cartSlice";

import SimpleImageSlider from "react-simple-image-slider";

import dot1 from '../Assets/dot1.svg';

import heart from '../Assets/heart.svg';
import share2 from '../Assets/share-2.svg';


const ProductDetails = (props) => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});


  const dispatch = useDispatch();
  const addProduct = (product) => {

    dispatch(productsActions.addProdToCart({ ...product, quntity: 1 }));

  }

  const images = [
    { url: selectedProduct.image },
    { url: selectedProduct.image },
    { url: selectedProduct.image },
    { url: selectedProduct.image },
    { url: selectedProduct.image }

  ];

  let [num, setNum] = useState(0);
  let incrementNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decrementNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  let handleChange = (e) => {
    setNum(e.target.value);
  }


  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`https://fakestoreapi.com/products/${productId}`, requestOptions)
      .then(res => res.json())
      .then(json => {

        console.log("data   -====  " + JSON.stringify(json))
        setSelectedProduct(json)

      });
  }, []);

  const text = selectedProduct.description;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <section className="container">
      <div className="aem-Grid aem-Grid--12">
        {selectedProduct.title ? (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider"></div>
              <div className=" middle aligned row">
                <div className="aem-Grid aem-Grid--12">
                  <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--7">
                    <div className="column-lp">
                      <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--1">
                        
                          <div className="imgCarousal">
                  <img className="ProdImg" src={selectedProduct.image} alt={selectedProduct.title} />
                  <img className="ProdImg" src={selectedProduct.image} alt={selectedProduct.title} />
                  <img className="ProdImg" src={selectedProduct.image} alt={selectedProduct.title} />
                  <img className="ProdImg" src={selectedProduct.image} alt={selectedProduct.title} />
                  <img className="ProdImg" src={selectedProduct.image} alt={selectedProduct.title} />
                </div>
                        </div>


                 
              {/* <div className="aem-GridColumn aem-GridColumn--default--11 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 single-img"> */}
             
             
                  {/* <img className="ui-fluid-image" src={selectedProduct.image} alt="products" /> */}
                  {/* <div className="dots-for-image">
                            <ul>
                                            <li><img src={dot1} /></li>
                                            <li><img src={dot1} /></li>
                                            <li><img src={dot1} /></li>
                                            <li><img src={dot1} /></li>
                                            <li><img src={dot1} /></li>
                                        </ul>
                  </div> */}



                  {/* <div className="ProdImgDiv">
                  <SimpleImageSlider

                    width={290}
                    height={320}
                    images={images}
                    showBullets={true}
                    showNavs={false}
                  />
                </div> */}
                
              {/* </div> */}
              <div className="aem-GridColumn aem-GridColumn--default--11 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 ProdImgDivParent">
                <div className="ProdImgDiv">
                  <SimpleImageSlider

                    width={290}
                    height={320}
                    images={images}
                    showBullets={true}
                    showNavs={false}
                  />
                </div>
              </div>

                      </div>

                    </div>
                  </div>



                  <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--5">
                    <div className="column-rp">
                      <h5>Clothing / Women???s / Outerwear</h5>
                      <h1>{selectedProduct.title}</h1>
                      <h2>
                        <a className="ui teal tag label">${selectedProduct.price}</a>
                      </h2>
                      {/* <h3 className="ui brown block header">{selectedProduct.category}</h3>
                      <p>{selectedProduct.description}</p> */}


              <div className="textWrapper">
              <p className="text">
                {isReadMore ? text.slice(0, 90) : text}
                <span onClick={toggleReadMore} className="read-or-hide">
                  {isReadMore ? " Read more" : " Read less"}
                </span>
              </p>
            </div>
                      <hr />
                      <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12 row-data">

                        <Rating />
                      </div>

                      <div className="size">
                        <h2>Quantity</h2>

                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 cart-btn'>
                          <button aria-label="decrement no" onClick={decrementNum}>-</button>
                          <input type="text" role="button" className='cart-input' value={num} onChange={handleChange} />
                          <button aria-label="increment no" onClick={incrementNum}>+</button>
                        </div>

                      </div>

                      <div className="ui-vertical-animated-button" tabIndex="0">
                        <div className="hidden content">
                          <i className="shop icon"></i>
                        </div>
                        <div className="visible-content" onClick={() => addProduct(selectedProduct)}><span>Add to Cart</span></div>
                      </div>
                      <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12">
                        <div className="share">
                          <img src={heart} alt="save icon" aria-label="save product" /> <span>Save</span>
                          <img src={share2} alt="share icon" aria-label="share product " /> <span>Share</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12 ">
                  <div className=" description ">

                    <h1>{selectedProduct.title}</h1>
                    <h3>Description</h3>
                    <p>{selectedProduct.description}</p>
                  </div>
                  <div className="max-header">

                  </div>

                </div>

              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2>
              ......Product is Loading
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;


