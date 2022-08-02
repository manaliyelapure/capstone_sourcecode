
import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import edit2 from '../Assets/edit-2.svg';

function CheckOut() {
    const [show, setShow] = useState(true);
    const [showdiv, setShowDiv] = useState(false);
    const [inputdata, setInputData] = useState({
        Email: "",
        number: "",
        FirstName: "",
        LastName: "",
        StreetAddress: "",
        StreetAddress2: "",
        City: "",
        zip: "",

    });
    const userData = (a) => {
        const name = a.target.name;
        const value = a.target.value;
        console.log(inputdata);
        setInputData({ ...inputdata, [name]: value })
    }

    const [redio, setRedio] = useState();

    const Getresiodata = (x) => {
        setRedio(x.target.value);
    }
    
    const handlechange = () => {
        setShow(!show);
        setShowDiv(!showdiv);
        localStorage.setItem("inputdatainfo",JSON.stringify(inputdata));
    }
    const editdata = () => {
        setShow(!show);
        setShowDiv(!showdiv);
    }
    
    const [carddata, setCarddata] = useState(true);
    const [editcarddata, setEditCarddata] = useState(false);
    const Handalcard = () => {
        setCarddata(!carddata);
        setEditCarddata(!editcarddata);
        localStorage.setItem("paydatainfo",JSON.stringify(paydata));
    }
    const EditHandalcard = () => {
        setCarddata(!carddata);
        setEditCarddata(!editcarddata);
    }

   
    const [paydata, setPayData] = useState({
        Cname: "",
        cardno: "",
        expdate: "",
        cvv: "",
    })







    return (
        <form className='container'>
            <div className="aem-Grid aem-Grid--12 check-Out">
                <h1>Checkout</h1>
                <div className="bottom-line"></div>
            </div>
            <div className="aem-Grid aem-Grid--12">
               { show &&
                <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 pr-32'>
                    <div className='aem-Grid aem-Grid--12 Guest-check'>
                        <h2>Guest Checkout</h2>
                        <h4>Contact information</h4>
                        <p>We’ll use these details to keep you informed on your delivery.</p>
                    </div>
                    <div className='aem-Grid aem-Grid--12 contact-info'>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 Email'>
                            <label for="Email">Email</label><br />
                            <input type="text" id="Email" name="Email" value={inputdata.Email} onChange={userData} />
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 number'>
                            <label for="number">Phone Number</label><br />
                            <input type="text" id="number" name="number" value={inputdata.number} onChange={userData} />
                        </div>
                    </div>
                    <div className='aem-Grid aem-Grid--12 ship'>
                        <h4>1. Shipping Information</h4>
                    </div>
                    <div className='aem-Grid aem-Grid--12 contact-info'>

                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 country-code'>
                            <label for="Country">Country</label><br />
                            <select className="state-select" aria-label="selectcountry">
                                <option value="DEFAULT">United States</option>
                                <option value="India">India</option>
                                <option value="India">China</option>
                            </select>
                        </div>
                    </div>
                    <div className='aem-Grid aem-Grid--12 contact-info'>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 Email'>
                            <label for="FirstName" className='label-form'>First Name</label><br />
                            <input type="text" id="FirstName" name="FirstName" value={inputdata.FirstName} onChange={userData} />
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 number'>
                            <label for="LastName" className='label-form'>Last Name</label><br />
                            <input type="text" id="LastName" name="LastName" value={inputdata.LastName} onChange={userData} />
                        </div>
                    </div>
                    <div className='aem-Grid aem-Grid--12 contact-info'>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 Email'>
                            <label for="StreetAddress" className='label-form'>Street Address</label><br />
                            <input type="text" id="StreetAddress" name="StreetAddress" value={inputdata.StreetAddress} onChange={userData} />
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 number'>
                            <label for="StreetAddress2" className='label-form'>Street Address 2</label><br />
                            <input type="text" id="StreetAddress2" name="StreetAddress2" value={inputdata.StreetAddress2} onChange={userData} />
                        </div>
                    </div>


                    <div className="aem-Grid aem-Grid--12 contact-info">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 city">
                            <label for="City" className='label-form'>City</label><br />
                            <input type="text" id="City" name="City" value={inputdata.City} onChange={userData} />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 state">
                            <label className='label-form'>State<br />
                                <select className="state-select" aria-label="selectstate" >
                                    <option value="DEFAULT">California</option>
                                    <option value="India">Maharastra</option>
                                    <option value="India">Gujrat</option>
                                </select>
                            </label>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12 zip-code">
                            <label for="zip" className='label-form'>ZIP</label><br />
                            <input type="text" id="zip" placeholder="91001" className='zip' value={inputdata.zip} onChange={userData} />
                        </div>
                    </div>

                    
                    <div className='continue-btn'>
                        <button className='contact-btn' onClick={handlechange}>CONTINUE TO SHIPPING METHOD</button>
                    </div>
                </div>

                }
                
                {showdiv &&
                    <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn shiping-i pr-32">
                        <div className="aem-Grid aem-Grid--12 demo-Grid ">
                            <div className="aem-GridColumn aem-GridColumn--default--4 demo-GridColumn">
                                <h6>Shipping Information</h6>
                                <p>{inputdata.Email}</p>
                                <p>{inputdata.number}</p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 demo-GridColumn ">
                               
                                <span><p>{inputdata.FirstName} {inputdata.LastName}</p></span>
                                <span><p>{inputdata.StreetAddress} {inputdata.StreetAddress2}</p></span>
                                <span><p>{inputdata.City} {inputdata.zip}</p></span>
                                
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 demo-GridColumn edit-button">
                                <button onClick={editdata}><img src={edit2} alt="pencile" /> Edit</button>
                            </div>
                        </div>
                    </div>}
                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12'>

                    <div className='aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 sign-in'>
                        <h4>Sign in for Express <br />Checkout</h4>
                        <button>SIGN IN</button>
                    </div>

                    <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12' >
                        <div className='prod-price'>
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
                                        <li>$ 388.00</li>
                                        <li>- $ 77.60</li>
                                        <li>- $ 100.00</li>
                                        <li>$ 23.28</li>
                                        <li>FREE</li>
                                        <h3>$ 233.68 </h3>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='aem-Grid aem-Grid--12'>
                    <div className='aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--8' >

                        <button class="accordion">2. Shipping Method </button>
                        <div className="panel aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 " >
                            <p>Lorem ipsum...</p>
                        </div>

                        <button class="accordion">3. Payment Information</button>
                        <div className="panel aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 ">
                            <p>Lorem ipsum...</p>
                        </div>


                    </div>
                </div> */}
            </div>

        </form>
    )
}

export default CheckOut