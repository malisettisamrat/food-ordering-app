import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import Button from "@/src/components/Button";
import { Link } from "expo-router";

export default function SignupScreen() {
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
      <Button text="Register" />

      <Link href={"/(auth)/signin"} asChild>
        <Pressable className="flex items-center justify-center">
          <Text className="text-blue-600 font-semibold">Sign in</Text>
        </Pressable>
      </Link>
    </View>
  );
}
