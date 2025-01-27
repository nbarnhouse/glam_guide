import LoginFields from "@/components/LoginFields";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is the index/home Screen</Text>
      <Link href="/login">Go to Login Screen</Link>
    </View>
  );
}
