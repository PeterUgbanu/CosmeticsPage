import React from "react";
import "./Product.css";

const Product = ({ image, heading, text, id }) => {
  return (
    <div
      className="product"
      style={
        id === 2
          ? {
              flexDirection: "row-reverse",
            }
          : {}
      }
    >
      <div className="product-image">
        <img src={image} alt="product" />
      </div>
      <div className="product-content">
        <h1>{heading}</h1>
        <p>{text}</p>
        <p className="load-more">Load More</p>
      </div>
    </div>
  );
};

export default Product;
