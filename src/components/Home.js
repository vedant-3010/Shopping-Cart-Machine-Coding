import React, { useContext, useState } from "react";
import Header from "./Header";
import faker from "faker";
import SingleProduct from "./SingleProduct";
import "./styles.css";
import { Cart, CartState } from "../Context";

faker.seed(100);

const Home = () => {
    const { products } = CartState();

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
