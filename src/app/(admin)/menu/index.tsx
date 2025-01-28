import { FlatList, View } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { Stack } from "expo-router";

export default function MenuScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Menu" }} />
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
