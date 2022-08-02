import React from 'react';
import edit2 from '../Assets/edit-2.svg';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

function ReviewOrder() {
    const shoppingbagitem = useSelector((Value) => Value.handlecartSlice.items);

    return (
        <section className='container'>
            
            <div className='aem-Grid aem-Grid--12'>
                
                <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn pr-32">
                    
              
                    <div >
                     
                        <div >
                           
                            <div className="aem-GridColumn aem-GridColumn--default--8 demo-GridColumn">
                                <div className='aem-Grid aem-Grid--12 demo-Grid'>
                                    {shoppingbagitem.map((val) => {
                                        return (
                                            <>

                                                <div className="aem-GridColumn aem-GridColumn--default--6 demo-GridColumn demo-GridColumn--separator">
                                                    <div className="aem-Grid aem-Grid--12 demo-Grid">
                                                        <div className="aem-GridColumn aem-GridColumn--default--3 demo-GridColumn demo-GridColumn--separator ">
                                                            <img src={val.image} className="productimage" />

                                                        </div>
                                                        <div className=" aem-GridColumn aem-GridColumn--default--9 demo-GridColumn demo-GridColumn--separatorpy-1 prod-title">
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
                            </div>

                        </div>
                        
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--12 demo-GridColumn'>
                      <NavLink to="/Order"><button className='order-btn'>PLACE ORDER</button></NavLink>  
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--12 demo-GridColumn c-terms'>
                        <p>By clicking confirm order you agree to our<span>Terms and Conditions</span> </p>
                    </div>


                </div>
               
            </div>


        </section>
    )
}

export default ReviewOrder;