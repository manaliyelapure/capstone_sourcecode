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
                        <div className="aem-GridColumn aem-GridColumn--default--3">
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

                        {/* <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--7 single-img">
                          <SimpleImageSlider
                            width={552}
                            height={680}
                            images={images}
                            showBullets={true}
                            showNavs={false}
                          />
                        </div> */}
              <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 single-img">
                <div className="ProdImgDiv">
                  <SimpleImageSlider

                    width={450}
                    height={500}
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
