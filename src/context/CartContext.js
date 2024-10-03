'use client';
import React, { createContext, useState, useContext } from 'react';

// Create Context
const CartContext = createContext();

// Create a Provider for Context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.name === product.name && item.color === product.color);
      if (existingProduct) {
        // If the product already exists, increase the quantity
        return prevCart.map(item =>
          item.name === product.name && item.color === product.color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If the product is new, add it to the cart
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.name === product.name && item.color === product.color);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          return prevCart.map(item =>
            item.name === product.name && item.color === product.color
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          // If the quantity reaches 1, remove the product
          return prevCart.filter(item => !(item.name === product.name && item.color === product.color));
        }
      }
      return prevCart;
    });
  };

  const getProductQuantity = (product) => {
    const existingProduct = cart.find(item => item.name === product.name && item.color === product.color);
    return existingProduct ? existingProduct.quantity : 0; // If the product exists, return its quantity
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Context hook
export const useCart = () => {
  return useContext(CartContext);
};
