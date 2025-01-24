import { FlatList, Image, Text, View } from "react-native";
import products from "@/assets/data/products";
import { Product } from "@/src/types";
interface ProductListItemProps {
  product: Product;
}

const defaultProductImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View className="flex-1 max-w-[50%] items-center bg-white p-4 rounded-2xl justify-center">
      <Image
        source={{ uri: product.image || defaultProductImage }}
        className="w-[100%] aspect-square"
        resizeMode="contain"
      />
      <Text className="font-bold text-xl">{product.name}</Text>
      <Text className="text-sm text-blue-700 my-2 font-semibold">
        ${product.price}
      </Text>
    </View>
  );
};

export default function MenuScreen() {
  return (
    <View className="">
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerClassName="gap-2"
        columnWrapperClassName="gap-2"
      />
    </View>
  );
}
