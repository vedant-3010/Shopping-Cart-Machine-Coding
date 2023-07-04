import React, { useState } from "react";
import Header from "./Header";
import faker from "faker";
import SingleProduct from "./SingleProduct";
import './styles.css'

faker.seed(100);

const Home = ({cart,setCart}) => {
  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));


  const[products] = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((p) => (
        <SingleProduct  prod = {p} cart={cart} setCart={setCart} key={p.id}/>
      ))}
    </div>
  );
};

export default Home;
