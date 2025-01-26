import React, { createContext, useContext, useState } from "react";
import { CartItem, Product } from "@/src/types";
import { randomUUID } from "expo-crypto";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (cartId: CartItem["id"], amount: -1 | 1) => void;
  total: number;
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const total = items.reduce(
    (sum, item) => (sum += item.product.price * item.quantity),
    0
  );

  const addItem = (product: Product, size: CartItem["size"]) => {
    const existingItem = items.find(
      (item) => item.product === product && item.size === size
    );

    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return;
    }

    const newCartItem: CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };
    setItems([newCartItem, ...items]);
  };

  const updateQuantity = (cartId: CartItem["id"], amount: -1 | 1) => {
    const updateItems = items
      .map((item) =>
        item.id !== cartId
          ? item
          : { ...item, quantity: amount + item.quantity }
      )
      .filter((item) => item.quantity > 0);
    setItems(updateItems);
  };

  return (
    <CartContext.Provider
      value={{ items, addItem: addItem, updateQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
