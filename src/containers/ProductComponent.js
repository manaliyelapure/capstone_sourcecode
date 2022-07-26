import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import heart from '../Assets/heart.svg';
import Pagination from '../containers/Pagination';
import sliders from '../Assets/sliders.svg';

const ProductComponent = ({ products, filtercomponent, sidebarTogglecopy, showsidebar}) => {
  const [showperpage] = useState(6)
  const [display,setdisplay]= useState(false)
  const [pagination, stePegination] = useState({

    start: 0,

    end: showperpage,

  })

  const onPaginationChange = (start, end) => {

    stePegination({ start: start, end: end })

  }

  const onFilterSelect = (e) => {

    console.log('onFilterSelect', filtercomponent);

    filtercomponent(e.target.value);

  }

  const sidebarToggle2 = ()=> {
    sidebarTogglecopy(!showsidebar);
}

return(
  <div>
  
  <div className="dropdown  aem-Grid aem-Grid--12">
  <p className="desktophide">Clothing / Women’s / Outerwear</p>
  <div className="results">
      <span>20 results</span>
  </div>
 <div  className="filterhide">
  <img src={sliders}  alt="filter products" aria-label="filter icon" onClick={sidebarToggle2} /><span>filter products</span>
 </div>
 
  <select id="dropbox" onChange={onFilterSelect}>
    
      <option value="Sort by list">Sort by latest</option>

       <option value="category">Sort by Price</option>

    </select>
  </div>
     <div className="aem-Grid aem-Grid--12 demo-Grid">
    
    {products.slice(pagination.start, pagination.end).map((product) => {
    const { id, title, image, price } = product;
    let path = `/venia-site/products/${id}`;
    return (

      <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6 aem-GridColumn--tablet--6" key={id}>





        <Link to={path}>

          
        
        <div className="ui link cards">
            <div className="card" alt="all-products">
              <div className="image" alt="product-img">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title?.split(' ').slice(0,3).join(' ')}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta"><img src={heart}  alt="heart-img"/></div>
              </div>
            </div>
          </div>
        
        
       
        </Link>




      </div>




    );
  })};
     <div className="page-funtion">

      <Pagination showperpage={showperpage} onPaginationChange={onPaginationChange}/>

    </div>
  
     </div>
     </div>
);








};

export default ProductComponent;
