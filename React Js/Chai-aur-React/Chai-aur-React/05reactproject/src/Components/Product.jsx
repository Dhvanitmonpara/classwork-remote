import React from "react";

const Product = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
    </div>
  );
};

export default Product;
