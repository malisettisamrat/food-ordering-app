import { Product } from "@/src/types";
import { Link, useSegments } from "expo-router";
import { View, Image, Text, Pressable } from "react-native";
import { defaultProductImage } from "@/src/constants/Images";

interface ProductListItemProps {
  product: Product;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  // const segments = useSegments();
  // console.log(segments, "Segments");
  return (
    <Link href={`./menu/${product.id}`} asChild>
      <Pressable className="flex-1 max-w-[50%] items-center bg-white p-4 rounded-2xl justify-center">
        <Image
          source={{ uri: product.image || defaultProductImage }}
          className="w-[100%] aspect-square"
          resizeMode="contain"
        />
        <Text className="font-bold text-xl">{product.name}</Text>
        <Text className="text-sm text-blue-700 my-2 font-semibold">
          ${product.price}
        </Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;
