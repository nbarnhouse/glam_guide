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
    detailsInfoLeft: {
    flex: .8,
    flexDirection: 'column',
    borderColor: 'green',
    borderWidth: 1,
    paddingLeft: 30,
  },
    detailsInfoRight: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'red',
    borderWidth: 1,
    marginLeftLeft: 100,
  },
  textAndImage: {
    flexDirection: 'row',
    borderColor: 'purple',
    borderWidth: 2,
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
  fontBold: {
    fontWeight: 'bold',
  },
  paddingTop15: {
    paddingTop: 15,
  },
  paddingTop80: {
    marginTop: 80,
  },
  underline: {
    textDecorationLine: 'underline',
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

      {/* Top Row */}
      <Text style={[styles.upcoming]}> Upcoming </Text>
      <Text style={[styles.firstName]}> SOFIA </Text>

      {/* Left Column */}
      <View style={[styles.details]}>
        <View style={[styles.detailsInfoLeft]}>
          <Text style={[styles.fontBold]}>Wedding Date:</Text>
          <Text style={[styles.fontBold, styles.paddingTop15]}>Service Location:</Text>
            <Text>Moon Palace Cancun</Text>
            <Text>Chetumal Km 340,</Text>
            <Text>Riviera Maya, 77500</Text>
            <Text>Zona Hoterlera</Text>
          <Text style={[styles.fontBold, styles.paddingTop15]}>Arrival Time:</Text>
          <Text style={[styles.fontBold]}>End Time:</Text>
          <Text style={[styles.fontBold, styles.paddingTop15]}>Contact #</Text>
          <Text style={[styles.fontBold, styles.paddingTop15]}>Expected</Text>
          <Text style={[styles.fontBold]}>Earnings</Text>
          <Text style={[styles.fontBold, styles.paddingTop15]}>Payout Date</Text>
        </View>

        {/* Right Column */}
        <View style={[styles.detailsInfoRight]}>
          <Text>August 5th, 2025</Text>
          <View style={[styles.textAndImage]}>

            <Image />

            <Text style={[styles.underline, styles.paddingTop15]}>Directions</Text>
          </View>
          
          <Text style={[styles.paddingTop80]}>07:00 am</Text>
          <Text>13:00 pm</Text>
          <Text style={[styles.underline, styles.paddingTop15]}>52 +1 998 151 7878</Text>
          <Text style={[styles.paddingTop15]}>$1050.00 USD</Text>
          <Text>($21,560.00 MX)</Text>
          <Text style={[styles.paddingTop15]}>December 12th, 2024</Text>
        </View>
      </View>

      {/* Bottom Row */}
      <View style={[styles.messagebtn]}>
        <Text>btn</Text>
      </View>
    </SafeAreaView>
  );
}
