import React from "react";

const Menucart = ({ menuData }) => {
  return (
    <>
    <section className="main-card-container">
      {menuData.map((curElem) => {
        return (
            <>
          <div className="card-container" key={curElem} >
            <div className="card">
              <div className="card-body">
                <p className="card-number  ">{curElem.id}</p>
                <p className="card-author ">{curElem.name}</p>
                <h2 className="card-title">{curElem.category}</h2>
                <p className="card-description">
                  {curElem.description}
                </p>
                <div className="card-price">{curElem.price}</div>
              </div>
              <img src={curElem.image} alt="" className="card-media" />
              <button className="card-btn" >order now!</button>
            </div>
          </div>
          </>
        );
      })}
      </section>
    </>
  );
};

export default Menucart;
