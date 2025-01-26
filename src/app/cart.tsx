import { View, Text, FlatList } from "react-native";
import React from "react";
import { useCart } from "@/src/providers/CartProvider";
import CartListItem from "@/src/components/CardListItem";
import Button from "../components/Button";

const CartScreen = () => {
  const { items, total } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <Text className="font-semibold text-lg m-5 mb-2 items-end justify-end">
        Total - ${total.toFixed(2)}
      </Text>
      <Button className="mx-5" text="Checkout" />
    </View>
  );
};

export default CartScreen;
