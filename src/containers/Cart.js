import React, { useState } from 'react';
import Banner from '../Components/Banner/Banner';
import Sidebar from '../Components/sidebar/Sidebar';
import ProductListing  from '../containers/ProductListing';

function Cart() {
  const[sidebartoggle, setsidebartoggle] = useState(true);
  return (
    <div className="aem-Grid aem-Grid--12 Cart">
      <Banner />

      <div className="aem-GridColumn  aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--3">
        <Sidebar    sidebarTogglecopy={setsidebartoggle}
        showsidebar={sidebartoggle} />
     
      </div>

      <div className="aem-GridColumn aem-GridColumn--default--9  prod-list">
        <ProductListing  sidebarTogglecopy={setsidebartoggle}
        showsidebar={sidebartoggle} />
       
      </div>
    </div>
  )
}

export default Cart;