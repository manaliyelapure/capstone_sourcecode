import React from 'react';
import bannersec from '../Assets/banner-sec.png';
import maxwidthheader from '../Assets/max-width_header.svg';
import bannersec2 from '../Assets/bannersec2.png';

function Bannersec() {
  return (
    <section className='container'>
 

    <div className="aem-Grid aem-Grid--default--12 demo-Grid banner3-main">
                <div className="banner3-box">
                    <h3>Take off in the new <br/> Signature Legging</h3>
                    <p className="p1">Lorem Ipsum Dolor Tempor</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                    <div className="baneer3-button">
                    <button className="SHOP-COLLECTION">SHOP COLLECTION</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="SHOP-NOW">SHOP NOW</button>
                    {/* <div className='max-header'>
          
          <img src={maxwidthheader}/>
          </div> */}
                    </div>
                </div>
                <div className="hero2-image">
                    <img src={bannersec2} alt="here is hero image 2" />
                </div>
            </div>
    </section>
  )
}

export default Bannersec