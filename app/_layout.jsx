import { Stack, useRouter } from "expo-router";
import { TouchableOpacity, Text } from "react-native";
import { useEffect } from "react";

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    console.log("Index Screen RootLayout re-rendered");
  }, []);

  const handleForgotPassword = () => {
    console.log("Navigating to forgot-password");
    router.push("/forgot-password");
  };

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "", headerShown: false }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerTitle: "",
          headerBackButtonMenuEnabled: false,
          headerTransparent: true,
          headerTintColor: "black",
          headerRight: () => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
              }}
              onPress={handleForgotPassword}
            >
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 16,
                  color: "black",
                }}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
    </Stack>
  );
}
