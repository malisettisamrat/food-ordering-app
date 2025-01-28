import { View, Text, FlatList } from "react-native";
import React from "react";

const ordersList = [
  {
    name: "Order #1",
    time: "16 hours ago",
    status: "Delivering",
  },
  {
    name: "Order #2",
    time: "1 hours ago",
    status: "New",
  },
  {
    name: "Order #3",
    time: "3 hours ago",
    status: "New",
  },
  {
    name: "Order #4",
    time: "20 hours ago",
    status: "Delivered",
  },
  {
    name: "Order #5",
    time: "12 hours ago",
    status: "Delivering",
  },
  {
    name: "Order #6",
    time: "4 hours ago",
    status: "New",
  },
  {
    name: "Order #7",
    time: "18 hours ago",
    status: "Delivering",
  },
  {
    name: "Order #8",
    time: "22 hours ago",
    status: "Delivered",
  },
];

const OrderItemCard = ({ order }) => {
  //   TODO -  Card is not working to render the data!!!
  return (
    <View className="flex-1 bg-gray-100 my-1 justify-center items-center">
      <View className="bg-white rounded-lg shadow p-4 w-full flex-row justify-between items-center">
        <View>
          <Text className="text-black font-bold">{order.name}</Text>
          <Text className="text-gray-500 mt-2">{order.time}</Text>
        </View>
        <Text className="text-black font-semibold">{order.status}</Text>
      </View>
    </View>
  );
};

const OrderListItem = () => {
  return (
    <View>
      <FlatList
        data={ordersList}
        renderItem={({ item }) => <OrderItemCard order={item} />}
      />
    </View>
  );
};

export default OrderListItem;
