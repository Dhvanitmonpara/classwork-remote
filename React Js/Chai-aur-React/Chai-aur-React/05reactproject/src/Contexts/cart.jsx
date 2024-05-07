import { createContext, useContext } from "react";

export const cartContext = createContext({
    price: 0,
    totalPrice: ()=>{},
    addToCart: ()=>{}
});

export default function useCart() {
  return useContext(cartContext);
}
