import { Platform, Image, View, StyleSheet, Text } from "react-native";
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from 'expo-font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 0,
  },
  details: {
    flex: 5,
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 2,
  },
    detailsInfo: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 0,
  },
  messagebtn: {
    flex: 1,
    borderColor: 'blue',
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
  firstName: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Aboreto-Regular',
    borderColor: 'blue',
    borderWidth: 0,
  },
  aboreto: {
    fontFamily: Platform.select({
      android: 'Aboreto-Regular',
    }),
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
      <Text style={[styles.firstName]}> SOFIA </Text>

      <View style={[styles.details]}>
        <View style={[styles.detailsInfo]}></View>
        <View style={[styles.detailsInfo]}></View>
      </View>

      <View style={[styles.messagebtn]}>
        <Text>btn</Text>
      </View>
    </SafeAreaView>
    
  );
}
