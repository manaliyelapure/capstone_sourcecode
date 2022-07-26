import React from 'react';
import Bannermid from './Bannermid';
import BannerNew from './BannerNew';
import Bannersec from './Bannersec';
import BannerThird from './BannerThird';


function Homepage() {
  return (
    <div>
        {/* <BannerNew/>
      <Bannersec/>
      <BannerThird/> */}
      <BannerNew/>
      <Bannermid/>
      <Bannersec/>
      <BannerThird/> 
    </div>
  )
}

export default Homepage