import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ArtistMessageSummary() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.header_container}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back-outline" size={32} color="#161616" />
        </TouchableOpacity>

        <Text>Auto Translation: Off</Text>

        <TouchableOpacity>
          <FontAwesome name="pencil-square-o" size={32} color="#161616" />
        </TouchableOpacity>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.message_container}>
        <FontAwesome5
          style={styles.icon}
          name="user-circle"
          size={31}
          color="#59534C"
        />

        <View style={styles.message_background}>
          <Text style={styles.title}>NAME</Text>
          <View style={styles.divider}>
            <Text>Content after the divider</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => router.push("/artistMessageDetail")}>
          <Ionicons name="chevron-forward" size={24} color="#59534C" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 43,
    color: "#59534C",
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "lightgray",
    //marginTop: 30,
  },
  message_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    //backgroundColor: "violet",
  },
  message_background: {
    //backgroundColor: "pink",
  },
});
