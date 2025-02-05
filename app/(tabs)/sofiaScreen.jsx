import { Image, View, StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image1: {
    width: '100%',
    height: 270,
  }
})

export default function SofiaScreen() {
  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <Image style={[styles.image1]}
          source={require('./../../assets/images/Sofia_Makeup_1.png')}
        />
      </View>
    </SafeAreaView>
    
  );
}
