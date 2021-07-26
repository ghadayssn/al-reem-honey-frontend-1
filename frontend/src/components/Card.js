import React from "react";
import "../styles/productsStyle.css";
const Card = (props) => {
  return (
    <div id="addmargin">
      <div className="product__list">
        <img
          className="product__img"
          src={`http://localhost:5000/images/${props.productData.image}`}
          alt={props.productData.title}
        />
      </div>
    </div>
  );
};

export default Card;
