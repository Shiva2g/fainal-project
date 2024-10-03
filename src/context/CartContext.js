'use client';
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // تعداد محصولات در سبد خرید

  const addToCart = (product) => {

    setCartItems(cartItems + 1); // افزایش تعداد محصولات
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
