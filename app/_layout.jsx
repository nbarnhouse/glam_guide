import { Stack } from "expo-router";
import { TouchableOpacity, Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "" }} />
      <Stack.Screen name="sign-in" />
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
            >
              {/* Back Arrow is handled by `headerTintColor` */}
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
    </Stack>
  );
}
