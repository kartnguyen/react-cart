import { useState } from "react";
import "./App.css";
import { CartContext } from "./context/CartContext";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Clear from "./components/Clear";

function App() {
  return (
    <CartContext.Provider>
      <Header />
      <Cart />
      <Clear />
    </CartContext.Provider>
  );
}

export default App;
