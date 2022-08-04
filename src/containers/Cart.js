
import React, { useEffect, useCallback, useMemo, useState } from "react";
import Banner from '../Components/Banner/Banner';
import Sidebar from '../Components/sidebar/Sidebar';
import ProductListing  from '../containers/ProductListing';
import axios from "axios";

function Cart() {
  const[sidebartoggle, setsidebartoggle] = useState(true);

  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios
 
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    setProducts(response.data);
    // setFilter(await response.json());
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

 

    const filterProduct =(cat) => {
    const updatedList = data.filter((x)=>x.category === cat.category);
    console.log("men's clothing",updatedList);
   setProducts(updatedList);
 
  }

  const [sort, setSort] = useState()

  const onfilterChange = (filter) => {

    console.log("onfilter", sort);

    if (filter) {

      const result = products.sort((a, b) => a.price - b.price);

      console.log(products);

      return setSort(result);
    }
  }

  console.log("Products :", products);




  return (
    <div className="aem-Grid aem-Grid--12 Cart">
      <Banner />

      <div className="aem-GridColumn  aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--3">
        <Sidebar    sidebarTogglecopy={setsidebartoggle}
        showsidebar={sidebartoggle} filterProduct={filterProduct} />
     
      </div>

      <div className="aem-GridColumn aem-GridColumn--default--9  prod-list">
        <ProductListing  
       products={products} onfilterChange={onfilterChange} loading={loading} />
       
      </div>
    </div>
  )
}

export default Cart;