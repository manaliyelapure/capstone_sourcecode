import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import edit2 from '../Assets/edit-2.svg';

function GuestCheck() {

    const [redio, setRedio] = useState();
    const [shiping, setShiping] = useState(true);
    const [editshiping, setEditShiping] = useState(false);
    const Rediohandal = () => {
        setShiping(!shiping);
        setEditShiping(!editshiping);
        localStorage.setItem("redioinfo", JSON.stringify(redio));
    }

    const EditRediohandal = () => {
        setShiping(!shiping);
        setEditShiping(!editshiping);
    }
    return (
        <section className='container'>

            <div className='aem-Grid aem-Grid--12 '>

                <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn pr-32">


                    {shiping &&
                        <div className='aem-Grid aem-Grid--12 ship-method'>
                            <h4>2. Shipping Method</h4>
                            <div className='aem-GridColumn aem-GridColumn--default--6 demo-GridColumn radio-btn'>
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


                    {editshiping &&
                        <div className='aem-Grid aem-Grid--12 ship-show'>
                        <div className='aem-GridColumn aem-GridColumn--default--8 demo-GridColumn'>
                        <p>{redio}</p>
                         </div>
                            
                            <div className='aem-GridColumn aem-GridColumn--default--4 demo-GridColumn e-button'>
                            <button onClick={EditRediohandal}><img src={edit2} />Edit</button>
                            </div>
                           
                        </div>}


                </div>






            </div>


        </section>
    )
}

export default GuestCheck;