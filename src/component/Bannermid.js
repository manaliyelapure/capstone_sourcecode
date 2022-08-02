import React from 'react';
import whiteshirt from '../Assets/white-shirt.png';
import mensjacket from '../Assets/mens-jacket.png';
import whitering from '../Assets/white-ring.png';
import monitor from '../Assets/monitor.png';


function Bannermid() {
  return (
    <section className='container mid-container'>
        <div className='aem-Grid aem-Grid--12  categories-main'>
        <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--3 banner-mid">
        <div className='category-img'>
             <img src={whiteshirt}/>
        </div>
        <div className='category-shop'>
             <h5>Shop Women</h5>
             <p>Lorem ipsum dolor sit amet</p>
        </div>
        
        </div>
        <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--3 banner-mid">
       <div className='category-img'>
       <img src={mensjacket}/>
       </div>
        
        <div className='category-shop'>
             <h5>Shop Women</h5>
             <p>Lorem ipsum dolor sit amet</p>
             
        </div>
       
        </div>
        <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--3 banner-mid">
        <div className='category-img'>
        <img src={whitering}/>
        </div>
        <div className='category-shop'>
             <h5>Shop Women</h5>
             <p>Lorem ipsum dolor sit amet</p>
             
        </div>
        
        </div>
        <div className="aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--3 banner-mid">
       <div className='category-img'>
       <img src={monitor}/>
       </div>
        <div className='category-shop'>
             <h5>Shop Women</h5>
             <p>Lorem ipsum dolor sit amet</p>
             
        </div>
        
        </div>
        </div>
    </section>
  )
}

export default Bannermid