import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function artistMessageDetail() {
  return (
    <SafeAreaView style={styles.container}>
      <FontAwesome5
        style={styles.icon}
        name="user-circle"
        size={48}
        color="black"
      />
      <Text style={styles.text}>Name</Text>
      <View style={styles.divider}>{/* Content after the divider */}</View>
      <View style={styles.message_container}>
        <FontAwesome5
          style={styles.icon}
          name="user-circle"
          size={31}
          color="black"
        />
        <View style={styles.message_background}>
          <Text style>Message Here</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    marginTop: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 7,
    fontWeight: "bold",
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  message_container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  message_background: {
    height: 65,
    width: 318,
    backgroundColor: "lightgray",
    borderRadius: 10,
    borderColor: "#black",
    borderWidth: 1,
    padding: 10,
  },
});
