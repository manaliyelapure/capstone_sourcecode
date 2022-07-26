// import React from 'react';

import React, { useState, useEffect } from "react";
import sliders from '../../Assets/sliders.svg';
import x from '../../Assets/x.svg';

function Sidebar({ showsidebar, sidebarTogglecopy}) {

    const sidebarToggle = () => {
        sidebarTogglecopy(!showsidebar);
    }
    const [isActive, setActive] = useState(false);
    
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    // useEffect(() => {
    //     const getProducts = async () => {
    //         setLoading(true);
    //         const response = await fetch("https://fakestoreapi.com/products");
    //         if (componentMounted) {
    //             setData(await response.clone().json());
    //             // setFilter(await response.json());
    //             setLoading(false);
    //             console.log(filter)
    //         }

    //         return () => {
    //             componentMounted = false;
    //         }
    //     }

    //     getProducts();
    // }, []);

    // const filterProduct =() => {
    //     const updatedList = data.filter((x)=>x.category === "men's clothing");
    //     console.log("men's clothing",updatedList);
    //     setData(updatedList);
    // }

    return (

        <React.Fragment>
            <aside className={`${showsidebar ? ' herobanner sideBarToggle' : 'herobanner sideBar-active'}`} >

                <div className='aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--3 sidebar-demo'>
                    <p>Clothing / Women’s / Outerwear</p>

                    <div className="filter-icon">
                        <h3>Filters</h3>
                        <img src={x} onClick={sidebarToggle} className='cross_icon' alt="cross icon" aria-label="cross filter icon" />
                    </div>
                    <hr />
                    {/* <div className='Attribute-first'>
                        <h4>Categories</h4>
                        
                         <input type="checkbox" aria-label="checkbox" onClick={()=>filterProduct("jewelery")}/>
                         
                        
                        <label > Jewellery</label><br />
                        <input type="checkbox" aria-label="checkbox" onClick={()=>filterProduct("electronics")}/>
                        <label >  Electronics</label><br />
                        <input type="checkbox" aria-label="checkbox" onClick={()=>filterProduct("men's clothing")} />
                        <label >  Men’s Clothing</label><br />
                        <input type="checkbox" aria-label="checkbox" onClick={()=>filterProduct("women's clothing")}/>
                        <label >Women’s Clothing</label><br />
                        
                    </div> */}
                    <hr />
                    
                </div>


            </aside>
        </React.Fragment>
    )
}

export default Sidebar;