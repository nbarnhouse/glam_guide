import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, TextInput } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const LoginFields = ({
  email,
  setEmail,
  password,
  setPassword,
  isEnabled,
  toggleSwitch,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.login_container}>
      {/* View for username input field */}
      <View style={styles.inputContainer}>
        <Text nativeID="usernameLabel">Email address</Text>
        <TextInput
          accessibilityLabel="input"
          accessibilityLabelledBy="usernameLabel"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>

      {/* View for password input field */}
      <View style={styles.inputContainer}>
        <Text nativeID="passwordLabel">Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            secureTextEntry={!isPasswordVisible}
            accessibilityLabel="input"
            accessibilityLabelledBy="passwordLabel"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color="gray"
            style={styles.icon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        </View>
      </View>

      {/* Remember me toggle */}
      <View style={styles.toggle_row}>
        <Text style={{ fontSize: 14, fontWeight: "400" }}>
          Remember me next time
        </Text>
        <Switch
          trackColor={{ false: "#59534C", true: "#BFB3A4" }}
          thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login_container: {
    flex: 0.35,
    //alignItems: "center",
    justifyContent: "space-evenly",
    width: "90%",
  },

  inputContainer: {
    marginBottom: 20,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#161616",
    borderRadius: 8,
    fontSize: 16,
    paddingHorizontal: 15,
  },

  passwordContainer: {
    position: "relative",
  },

  icon: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -12 }],
  },

  toggle_row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default LoginFields;
