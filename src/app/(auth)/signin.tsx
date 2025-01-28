import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import Button from "@/src/components/Button";
import { Link, router } from "expo-router";

export default function SigninScreen() {
  return (
    <View className="flex-1 justify-center p-4 gap-4">
      <Text>Email</Text>
      <TextInput
        className="w-full h-14 border bg-white p-4 rounded-md"
        placeholder="Enter Email"
        placeholderTextColor={"gray"}
      />
      <Text>Password</Text>
      <TextInput
        className="w-full h-14 border bg-white p-4 rounded-md"
        placeholder="Enter Password"
        placeholderTextColor={"gray"}
        keyboardType={"visible-password"}
      />
      <Button onPress={() => router.navigate("/(user)/menu")} text="Sign In" />

      <Link href={"/(auth)/signup"} asChild>
        <Pressable className="flex items-center justify-center">
          <Text className="text-blue-600 font-semibold">Create an Account</Text>
        </Pressable>
      </Link>
    </View>
  );
}
