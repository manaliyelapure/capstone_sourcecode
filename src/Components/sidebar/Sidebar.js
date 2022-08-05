import React, { useState, useEffect } from "react";
import sliders from '../../Assets/sliders.svg';
import x from '../../Assets/x.svg';

function Sidebar({ handleChange , sidebarTogglecopy, showsidebar,categories}) {
   
    const sidebarToggle = () => {
        sidebarTogglecopy(!showsidebar);
      };
        
    const [isActive, setActive] = useState(false);
    const [isSelected, setisSelected] = useState(false);

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    const getCategoryData = () => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data);

            })
        console.log(data)
    }

    useEffect(() => {
        getCategoryData()
    }, []);

    return (

        <React.Fragment>
            <aside
        className={`${showsidebar ? " sideBar sideBarToggle" : "sideBar sideBar-active"
          }`}
        role="complementary"
      >

                <div className='aem-GridColumn aem-GridColumn--phone--12  aem-GridColumn--tablet--12 aem-GridColumn--default--3 sidebar-demo'>
                    <p>Clothing / Women’s / Outerwear</p>

                    <div className="filter-icon">
                        <h3>Filters</h3>
                        <img src={x} onClick={sidebarToggle} className='cross_icon' alt="cross icon" aria-label="cross filter icon" />
                    </div>
                    <hr />
              
                    



                     <div className="Attribute-first">
              <input
                type="checkbox"
                id="chk2-label"
                name="electronics"
                onChange={handleChange}
                checked={categories.electronics}
              />
              <label htmlFor=""> Electronics</label>
            </div>
            <div className="Attribute-first">
              <input
                type="checkbox"
                id="chk2-label"
                name="jewelery"
                onChange={handleChange}
                checked={categories.jewelery}
              />
              <label htmlFor=""> Jewelery</label>
            </div>
            <div className="Attribute-first">
              <input
                type="checkbox"
                id="chk2-label"
                name="men's clothing"
                onChange={handleChange}
                checked={categories["men's clothing"]}
              />
              <label htmlFor=""> Men's Clothing</label>
            </div>
            <div className="Attribute-first">
              <input
                type="checkbox"
                id="chk2-label"
                name="women's clothing"
                onChange={handleChange}
                checked={categories["women's clothing"]}
              />
              <label htmlFor=""> Women's Clothing</label>
            </div>
                    <hr />

                </div>


            </aside>
        </React.Fragment>
    )
}

export default Sidebar;