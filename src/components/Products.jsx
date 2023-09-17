import { useCartContext } from "../hooks/useCartContext";
import ProductDetail from "./ProductDetail";

const Products = () => {
  const { products, deleteAllProducts } = useCartContext();

  let totalPrice = 0;
  if (products) {
    products.map((cake) => {
      totalPrice += cake.price * cake.quantity;
    });
  }

  return (
    <>
      {products.length === 0 ? (
        <div className="noneProducts">
          <h2>Yours cart is currently empty!</h2>
          <p className="changePage" onClick={() => window.location.reload()}>
            Go to the Products Page
          </p>
        </div>
      ) : (
        <>
          <h2>products</h2>
          <ProductDetail />
          <div className="total">
            <h3>Total: ${totalPrice}</h3>
            <button onClick={deleteAllProducts}>Clear All</button>
          </div>
        </>
      )}
    </>
  );
};

export default Products;
