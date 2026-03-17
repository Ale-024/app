import React, { createContext, useState, useContext, useMemo } from 'react';
import { ImageSourcePropType } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number; 
  image: ImageSourcePropType;
}

interface CartContextType {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void; 
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => setItems((prev) => [...prev, product]);
  const removeFromCart = (id: string) => setItems((prev) => prev.filter(i => i.id !== id));

  const total = useMemo(() => items.reduce((sum, item) => sum + item.price, 0), [items]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart debe usarse dentro de CartProvider');
  return context;
};