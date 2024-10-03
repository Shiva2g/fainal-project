'use client';
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); 

  const addToCart = (product) => {
    // Checking the presence of the product in the shopping cart
    const existingProduct = cartItems.find(item => item.id === product.id);
    
    if (existingProduct) {
      // If there is a product, will increase its number
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If there is not product, add it to the cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
