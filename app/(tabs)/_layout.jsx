import { Tabs, useRouter } from "expo-router";
import { TouchableOpacity, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

// Import statement for message w/ notifications icon
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
  const router = useRouter();
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="artistCalendar"
          options={{
            headerShown: false,
            tabBarLabel: () => null,
            tabBarIcon: () => (
              <AntDesign name="calendar" size={24} color="#59534C" />
            ),
          }}
        />
        <Tabs.Screen
          name="artistMessages"
          options={{
            headerTitle: "",
            headerTransparent: true,
            headerTintColor: "black",
            tabBarLabel: () => null,
            tabBarIcon: () => (
              <Feather name="message-square" size={24} color="#59534C" />
              // Alternate icon with message nofication
              // <MaterialCommunityIcons name="message-badge-outline" size={24} color="black" />
            ),
          }}
        />

        <Tabs.Screen
          name="artistEarningSummary"
          options={{
            headerShown: false,
            tabBarLabel: () => null,
            tabBarIcon: () => (
              <Feather name="dollar-sign" size={24} color="#59534C" />
            ),
          }}
        />
        <Tabs.Screen
          name="artistProfile"
          options={{
            headerShown: false,
            tabBarLabel: () => null,
            tabBarIcon: () => (
              <Octicons name="paintbrush" size={24} color="#59534C" />
            ),
          }}
        />
        <Tabs.Screen
          name="artistServicesOverview"
          options={{
            headerShown: false,
            tabBarLabel: () => false,
            tabBarIcon: () => (
              <FontAwesome5 name="user-circle" size={24} color="#59534C" />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
