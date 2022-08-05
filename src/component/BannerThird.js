import React from 'react';
import bannerfirst from '../Assets/banner-first.png';
import mapPin from '../Assets/map-pin.svg';
import bannerl from '../Assets/banner-L.png';
import maxHeader from '../Assets/max-width_header.svg'

function BannerThird() {
  return (
    <React.Fragment>
    <section className='container'>
      
      <div className="banner4-main-div">
                <div className="climed-man-image">
                <img src={bannerl} alt="here is hero image 3" />
                </div> 
                <div className="banner4-box">
                    <h4>Conquer your<br/> next adventure</h4>
                    <p>Lorem Ipsum Dolor Tempor</p>
                    <button >SHOP DEVICES</button>
                </div>
                <div className="banner4-mobile-box">
                <h4>Conquer your</h4>
                    <p>Lorem Ipsum Dolor Tempor</p>
                    <button>SHOP DEVICES</button>
                </div>
                <span className='mapiconWrapper'>
                        <img src={mapPin} alt="map pin icon" className='mapPinImg' />
                        <img src={maxHeader} alt='Horizontal line for styling' className='mapMaxHeaderImg' />
                    </span>
            </div>

    </section>
  </React.Fragment>
  )
}

export default BannerThird;