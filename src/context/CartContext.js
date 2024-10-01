// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0); // تعداد محصولات در سبد خرید

  const addToCart = () => {
    setCartItems(cartItems + 1); // افزایش تعداد محصولات
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
