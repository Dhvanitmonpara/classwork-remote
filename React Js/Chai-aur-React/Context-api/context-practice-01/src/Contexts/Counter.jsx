import { createContext, useContext } from "react";

export const CounterContext = createContext(null);

export default function useCounter() {
  return useContext(CounterContext);
}
