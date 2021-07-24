import React from "react";
import "./bestSeller.css";

const BestSeller = (props) => {
  const position = props.pos;

  return position ? (
    <div className="MAIN">
      <h1 className="section-title container"> المنتجات الاكثر مبيعا </h1>
      <div className="main-wrapper card">
        <div className="product-wrapper">
          <h3 className="product-title">{props.name}</h3>
          <div className="product-description">{props.desc}</div>
        </div>
        <div className="product-image-container">
          <img
            className="product-image right"
            src={`http://localhost:5000/images/${props.urlImage}`}
            alt="best seller product images"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="MAIN">
      <div className="main-wrapper ">
        <div className="product-image-container">
          <img
            className="product-image left"
            src={`http://localhost:5000/images/${props.urlImage}`}
            alt="best seller product images"
          />
        </div>
        <div className="product-wrapper">
          <h3 className="product-title">{props.name}</h3>
          <div className="product-description">{props.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
