import React from 'react';
import bannersec from '../Assets/banner-sec.png';
import maxwidthheader from '../Assets/max-width_header.svg';

function Bannersec() {
  return (
    <section className='container '>
    <div className="aem-Grid aem-Grid--12 banner-sec">
       <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--6 bannerleft-first">
         <h1>Take off in the new<br/>
          Signature Legging</h1>
         <h5>Lorem Ipsum Dolor Tempor</h5>
         <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>
         labore dolore magna lorem ipsum dolor sit dolore magna.
         </p>
         <button className='shopC'>SHOP COLLECTION</button>
         <button className='shopN'>SHOP NOW</button>
         <div className='max-header'>
          
         {/* <img src={maxwidthheader}/> */}
         </div>
         
       </div>
       <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--6 bannerleft-sec">
        <img src={bannersec}/>
       </div>
    </div>
    </section>
  )
}

export default Bannersec