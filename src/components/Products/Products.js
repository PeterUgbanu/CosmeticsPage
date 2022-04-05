import React from "react";
import Product from "./Product/Product";
import "./Products.css";
import product1 from "../../assets/product1.svg";
import product2 from "../../assets/product2.png";

const Products = () => {
  const products = [
    {
      id: 1,
      image: product1,

      content: {
        heading: "GOS- Primer Plus 30 ML",
        text: "GOSH COPENHAGEN offers a wide selection of products in different categories: Cosmetics, Fragrances, Hair Care, Face Care, Body Care. GOSH Cosmetics are available online. ",
      },
    },
    {
      id: 2,
      image: product2,

      content: {
        heading: "HD Micro Foundation Matifying Liquid",
        text: "HD Micro Foundation Matifying Liquid is a micronized and gently mattifying foundation with vitamin E for the most natural look. ",
      },
    },
  ];
  return (
    <div className="products" id="products">
      <div className="product-review">
        <h1>Best Cosmetic Products</h1>
        <p>
          Launched in 2002, Makeup City has brought renowned international
          personal care brands under one roof for the first time in Pakistan.
          from a journey of a few stores, we have grown significantly, by making
          our brands available to almost every where a person can think off.
        </p>
      </div>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          image={product.image}
          heading={product.content.heading}
          text={product.content.text}
        />
      ))}
    </div>
  );
};

export default Products;
