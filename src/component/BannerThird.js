import React from 'react';
import bannerfirst from '../Assets/banner-first.png';
import mappin from '../Assets/map-pin.svg';

function BannerThird() {
  return (
    <React.Fragment>
    <section>
      <div className='banner1 container'>
      <img src={bannerfirst} alt="banner-image" aria-label='banner-img'/>
        
        <span className='banner1-left'>
          <h1>Conquer your  <br/> <span>next adventure</span></h1>
          <p>Lorem Ipsum Dolor Tempor</p>
          <button className='shop-D'>SHOP DEVICES</button>
          <div className='banner1-bottom'>
               
          </div>
         <img src={mappin}/>
        </span>

      </div>
    </section>
  </React.Fragment>
  )
}

export default BannerThird;