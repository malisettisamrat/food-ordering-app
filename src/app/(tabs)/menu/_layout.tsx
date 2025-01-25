import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function MenuStack() {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome name="shopping-cart" size={20} className="mr-4" />
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
