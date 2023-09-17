import "./App.css";
import { CartProvider } from "./context/CartContext";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {
  return (
    <CartProvider>
      <header>
        <div className="container">
          <Nav />
        </div>
      </header>
      <div className="container">
        <div className="products">
          <Products />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
