import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import instagramw from '../Assets/instagram -w.svg';
import facebookw from '../Assets/facebook -w.svg';
import twitterw from '../Assets/twitter - w.svg';

function Order() {

    const [items, setItems] = useState([]);
    const [rediolocaldata, setRediolocaldata] = useState([]);
    const [cardlocaldata, setCardlocaldata] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('inputdatainfo'));
        const rediolocaldata = JSON.parse(localStorage.getItem('redioinfo'));
        const cardlocaldata = JSON.parse(localStorage.getItem('paydatainfo'));
        if (items, rediolocaldata, cardlocaldata) {
            setItems(items);
            setRediolocaldata(rediolocaldata);
            setCardlocaldata(cardlocaldata);
        }
    }, []);


    const shoppingbagitem = useSelector((Value) => Value.handlecartSlice.items);
    return (
        <section className='container'>
            <div className="aem-Grid aem-Grid--12 check-Out">
                <h1>Order Successful!</h1>
                <div className="bottom-line"></div>
            </div>

            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn s-order pr-32 ">
                    <div className="aem-Grid aem-Grid--12 order-no">
                        <p>Order Number #1700834</p>
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn">
                            <h5>Shipping Information</h5>
                            <p>{items.Email}<br/>
                            {items.number}</p>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn">
                            <h5>Shipping Method</h5>
                            <p>{rediolocaldata}</p>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn">
                            <h5>Shipping Information</h5>
                            <p>{items.StreetAddress} {items.StreetAddress2}</p>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn">
                            <h5>Payment Information</h5>
                            <p>Credit Card</p>
                            <p>Visa ending in {cardlocaldata.expdate} </p>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12 shopitems">
                        {shoppingbagitem.map((val) => {
                            return (
                                <>

                                    <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn demo-GridColumn--separator">
                                        <div className="aem-Grid aem-Grid--12 demo-Grid">
                                            <div className="aem-GridColumn aem-GridColumn--default--3 demo-GridColumn demo-GridColumn--separator shopping-img ">
                                                <img src={val.image} className="productimage" />

                                            </div>
                                            <div className=" aem-GridColumn aem-GridColumn--default--9 demo-GridColumn demo-GridColumn--separatorpy-1 shoping-detail">
                                                <h4>{val.title}</h4>
                                                <p>Size : Medium</p>
                                                <p>Color : Storm</p>
                                                <p>${val.price}</p>
                                            </div>

                                        </div>
                                    </div>


                                </>

                            );
                        })}
                    </div>

                    <div className="aem-Grid aem-Grid--12 demo-Grid order-p">
                        <p>You will also receive an email with the details and we will let you know when your order has shipped.</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore <br />
                            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call<br />
                            Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                    </div>



                </div>

                <div className="aem-GridColumn aem-GridColumn--default--4 demo-GridColumn follow">
                    <h2>Give us a follow <br />to SAVE 20% <br /> on your next order.</h2>
                    <div>
                    <img src={instagramw} alt='instagram-logo'/>
                    <img src={facebookw} alt='facebook-logo'/>
                    <img src={twitterw} alt='twitter-logo'/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Order