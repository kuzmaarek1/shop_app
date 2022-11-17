import React, { createContext, useContext, useEffect } from "react";
import useLocalStorage from "/context/useLocalStorage";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useLocalStorage("showCart", false);
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
  const [totalPrice, setTotalPrice] = useLocalStorage("totalPrice", 0);
  const [totalQuantities, setTotalQuantities] = useLocalStorage(
    "totalQuantities",
    0
  );
  const [qty, setQty] = useLocalStorage("qty", 1);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (items) => items._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuanties) => prevTotalQuanties + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        else {
          return { ...cartProduct };
        }
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    setQty(1);
    toast.success(`${quantity} ${product.name} added to cart.`);
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const toogleCartItemQuanitity = (id, value) => {
    const newCartItems = cartItems.filter(({ _id }) => _id !== id);
    const foudItem = cartItems.find(({ _id }) => _id === id);

    if (value === "inc") {
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foudItem.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
      setCartItems([
        ...newCartItems,
        { ...foudItem, quantity: foudItem.quantity + 1 },
      ]);
    } else if (value === "dec") {
      if (foudItem.quantity > 1) {
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foudItem.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
        setCartItems([
          ...newCartItems,
          { ...foudItem, quantity: foudItem.quantity - 1 },
        ]);
      }
    }
  };

  const onRemove = (item) => {
    const newCartItems = cartItems.filter(({ _id }) => _id !== item._id);
    const foudItem = cartItems.find(({ _id }) => _id === item._id);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - foudItem.price * foudItem.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foudItem.quantity
    );
    setCartItems(newCartItems);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        onRemove,
        toogleCartItemQuanitity,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
