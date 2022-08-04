import React from 'react';
import instagram from '../../Assets/instagram.svg';
import facebook from '../../Assets/facebook.svg';
import twitter from '../../Assets/twitter.svg'
import VENIA2 from '../../Assets/VENIA2.png';

function Footer() {
    return (
        <footer>
            <div className='demo-GridRowExample-markup'>
                <div className='aem-Grid aem-Grid--default--12 aem-Grid--tablet--6 aem-Grid--phone--1 demo-Grid footer-first'>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                        <h4>Account</h4>
                        <ul>
                        <li><a href='#' aria-label='go to sign in'></a>Sign In</li>
                         <li><a href='#' aria-label='click on register'> </a>Register</li>
                         <li><a href='#' aria-label='check order status' ></a>Order Status</li>  
                        </ul>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                        <h4>About Us</h4>
                        <ul>
                        <li><a href='#' aria-label='check details'> </a>Our Story</li>
                        <li> <a href='#'aria-label='careers'></a>Careers</li>
                        </ul> 
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                        <h4>Help</h4>
                        <ul>
                         <li><a href='#'aria-label='contact us'></a>Contact Us</li>  
                         <li><a href='#'aria-label='check order status'></a>Order Status</li> 
                         <li><a href='#'aria-label='returns'> </a>Returns</li>
                        </ul>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--1 demo-GridColumn demo-GridColumn--image'>
                        <h4>Follow Us!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <div className='img-logo'>
                        <ul>
                           <li><img src={instagram} alt="instagram-icon"/> <a href='#' aria-label='instagram-logo'></a></li>
                            <li><img src={facebook} alt="facebook-icon"/><a href='#' aria-label='facebook-logo'></a></li>
                            <li><img src={twitter} alt="twitter-icon"/><a href='#' aria-label='twitter-logo'> </a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <hr />
              
                    <div className='footer-last'>

                        <img src={VENIA2}  alt="venia-logo"/>


                        <p>© Company Name Address Ave, City Name, State ZIP</p>

                        <div className='footer-bottom'>
                            <a href='#' aria-label='see terms of use'>Terms of Use</a>
                            <a href='#' aria-label='check privacy policy'>Privacy Policy</a>
                        </div>
                    </div>
               

            </div>
        </footer>
    );

}

export default Footer; 