import React, { useState } from "react";

import "./style.css";
import Menu from "./menuapi.jsx";
import Menucart from "./menucart.jsx";

const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const filterItem=(category)=>{
    const updatedList= Menu.filter((curElem)=>{
      return curElem.category===category;
    });
    setmenuData(updatedList);
  };

  return (
    <>
      <nav className="navbar">
        <div className="header">
          <button className="header-btn" onClick={()=>setmenuData(Menu)} > All</button>
        
          <button
            className="header-btn"
            onClick={() => filterItem("Breakfast")}
          >
            Breakfast
          </button>

          <button className="header-btn"
           onClick={() => filterItem("Lunch")} 
          > lunch</button>
          <button className="header-btn"
           onClick={() => filterItem("Snacks")}
          > Evening</button>
          <button className="header-btn"
           onClick={() => filterItem("Dinner")}
          
          > Dinner</button>
          </div>
          
      </nav>
      <Menucart menuData={menuData} />
    </>
  );
};

export default Resturant;
