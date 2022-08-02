import React, { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";

import ProductComponent from "./ProductComponent";
import { Loading } from "./Loading";




const ProductPage = ({sidebarTogglecopy, showsidebar,loading,products,onfilterChange}) => {

  
 
  return (
   
    



     <React.Fragment>



        {loading ? <Loading /> : ""}
    <div className="aem-Grid aem-Grid--12 listwrapper">
      
    <ProductComponent products={products} onfilterChange={onfilterChange} sidebarTogglecopy={sidebarTogglecopy}
        showsidebar={showsidebar}  />

  </div>
     </React.Fragment>
  
    
  );
};

export default ProductPage;
