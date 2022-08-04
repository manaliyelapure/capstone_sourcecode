import React from 'react';
import banner1 from '../../Assets/banner1.png';
import bannerh from '../../Assets/banner-h.png';


function Banner
  () {
  return (
    <React.Fragment>
      <section>
        {/* <div className='banner'>

          <span className='banner-left'>
            <h1>Men’s <br/> <span>Outerwear</span></h1>
            <div className='banner-bottom'></div>
          </span>

          <img src={bannerh} alt="banner-image" aria-label='banner-img'/>


        </div> */}


        <div className='banner'>
            <span className='banner-left'>
                 <h2>Men’s Outerwear</h2>
                 <div></div>
            </span>
           <img src={bannerh} alt='Athlete woman'/>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Banner
