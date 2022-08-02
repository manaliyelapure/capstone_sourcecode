import React from 'react';
import { NavLink } from 'react-router-dom';
import edit2 from '../Assets/edit-2.svg';
import helpcircle from '../Assets/help-circle.svg';
import { useState } from "react";
import '../Sass/style.css';


function PaymentCheck() {
    const [carddata, setCarddata] = useState(true);
    const [editcarddata, setEditCarddata] = useState(false);
    const [paydata, setPayData] = useState({
        Cname: "",
        cardno: "",
        expdate: "",
        cvv: "",
    })


    const Handalcard = () => {
        setCarddata(!carddata);
        setEditCarddata(!editcarddata);
        localStorage.setItem("paydatainfo",JSON.stringify(paydata));
    }
    const EditHandalcard = () => {
        setCarddata(!carddata);
        setEditCarddata(!editcarddata);
    }
    const paymentData = (a) => {
        const name = a.target.name;
        const value = a.target.value;
        console.log(paydata);
        setPayData({ ...paydata, [name]: value })

    }
    return (
        <section className='container'>

           
            <div className='aem-Grid aem-Grid--12 '>
            {carddata && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn payment-method pr-32">
                        <h2 className='pay-info'>3. Payment Information</h2>
                        <div className="aem-Grid aem-Grid--12 card-details">
                            <input type="radio" id="card" name="card" value="card" className='R-label'/>
                            <label  htmlFor="card" className='label-i'>Credit Card</label><br />
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn ">
                            <div className='card-in'>
                            <label htmlFor="Cname">Name on Card</label><br />
                                <input type="text" value={paydata.Cname}
                                    onChange={paymentData}
                                    name="Cname" id="Cname" placeholder="" /><br />
                                <label htmlFor="cardno">Credit Card Number</label><br />
                                <input type="text" value={paydata.cardno}
                                    onChange={paymentData}
                                    name="cardno" id="cardno" placeholder="" />
                                <div className="aem-Grid aem-Grid--12 date-cvv">
                                    <div className='aem-GridColumn aem-GridColumn--default--7 demo-GridColumn'>
                                        <label htmlFor="expdate">Expiration Date</label><br />
                                        <input type="text" value={paydata.expdate}
                                            onChange={paymentData}
                                            name="expdate" id="expdate" placeholder="" />
                                    </div>
                                    <div className=" aem-GridColumn aem-GridColumn--default--4 demo-GridColumn cvv">
                                        <label htmlFor="cvv">CVV</label><br />
                                        <input type="text" value={paydata.cvv}
                                            onChange={paymentData}
                                            name="cvv" id="cvv" placeholder="" />
                                    </div>

                                    <div className=" aem-GridColumn aem-GridColumn--default--1 demo-GridColumn cvv">
                                    <img src={helpcircle} alt="helpcircle" />
                                    </div>
                                </div>
                            </div>
                            
                               <div className='radio-c'>
                               <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                               <label for="vehicle1">Billing address same as shipping address</label>
                               </div>
                           <div className='radio-c'>
                           <hr />
                            <input type="radio" id="PayPal" name="PayPal" value="PayPal"  />
                            <label htmlFor="PayPal">PayPal</label>
                            <hr />
                           </div>
                            


                            </div>
                            
                        </div>
                        <br />
                        <div className='aem-GridColumn aem-GridColumn--default--12 demo-GridColumn' >
                        <button className="continue" onClick={Handalcard}>CONTINUE TO SHIPPING METHOD</button>
                        </div>
                        
                    </div>}
                
                    {editcarddata && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn shiping-info pr-32">
                        <div className="aem-Grid aem-Grid--12 demo-Grid ">
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn">
                                <h6>Payment Information</h6>
                                <p>Credit Card</p>
                                <p>Visa ending in {paydata.expdate} </p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn edit-button">
                                <button onClick={EditHandalcard}><img src={edit2} alt="pencile" />Edit</button>
                            </div>
                        </div>
                    </div>}

              {/* <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn pr-32">
              <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn">
                                <h6>Payment Information</h6>
                                <p>Credit Card</p>
                                <p>Visa ending in {paydata.expdate} </p>
                                <button onClick={EditHandalcard}><img src={edit2} alt="pencile" /> Edit</button>
                            </div>
              </div> */}
              </div>


           

        </section>
    )
}

export default PaymentCheck;