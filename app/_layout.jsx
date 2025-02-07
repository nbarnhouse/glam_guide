import { Stack, useRouter } from "expo-router";
import { TouchableOpacity, Text, View } from "react-native";
import { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

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
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
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

        <Stack.Screen
          name="artistMessageDetail"
          options={{
            headerTitle: "",
            headerTransparent: true,
            headerTintColor: "black",
            headerLeft: () => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons
                    name="chevron-back-outline"
                    size={32}
                    color="#161616"
                  />
                </TouchableOpacity>
                <Text>Auto Translation: Off</Text>
                <TouchableOpacity>
                  <FontAwesome
                    name="pencil-square-o"
                    size={32}
                    color="#161616"
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
      </Stack>
    </>
  );
}
