import React, { useState } from "react";
import "./bestSeller.css";

const BestSeller = (props) => {
  const position = props.pos;
  // console.log(position);
  return position ? (
    <div className="main-wrapper card">
      <div className="product-wrapper">
        <h3 className="product-title">{props.name}</h3>
        <div className="product-description">{props.desc}</div>
      </div>
      <div className="product-image-container">
        <img
          className="product-image right"
          src="https://picsum.photos/800/301/?random"
          alt="2"
        />
      </div>
    </div>
  ) : (
    <div className="main-wrapper ">
      <div className="product-image-container">
        <img
          className="product-image left"
          src="https://picsum.photos/800/301/?random"
          alt="2"
        />
      </div>
      <div className="product-wrapper">
        <h3 className="product-title">{props.name}</h3>
        <div className="product-description">{props.desc}</div>
      </div>
    </div>
  );
};

export default BestSeller;
