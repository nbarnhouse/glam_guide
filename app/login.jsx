import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Link } from "expo-router";
import LoginFields from "@/components/LoginFields";
import i18n from "@/i18n.js";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please fill in both fields.");
      return;
    }
    // Proceed with the login (validate user credentials)
    // For now, just show an alert
    Alert.alert("Login Button Pressed");

    //Clear email, password and toggle switch
    setEmail("");
    setPassword("");
    setIsEnabled(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>GlamGuide</Text>
        {/* Text: Cancun Mexico & The Riviera Maya */}
        <Text style={styles.subtitle}>{i18n.t("location")}</Text>
      </View>

      <View>
        {/* Text: Trusted Hair & Makeup Professionals for */}
        <Text style={styles.text}>{i18n.t("trustedProfessionals")}</Text>
        {/* Text: Your complete Wedding Experience */}
        <Text style={styles.text}>{i18n.t("weddingExperience")}</Text>
      </View>

      <TouchableOpacity
        style={[
          {
            alignItems: "center",
            justifyContent: "center",
          },
          styles.button_style,
        ]}
        onPress={handleLogin}
        accessibilityLabel="Login Button"
        accessibilityRole="button"
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 16.94,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      {/* NOTE: Need to update this text with libre Translation API details */}
      <Text style={{ marginTop: -20 }}>Auto Translation: Off</Text>
      <Link href="/sign-up">
        Don't have an account?
        <Text style={{ fontWeight: "bold" }}> Sign Up</Text>
      </Link>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 48,
    textTransform: "uppercase",
  },
  subtitle: {
    color: "#8C5627",
    fontSize: 12,
    textTransform: "uppercase",
  },
  text: {
    fontWeight: 300,
    lineHeight: 16.94,
    fontSize: 16,
  },
  button_style: {
    width: 256,
    height: 50,
    backgroundColor: "#59534C",
    borderRadius: 8,
  },
});
