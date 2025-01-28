import { Redirect } from "expo-router";

export default function RootLayoutScreen() {
  return <Redirect href={"/(auth)/signin"} />;
}
