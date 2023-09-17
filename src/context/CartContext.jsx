import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cakes = [
  {
    id: 1,
    name: "A Gentle Blend",
    price: 200,
    image: "AGentleBlend/0.webp",
    quantity: 3,
  },
  {
    id: 2,
    name: "A Little Grace",
    price: 320,
    image: "ALittleGrace/0.webp",
    quantity: 4,
  },
  {
    id: 3,
    name: "All Yours",
    price: 180,
    image: "AllYours/0.webp",
    quantity: 1,
  },
  {
    id: 4,
    name: "Be in Blossom",
    price: 260,
    image: "BeinBlossom/0.webp",
    quantity: 2,
  },
];

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "PLUS_QUANTITY":
      return {
        ...state,
        products: [...action.payload],
      };
    case "MINUS_QUANTITY":
      return {
        ...state,
        products: [...action.payload],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: [...action.payload],
      };
    case "DELETE_ALL_PRODUCTS":
      return {
        ...state,
        products: [...action.payload],
      };
    default:
      return state;
  }
};

const initialState = {
  products: cakes,
};

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const handleQuantityMinus = (id) => {
    const newProduct = state.products.map((cake) =>
      cake.id === id ? { ...cake, quantity: cake.quantity - 1 } : cake
    );
    if (newProduct.some((cake) => cake.quantity < 1)) {
      alert("Product quantity cannot be less than 1!");
      return;
    }

    dispatch({ type: "MINUS_QUANTITY", payload: newProduct });
  };

  const handleQuantityPlus = (id) => {
    const newProduct = state.products.map((cake) =>
      cake.id === id ? { ...cake, quantity: cake.quantity + 1 } : cake
    );

    dispatch({ type: "PLUS_QUANTITY", payload: newProduct });
  };

  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const newProduct = state.products.filter((cake) => cake.id !== id);

      dispatch({ type: "DELETE_PRODUCT", payload: newProduct });
    }
  };

  const deleteAllProducts = () => {
    if (window.confirm("Are you sure you want to delete all products?")) {
      dispatch({ type: "DELETE_ALL_PRODUCTS", payload: [] });
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        handleQuantityMinus,
        handleQuantityPlus,
        deleteAllProducts,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
