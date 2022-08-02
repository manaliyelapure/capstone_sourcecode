import React from 'react';
import { NavLink } from 'react-router-dom';
import bannerthird from '../Assets/banner-third.png';
import chevronleft from '../Assets/chevron-left.svg';

function BannerNew() {
  return (
    <section>
    <div className="aem-Grid aem-Grid--12 banner-new">
    <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--6 banner-newfirst">
       
     <div className="aem-Grid aem-Grid--12">
       <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--1 chevron-L">
         <img src={chevronleft}/>
       </div>
       <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--11 chevron-Left">
       <h1>
        Shop the new <br/>
        Signature Collection
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
        tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis <br/>
        aliquam faucibus purus.
        </p>
        <NavLink to="/Cart"><button className='shop-btn'>SHOP NOW</button></NavLink>
       </div>
       
     </div>
    </div>
      
      <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--6 banner-new">
        <img src={bannerthird}/>
      </div>
      
     
    </div>
    </section>
  )
}

export default BannerNew;