import React, { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = () => {
  return (
    <div>
      <h1>cart AuthContext</h1>
    </div>
  );
};

export default CartContextProvider;
