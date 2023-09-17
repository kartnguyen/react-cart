import { AiOutlineShopping } from "react-icons/ai";
import { useCartContext } from "../hooks/useCartContext";

const Nav = () => {
  const { products } = useCartContext();

  let quantity = 0;
  if (products) {
    products.map((cake) => {
      quantity += cake.quantity;
    });
  }

  return (
    <div className="nav">
      <h1>your shopping cart</h1>
      <div className="cart-button">
        <AiOutlineShopping />
        <span>{quantity}</span>
      </div>
    </div>
  );
};

export default Nav;
