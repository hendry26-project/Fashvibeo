// src/Data/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);


  // Add product to cart or increase quantity
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
 
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider 
    value={{ cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
