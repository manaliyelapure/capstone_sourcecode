import React, {useState} from 'react';
import edit2 from '../Assets/edit-2.svg';
import checksquare from '../Assets/check-square.svg';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import helpcircle from '../Assets/help-circle.svg';


function CheckHome() {

  const [inputdata, setInputData] = useState({
    Email: "",
    Phone: "",
    Country: "",
    FName: "",
    LName: "",
    Address: "",
    Address2: "",
    City: "",
    State: "",
    ZIP: "",

});

const [show, setShow] = useState(true);
const [showdiv, setShowDiv] = useState(false);
const [show1div, setShow1div] = useState(false);

   const handlechange = () => {
        setShow(!show);
        setShowDiv(!showdiv);
        setShow1div(!show1div);
        localStorage.setItem("inputdatainfo", JSON.stringify(inputdata));
    }
const userData = (a) => {
  const name = a.target.name;
  const value = a.target.value;
  console.log(inputdata);
  setInputData({ ...inputdata, [name]: value })
}
const Getresiodata = (x) => {
  setRedio(x.target.value);
}
const [redio, setRedio] = useState("");
   
const [show2div, setShow2div] = useState(false);
const [shiping, setShiping] = useState(true);
const [editshiping, setEditShiping] = useState(false);
const Rediohandal = () => {
  setShiping(!shiping);
  setEditShiping(!editshiping);
  setShow2div(!show2div);
  localStorage.setItem("redioinfo", JSON.stringify(redio));
}
const paymentData = (a) => {
  const name = a.target.name;
  const value = a.target.value;
  console.log(paydata);
  setPayData({ ...paydata, [name]: value })

}

const [paydata, setPayData] = useState({
  Cname: "",
  cardno: "",
  expdate: "",
  cvv: "",
})

const Handalcard = () => {
  setCarddata(!carddata);
  setEditCarddata(!editcarddata);
  setShow3div(!show3div);
  localStorage.setItem("paydatainfo", JSON.stringify(paydata));
}
const shoppingbagitem = useSelector((Value) => Value.handlecartSlice.items);
const [carddata, setCarddata] = useState(true);
const [editcarddata, setEditCarddata] = useState(false);
const [show3div, setShow3div] = useState(false);

  return (
   
    <div className='container'>
       <div className='aem-Grid aem-Grid--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid checkout '>
       <div className="aem-Grid aem-Grid--12 check-Out">
                <h1>Checkout</h1>
                <div className="bottom-line"></div>
        </div>
      
       
       <h2 className='G-check'>Guest Checkout</h2>
      <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn demo-GridColumn--image'>
       <div className="1ts-div">
                        {show && <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn shiping-address pr-32">
                            <h3>Contact information</h3>
                            <p>We’ll use these details to keep you informed on your delivery.</p>
                            <div className="aem-Grid aem-Grid--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--1 demo-Grid ">
                                <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid">
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image contact ">
                                        <label htmlFor="Email">Email</label><br />
                                        <input type="text" value={inputdata.Email}
                                            onChange={userData}
                                            name="Email" id="Email" placeholder="abc@xyz.com" required />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image contact">
                                        <label htmlFor="Phone">Phone Number</label><br />
                                        <input type="text" value={inputdata.Phone}
                                            onChange={userData}
                                            name="Phone" id="Phone" placeholder="(222) 222-2222" required />
                                    </div>
                                </div>
                                <div></div>
                                <h4>1. Shipping Information</h4>
                                <div className="aem-Grid aem-Grid--12  aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--1 demo-Grid demo-Grid shiping-input">
                                    <label htmlFor="Country">Country</label><br />
                                    <input type="text" value={inputdata.Country}
                                        onChange={userData}
                                        name="Country" id="Country" placeholder="United States" />
                                </div>
                                <br />
                                <div className="aem-Grid aem-Grid--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-Grid">
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12  demo-GridColumn contact">
                                        <label htmlFor="FName">First Name</label><br />
                                        <input type="text" value={inputdata.FName}
                                            onChange={userData}
                                            name="FName" id="FName" placeholder="" />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn contact">
                                        <label htmlFor="LName">Last Name</label><br />
                                        <input type="text" value={inputdata.LName}
                                            onChange={userData}
                                            name="LName" id="LName" placeholder="" />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn contact">
                                        <label htmlFor="Address">Street Address</label><br />
                                        <input type="text" value={inputdata.Address}
                                            onChange={userData}
                                            name="Address" id="Address" placeholder="" />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn contact">
                                        <label htmlFor="Address2">Street Address 2</label><br />
                                        <input type="text" value={inputdata.Address2}
                                            onChange={userData}
                                            name="Address2" id="Address2" placeholder="" />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn contact">
                                        <label htmlFor="City">City</label><br />
                                        <input type="text" value={inputdata.City}
                                            onChange={userData}
                                            name="City" id="City" placeholder="Altadena" required/>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn state-input">
                                        <div className="aem-Grid aem-Grid--12 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-Gridd">
                                            <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn pr-32">
                                                <label htmlFor="State">State</label><br />
                                                <input type="text" value={inputdata.State}
                                                    onChange={userData}
                                                    name="State" id="State" placeholder="California" />
                                            </div>
                                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn zip-input">
                                                <label htmlFor="ZIP">ZIP</label><br />
                                                <input type="text" value={inputdata.ZIP}
                                                    onChange={userData}
                                                    name="ZIP" id="ZIP" placeholder="91001" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="dekstop-button"><button className="continue" onClick={handlechange}>CONTINUE TO SHIPPING METHOD</button></div>
                            <div className="mobile-button"><button className="continue-mobile-button" onClick={handlechange}>CONTINUE</button></div>
                        </div>}
                        {showdiv && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn shiping-address pr-32">
                            <div className="aem-Grid aem-Grid--12 demo-Grid shiping-info">
                                <div className="aem-Grid aem-Grid--12 demo-Grid shipng-address-data">
                                    <h6>Shipping Information</h6>
                                    <div className="edit-button">
                                        <button onClick={handlechange}><img src={edit2} alt="pencile" /> Edit</button>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-Grid--default--4 aem-Grid--tablet--6 aem-Grid--phone--12 demo-Grid">
                                    <p>{inputdata.Email}</p>
                                    <p>{inputdata.Phone}</p>
                                </div>
                                <div className="aem-Grid aem-Grid--default--8 aem-Grid--tablet--6 aem-Grid--phone--12 demo-Grid ">
                                  
                                    <span><p>{inputdata.FName} {inputdata.LName}</p></span>
                                    <span><p>{inputdata.Address} {inputdata.Address2}</p></span>
                                    <span><p>{inputdata.City} {inputdata.ZIP}</p></span>
                                    <span><p>{inputdata.State}</p></span>
                                </div>
                            </div>
                        </div>
                        }
              </div>

              {show1div && <div className="2nd-div">
                    

                        {shiping &&
                        <div className='aem-Grid aem-Grid--12 ship-method'>
                            <h4>2. Shipping Method</h4>
                            <div className='aem-GridColumn aem-GridColumn--default--8 demo-GridColumn aem-GridColumn--tablet--6 aem-GridColumn--phone--12 radio-btn'>
                                <input type="radio" id="html" name="fav_language" value="Standard Shipping (4-8 business days via USPS) FREE" onChange={e => setRedio(e.target.value)} />
                                <label for="html">Standard Shipping (4-8 business days via USPS) FREE</label><br />
                                <input type="radio" id="html" name="fav_language" value="Express Delivery (2-5 business days via USPS) $17.95" onChange={e => setRedio(e.target.value)} />
                                <label for="html">Express Delivery (2-5 business days via USPS) $17.95</label><br />
                                <input type="radio" id="html" name="fav_language" value="Next Day Delivery (Next business days via FedEx) $53.61" onChange={e => setRedio(e.target.value)} />
                                <label for="html">Next Day Delivery (Next business days via FedEx) $53.61</label><br />
                            </div>
                            <div className='aem-GridColumn aem-GridColumn--default--12 demo-GridColumn'>
                                <button className='payment-btn' onClick={Rediohandal}>CONTINUE TO PAYMENT</button>
                            </div>
                        </div>}
                        {editshiping && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn pr-32">
                            <div className="aem-Grid aem-Grid--12 demo-Grid shiping-info">
                                <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--tablet--6 aem-GridColumn--phone--12  demo-GridColumn">
                                    <h6>Shipping Method</h6>
                                    <p>{redio}</p>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn edit-button">
                                    <button onClick={Rediohandal}><img src={edit2} alt="pencile" /> Edit</button>
                                </div>
                            </div>
                        </div>}
                        
                    </div>}

                    {show2div && <div className="3rd div">
                        {carddata && <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn payment-method pr-32">
                            <h2>3. Payment Information</h2>
                            <div className="card-details">
                                <input type="radio" id="card" name="card" value="card" />
                                <label htmlFor="card">Credit Card</label><br />
                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 demo-GridColumn card-info">
                                    <label htmlFor="Cname">Name on Card</label><br />
                                    <input type="text" value={paydata.Cname}
                                        onChange={paymentData}
                                        name="Cname" id="Cname" placeholder="" /><br />
                                    <label htmlFor="cardno">Credit Card Number</label><br />
                                    <input type="text" value={paydata.cardno}
                                        onChange={paymentData}
                                        name="cardno" id="cardno" placeholder="" />
                                    <div className="date-cvv">
                                        <div>
                                            <label htmlFor="expdate">Expiration Date</label><br />
                                            <input type="text" value={paydata.expdate}
                                                onChange={paymentData}
                                                name="expdate" id="expdate" placeholder="" className='expdate'/>
                                        </div>
                                        <div>
                                            <label htmlFor="cvv">CVV</label><br />
                                            <input type="text" value={paydata.cvv}
                                                onChange={paymentData}
                                                name="cvv" id="cvv" placeholder="" className='paycvvdata maininput' />
                                        </div>
                                        <div className='help-circle'>
                                       <img src={helpcircle} alt="helpcircle" />
                                    </div>
                                    </div>
                                </div>
                                <br />
                                <p> <img src={checksquare} alt="square box"  className='checksq'/>Billing address same as shipping address</p>
                                <hr />
                                <input type="radio" id="PayPal" name="PayPal" value="PayPal" className='radio-p' />
                                <label htmlFor="PayPal" className='pay-label'>PayPal</label><br />
                                <hr />
                            </div>
                            <br />
                            <div className="dekstop-button"><button className="continue" onClick={Handalcard}>CONTINUE TO SHIPPING METHOD</button></div>
                            <div className="mobile-button"><button className="continue-mobile-button" onClick={Handalcard}>CONTINUE</button></div>
                        </div>}


                      
                        {editcarddata && <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn pr-32">
                            <div className="aem-Grid aem-Grid--12 demo-Grid shiping-info">
                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn">
                                    <h6>Payment Information</h6>
                                    <p>Credit Card</p>
                                    <p>Visa ending in {paydata.expdate} </p>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn edit-button">
                                    <button onClick={Handalcard}><img src={edit2} alt="pencile" /> Edit</button>
                                </div>
                            </div>
                        </div>}
                      </div>
                      }



                      {show3div && <div className="4rth div">
                        {<div className="aem-Grid aem-Grid--default--8 demo-Grid pr-32">
                            <div className="aem-Grid aem-Grid--12 demo-Grid orderd-product">
                            {shoppingbagitem.map((val) => {
                                        return (
                                            <>

                                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12   demo-GridColumn demo-GridColumn--separator ">
                                                    <div className="aem-Grid aem-Grid--12 demo-Grid o-place ">
                                                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--3 aem-GridColumn--phone--4 demo-GridColumn demo-GridColumn--separator ">
                                                            <img src={val.image} className="productimage" />

                                                        </div>
                                                        <div className=" aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--9 aem-GridColumn--phone--7 demo-GridColumn demo-GridColumn--separatorpy-1 prod-title">
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
                            <br />
                            <div className='aem-GridColumn aem-GridColumn--default--12 demo-GridColumn'>
                      <NavLink to="/Order"><button className='order-btn'>PLACE ORDER</button></NavLink>  
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--12 demo-GridColumn c-terms'>
                        <p>By clicking confirm order you agree to our<span>Terms and Conditions</span> </p>
                    </div>
                   
                        </div>}</div>}
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn">
                    {show && <div className=" aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 demo-GridColumn sign-in">
                        <h3>Sign in for Express <br /> Checkout</h3>
                        <button>SIGN IN</button>
                    </div>}
                    <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--1' >
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








       </div>
    </div>
  )
}

export default CheckHome