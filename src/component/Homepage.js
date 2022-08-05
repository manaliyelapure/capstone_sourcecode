import React from 'react';
import Bannermid from './Bannermid';
import BannerNew from './BannerNew';
import Bannersec from './Bannersec';
import BannerThird from './BannerThird';


function Homepage() {
  return (
    <div className='aem-Grid aem-Grid--12'>
        <div className='banner-N'>
        <BannerNew/>
        </div>
      <div className='banner-M'>
      <Bannermid/>
      </div>
      <div className='banner-S'>
     <Bannersec/>
     </div>
      <div className='banner-T'>
      <BannerThird/> 
      </div>
     
    </div>
  )
}

export default Homepage