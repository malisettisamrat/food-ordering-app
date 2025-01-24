import { Image, Text, View } from "react-native";
import products from "@/assets/data/products";

export default function TabOneScreen() {
  const product = products[0];

  return (
    <View className="flex items-center bg-white p-4 rounded-2xl justify-center">
      <Image
        source={{ uri: product.image }}
        className="w-[100px] h-[100px] aspect-auto"
      />
      <Text className="font-bold text-xl">{product.name}</Text>
      <Text className="text-sm text-blue-700 my-2 font-semibold">
        ${product.price}
      </Text>
    </View>
  );
}
