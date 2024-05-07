import React, { useState } from "react";
import { cartContext } from "./Contexts/cart";
import Product from "./Components/Product";
import CartItem from "./Components/CartItem";

function App() {
  const [price, setPrice] = useState(0);
  function addToCart() {}
  function totalPrice() {}
  return (
    <cartContext.Provider value={{ price, addToCart, totalPrice }}>
      <Product key="01" name="Macbook pro" price="120000" />
      <Product key="02" name="Samsung Galaxy A27" price="35000" />
      <Product key="03" name="Sandisk Pendrive" price="4000" />
      <CartItem />
    </cartContext.Provider>
  );
}

export default App;
