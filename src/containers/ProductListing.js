import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import ProductComponent from "./ProductComponent";
import { Loading } from "./Loading";



const ProductPage = ({sidebarTogglecopy, showsidebar}) => {

  // const [filter, setFilter] = useState(data);
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
    const updatedList = data.filter((x)=>x.category === cat);
    console.log("men's clothing",updatedList);
   setProducts(updatedList);
  // setFilter(updatedList);
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
   
    



     <React.Fragment>





         <div className='Attribute-first'>
                        <h4>Categories</h4>
                        {/* <input type="checkbox" aria-label="checkbox" onClick={()=>setFilter(data)}/>
                         <label > All</label><br /> */}
                         <input type="checkbox" aria-label="checkbox" onClick={()=>filterProduct("jewelery")}/>
                         <label > Jewellery</label><br />
                        <input type="checkbox" aria-label="checkbox" onClick={()=>filterProduct("electronics")}/>
                        <label >  Electronics</label><br />
                        <input type="checkbox" aria-label="checkbox" onClick={()=>filterProduct("men's clothing")} />
                        <label >  Men’s Clothing</label><br />
                        <input type="checkbox" aria-label="checkbox" onClick={()=>filterProduct("women's clothing")}/>
                        <label >Women’s Clothing</label><br />
                        
          </div>
        {loading ? <Loading /> : ""}
    <div className="aem-Grid aem-Grid--12 listwrapper">
      
    <ProductComponent products={products} filtercomponent={onfilterChange} sidebarTogglecopy={sidebarTogglecopy}
        showsidebar={showsidebar}  filterProduct={filterProduct}/>

  </div>
     </React.Fragment>
  
    
  );
};

export default ProductPage;
