import products from "@/assets/data/products";
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

const defaultProductImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const router = useRouter();
  const { addItem } = useCart();
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");

  const addToCart = () => {
    if (!product) return;
    addItem(product, selectedSize);
    router.push("/cart");
  };

  const product = products.find((product) => product.id.toString() === id);

  return (
    <View className="flex-1 bg-white p-10">
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        className="w-[100%] aspect-square"
        resizeMode="contain"
        source={{ uri: product?.image || defaultProductImage }}
      />
      <Text className="mt-5 font-semibold">Select Size</Text>
      <View className="flex my-10 flex-row justify-around">
        {sizes.map((size) => (
          <Pressable
            key={size}
            className={`w-12 h-12 rounded-full items-center justify-center ${
              selectedSize === size ? "bg-slate-200" : "bg-white"
            }`}
            onPress={() => setSelectedSize(size)}
          >
            <Text
              className={`text-lg font-semibold  ${
                selectedSize === size ? "text-black" : "text-zinc-500"
              }`}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text className="text-lg mt-auto px-4 text-black font-bold">
        Price: ${product?.price}
      </Text>
      <Button className="mt-6" onPress={addToCart} text="Add to cart" />
    </View>
  );
};

export default ProductDetailsScreen;
