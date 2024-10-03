'use client';
import React, { createContext, useState, useContext } from 'react';

// ایجاد Context
const CartContext = createContext();

// ایجاد یک Provider برای Context
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.name === product.name && item.color === product.color);
      if (existingProduct) {
        // اگر محصول قبلاً وجود دارد، تعداد را افزایش می‌دهیم
        return prevCart.map(item =>
          item.name === product.name && item.color === product.color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // اگر محصول جدید است، آن را به سبد خرید اضافه می‌کنیم
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
          // اگر تعداد به 1 برسد، محصول را حذف می‌کنیم
          return prevCart.filter(item => !(item.name === product.name && item.color === product.color));
        }
      }
      return prevCart;
    });
  };

  const getProductQuantity = (product) => {
    const existingProduct = cart.find(item => item.name === product.name && item.color === product.color);
    return existingProduct ? existingProduct.quantity : 0; // اگر محصول موجود باشد، تعداد را برمی‌گرداند
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getProductQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

//  hook Context
export const useCart = () => {
  return useContext(CartContext);
};
