import { createContext } from "react";

const CartContext = createContext();

//Local Storage
const storage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];


export default CartContext;