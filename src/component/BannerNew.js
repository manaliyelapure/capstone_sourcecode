import React from 'react';
import { NavLink } from 'react-router-dom';
import bannerthird from '../Assets/banner-third.png';
import chevronleft from '../Assets/chevron-left.svg';
import bannerf from '../Assets/banner-f.png';
import dot1 from '../Assets/dot1.svg';

function BannerNew() {
  return (
    <section>
 




      <div className="shop-menu">
                <div className="frist-banner">
                <div className="arrow-left"><img src={chevronleft}/></div>
                <div className="home-banner">
                    <h1>Shop the new <br /> Signature Collection</h1>
                    <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis <br /> aliquam faucibus purus.</p>
                    <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <NavLink to="/Cart"><button className='shop-btn'>SHOP NOW</button></NavLink>
                    </div>
              
                </div>
                <div className="banner1-image">
                <img src={bannerf} alt="fashion image" />
               
            </div>  
        </div>
    </section>
  )
}

export default BannerNew;