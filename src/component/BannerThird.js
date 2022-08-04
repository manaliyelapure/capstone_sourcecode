import React from 'react';
import bannerfirst from '../Assets/banner-first.png';
import mapPin from '../Assets/map-pin.svg';
import bannerl from '../Assets/banner-L.png';
import maxHeader from '../Assets/max-width_header.svg'

function BannerThird() {
  return (
    <React.Fragment>
    <section>
      <div className='banner1 '>
      <img src={bannerl} alt="banner-image" aria-label='banner-img'/>
        
        <span className='banner1-left'>
          <h1>Conquer your  <br/> <span>next adventure</span></h1>
          <p>Lorem Ipsum Dolor Tempor</p>
          <button className='shop-D'>SHOP DEVICES</button>
          
          <span className='mapiconWrapper'>
            <img src={mapPin} alt="map pin icon" className='mapPinImg' />
            <img src={maxHeader} alt='Horizontal line for styling' className='mapMaxHeaderImg' />
          </span>
        </span>

      </div>

      {/* <div className='footerBanner container'>
        <span className='footerBannerInner'>
          <h2>Conquer your next adventure</h2>
          <p>Lorem Ipsum Dolor Tempor</p>
         <button className='shopDevicesBtn'>SHOP DEVICES</button>
          <span className='mapiconWrapper'>
            <img src={mapPin} alt="map pin icon" className='mapPinImg' />
            <img src={maxHeader} alt='Horizontal line for styling' className='mapMaxHeaderImg' />
          </span>
        </span>
        <img src={bannerl} alt='Man standing near mountain cliff' className='standingMan' />

      </div> */}


    </section>
  </React.Fragment>
  )
}

export default BannerThird;