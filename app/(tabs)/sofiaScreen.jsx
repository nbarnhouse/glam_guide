import { Image, View, StyleSheet, Text } from "react-native";
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from 'expo-font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 2,
  },
  image1: {
    width: '100%',
    height: 270,
  },
  upcoming: {
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: 'Aboreto-Regular',
  },
})

export default function SofiaScreen() {
  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <Image style={[styles.image1]}
          source={require('./../../assets/images/Sofia_Makeup_1.png')}
        />
      </View>
      <Text style={[styles.upcoming]}> Upcoming </Text>
    </SafeAreaView>
    
  );
}
