import { useCartContext } from "../hooks/useCartContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const ProductDetail = () => {
  const { products, handleQuantityMinus, handleQuantityPlus, deleteProduct } =
    useCartContext();

  return (
    <div className="product-container">
      {products.map((cake) => (
        <div key={cake.id} className="product-details">
          <div className="product-description">
            <img src={cake.image} alt={cake.name} />
            <div className="title">
              <h3>{cake.name}</h3>
              <p>Price: ${cake.price}</p>
            </div>
          </div>
          <div className="quantity">
            <span onClick={() => handleQuantityMinus(cake.id)}>
              <AiOutlineMinus />
            </span>
            <b>{cake.quantity}</b>
            <span onClick={() => handleQuantityPlus(cake.id)}>
              <AiOutlinePlus />
            </span>
            <span onClick={() => deleteProduct(cake.id)}>
              <BsTrash />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
