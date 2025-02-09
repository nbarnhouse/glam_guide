import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 200,   // Set button width
    height: 60,   // Set button height
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Optional: for rounded corners
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

const CustomButton = () => {
  return (
    <View>
      <Text style={styles.text}>Press Me</Text>
    </View>
  );
};

export default CustomButton;