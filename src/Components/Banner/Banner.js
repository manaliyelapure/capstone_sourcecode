import React from 'react';
import banner1 from '../../Assets/banner1.png';


function Banner
  () {
  return (
    <React.Fragment>
      <section>
        <div className='banner'>

          <span className='banner-left'>
            <h1>Men’s <br/> <span>Outerwear</span></h1>
            <div className='banner-bottom'></div>
          </span>

          <img src={banner1} alt="banner-image" aria-label='banner-img'/>


        </div>
      </section>
    </React.Fragment>
  )
}

export default Banner
