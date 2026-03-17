import React, { createContext, useState, useContext, useMemo } from 'react';
import { ImageSourcePropType } from 'react-native';

// 1. Definimos qué datos tiene un producto (incluyendo el descuento)
interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number; // El ? significa que es opcional
  image: ImageSourcePropType; // Cambiado para que acepte require()
}

// 2. Definimos qué funciones y datos expone el Carrito
interface CartContextType {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void; // Agregada formalmente
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Product[]>([]); // Corregido: Product[]

  const addToCart = (product: Product) => {
    setItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter(item => item.id !== id));
  };

  // Calculamos el total automáticamente cada vez que cambian los items
  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

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
