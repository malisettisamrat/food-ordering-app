import { View, Text } from "react-native";
import React from "react";
import OrderListItem from "@/src/components/OrderListItem";

const OrderScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Orders Screen</Text>
      <OrderListItem />
    </View>
  );
};

export default OrderScreen;
