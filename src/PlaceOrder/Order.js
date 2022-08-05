
import { useSelector } from "react-redux";
import React, {useEffect, useState} from 'react';import instagramw from '../Assets/instagram -w.svg';
import facebookw from '../Assets/facebook -w.svg';
import twitterw from '../Assets/twitter - w.svg';
import maxHeader from '../Assets/max-width_header.svg';


function Order() {
    const cartTotalQuantity = useSelector(state => state.handlecartSlice.cartTotalQuantity);
    const shoppingbagitem = useSelector((Value) => Value.handlecartSlice.items);
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
  return (
    <section className="container">
         <div className='aem-Grid aem-Grid--12 demo-Grid order-page'>
     <div className="aem-Grid aem-Grid--12 check-Out">
                <h1>Order Successful!</h1>
                <div className="bottom-line"></div>
    </div>
     

     <div className="aem-GridColumn aem-GridColumn--default--8  aem-GridColumn--tablet--8 aem-GridColumn--phone--12 demo-GridColumn s-order pr-32  demo-GridColumn--separator">
                    <h2>Order Number #1700834</h2>
                    

                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn  aem-GridColumn--tablet--8 aem-GridColumn--phone--12  aem-GridColumn--default--6 demo-GridColumn">
                        <h4>Shipping Information</h4>
                            <p>{items.Email}</p>
                            <p>{items.Phone}</p>
                            
                        </div>
                       
                        <div className="aem-GridColumn  aem-GridColumn--tablet--8 aem-GridColumn--phone--12  aem-GridColumn--default--6 demo-GridColumn">
                            <h4>Shipping Method</h4>
                            <p></p>
                            <p>{rediolocaldata}</p>

                        </div>
                      
                    </div>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn  aem-GridColumn--tablet--8 aem-GridColumn--phone--12  aem-GridColumn--default--6 demo-GridColumn">
                        <span><p>{items.FName} {items.LName}</p></span>
                            <span><p>{items.Address} {items.Address2}</p></span>
                            <span><p>{items.City} {items.ZIP}</p></span>
                            <span><p>{items.State}</p></span>
                        </div>
                        <div className="aem-GridColumn  aem-GridColumn--tablet--8 aem-GridColumn--phone--12  aem-GridColumn--default--6 demo-GridColumn">
                            <h4>Payment Information</h4>
                            <p>Credit Card</p>
                            <p>Visa ending in {cardlocaldata.expdate} </p>
                        </div>
                    </div>

<div className="aem-Grid aem-Grid--12 demo-Grid shopitems">
                    <p className='infoHeading'>{cartTotalQuantity} items in your order</p>
                    {shoppingbagitem.map((val) => {
                                        return (
                                            <>

                                                <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--tablet--8 aem-GridColumn--phone--12  demo-GridColumn demo-GridColumn--separator">
                                                    <div className="aem-Grid aem-Grid--12 demo-Grid">
                                                        <div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--tablet--4 aem-GridColumn--phone--4  demo-GridColumn demo-GridColumn--separator shopping-img">
                                                            <img src={val.image} className="productimage" />

                                                        </div>
                                                        <div className=" aem-GridColumn aem-GridColumn--default--7   aem-GridColumn--tablet--7 aem-GridColumn--phone--7 demo-GridColumn demo-GridColumn--separatorpy-1 shoping-detail">
                                                            <h4>{val.title}</h4>
                                                            <p>Size : Medium</p>
                                                            <p>Color : Storm</p>
                                                          
                                                            <p>Quantity: {items.cartQuantity}</p>
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
     


        <div className="aem-GridColumn aem-GridColumn--default--4 demo-GridColumn follow ">
                    <p>Give us a follow <br />to SAVE 20% <br /> on your next order.</p>
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