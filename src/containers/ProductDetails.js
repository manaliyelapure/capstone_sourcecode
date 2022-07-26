import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../redux/cartSlice";
import Slider from "react-slick";
import SimpleImageSlider from "react-simple-image-slider";

import feather from '../Assets/feather.svg';
import layers from '../Assets/layers.svg';
import slack from '../Assets/slack.svg';

import heart from '../Assets/heart.svg';
import share2 from '../Assets/share-2.svg';
import Swatch01 from '../Assets/Swatch 01.png';
import Swatch02 from '../Assets/Swatch 02.png';
import Swatch03 from '../Assets/Swatch 03.png';
import Swatch04 from '../Assets/Swatch 04.png';
import wind from '../Assets/wind.svg';

const ProductDetails = (props) => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState({});


  const dispatch = useDispatch();
  const addProduct = (product) => {

    dispatch(productsActions.addProdToCart({ ...product, quntity: 1 }));

  }



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

  const images = [
    { url: selectedProduct.image },
    { url: selectedProduct.image },
    { url: selectedProduct.image },
    { url: selectedProduct.image },
    { url: selectedProduct.image }

  ];
  return (
    <section>
      <div className="aem-Grid aem-Grid--12">
        {selectedProduct.title ? (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider"></div>
              <div className=" middle aligned row">
                <div className="aem-Grid aem-Grid--12">
                  <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--6">
                    <div className="column-lp">
                      <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--4">
                          <div className="aem-Grid aem-Grid--12 col-lp">
                            <img className="ui-fluid-image" src={selectedProduct.image} alt="products" />
                          </div>
                          <div className="aem-Grid aem-Grid--12 col-lp">
                            <img className="ui-fluid-image" src={selectedProduct.image} alt="products" />
                          </div>
                          <div className="aem-Grid aem-Grid--12 col-lp">
                            <img className="ui-fluid-image" src={selectedProduct.image} alt="products" />
                          </div>
                          <div className="aem-Grid aem-Grid--12 col-lp">
                            <img className="ui-fluid-image" src={selectedProduct.image} alt="products" />
                          </div>
                          <div className="aem-Grid aem-Grid--12 col-lp">
                            <img className="ui-fluid-image" src={selectedProduct.image} alt="products" />
                          </div>

                        </div>


                        {/* <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--7">
                          <img className="ui-fluid-image" src={selectedProduct.image} alt="products" />

                        </div> */}

                        <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--7">
                          <SimpleImageSlider
                            width={600}
                            height={750}
                            images={images}
                            showBullets={true}
                            showNavs={true}
                          />
                        </div>


                      </div>

                    </div>
                  </div>



                  <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--5">
                    <div className="column-rp">
                      <h5>Clothing / Women’s / Outerwear</h5>
                      <h1>{selectedProduct.title}</h1>
                      <h2>
                        <a className="ui teal tag label">${selectedProduct.price}</a>
                      </h2>
                      <h3 className="ui brown block header">{selectedProduct.category}</h3>
                      <p>{selectedProduct.description}</p>
                      <hr />
                      <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12 row-data">

                        <Rating />
                      </div>
                      <div className="size">
                        <h2>color</h2>
                        <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12 row-data">

                          <span><img src={Swatch01} alt='blue-button' className="blue" aria-label="blue-button" /></span>
                          <span><img src={Swatch02} alt='pink-button' className="pink" aria-label="pink-button" /></span>
                          <span><img src={Swatch03} alt='black-button' className="black" aria-label="black-button" /></span>
                          <span><img src={Swatch04} alt='grey-button' className="grey" aria-label="grey-button" /></span>

                        </div>
                      </div>
                      <div className="size">
                        <h2>Size</h2>
                        <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12 datarowsec">

                          <button aria-label="xtra small button">XS</button>&nbsp;
                          <button aria-label="Small button">S</button>&nbsp;
                          <button aria-label="Medium button">M</button>&nbsp;
                          <button aria-label="Large button">L</button>&nbsp;
                          <button aria-label="Xtra large button">XL</button>&nbsp;
                        </div>

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
                <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12  aem-GridColumn--tablet--12">
                  <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--7 description">

                    <h1>{selectedProduct.title}</h1>
                    <h3>Description</h3>
                    <p>{selectedProduct.description}</p>
                  </div>
                  <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--5 details">

                    <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                      <label className="main-details">Details</label>
                      <div className="detailsWrapper ">
                        <div className="firstColumn">
                          <div className="detailsInner">
                            <img src={slack} alt='slack icon' />
                            <p>Sweat-wicking</p>
                          </div>
                          <div className="detailsInner">
                            <img src={feather} alt='feather icon' />
                            <p>Lightweight fabric</p>
                          </div>
                        </div>
                        <div className="secondColumn mx-1">
                          <div className="detailsInner">
                            <img src={wind} alt='wind icon' />
                            <p>Breathable</p>
                          </div>

                          <div className="detailsInner">
                            <img src={layers} alt='layers icon' />
                            <p>69% nylon, 31% lycra</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
