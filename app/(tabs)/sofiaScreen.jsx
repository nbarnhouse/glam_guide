import { Platform, Image, TouchableOpacity, Button, View, StyleSheet, Text } from "react-native";
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';

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
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 0,
  },
  details: {
    flex: 5,
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 0,
  },
  detailsInfoLeft: {
    flex: .8,
    flexDirection: 'column',
    borderColor: 'green',
    borderWidth: 0,
    paddingLeft: 30,
    marginLeft: 10,
  },
  detailsInfoRight: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'red',
    borderWidth: 0,
    marginLeft: 0,
    marginRight: 30,
    paddingRight: 30,
  },
  textAndImage: {
    flexDirection: 'row',
    borderColor: 'purple',
    borderWidth: 0,
  },
  textAlignR: {
    textAlign: 'right',
  },
  justifyContentE: {
    justifyContent: 'flex-end',
  },
  btnBottom: {
    borderColor: 'red',
    borderWidth: 1,
    width: 220,   // Set button width
    height: 35,   // Set button height
    marginLeft: '25%',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden', // Needed for borderRadius to work
  },
  image1: {
    width: '100%',
    height: 270,
  },
  infoIcon: {
    position: 'absolute',
    left: -20,
    top: 17,
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
  paddingTop25: {
    paddingTop: 25,
  },
  paddingTop10: {
    paddingTop: 10,
  },
  paddingTop60: {
    marginTop: 60,
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

          <View style={[styles.textAndImage]}>
            <Feather style={[styles.infoIcon]} name="info" size={15} color="black"/>
            <Text style={[styles.fontBold, styles.paddingTop15]}>Expected</Text>  
          </View>
          <Text style={[styles.fontBold]}>Earnings</Text>
          <View style={[styles.textAndImage]}>
            <Feather style={[styles.infoIcon]} name="info" size={15} color="black"/>
            <Text style={[styles.fontBold, styles.paddingTop15]}>Payout Date</Text>
          </View>
          
        </View>

        {/* Right Column */}
        <View style={[styles.detailsInfoRight, styles.textAlignR]}>
          <Text style={[styles.textAlignR]}>August 5th, 2025</Text>
          
          <View style={[styles.textAndImage, styles.justifyContentE, styles.paddingTop25]}>
            <EvilIcons style={[styles.paddingTop10]} name="location" size={24} color="black"/>
            <Text style={[styles.underline, styles.paddingTop15, styles.textAlignR ]}>Directions</Text>
          </View>
          
          <Text style={[styles.paddingTop60, styles.textAlignR]}>07:00 am</Text>
          <Text style={[styles.textAlignR]}>13:00 pm</Text>
          <Text style={[styles.underline, styles.paddingTop15, styles.textAlignR]}>52 +1 998 151 7878</Text>
          <Text style={[styles.paddingTop15, styles.textAlignR]}>$1050.00 USD</Text>
          <Text style={[styles.textAlignR]}>($21,560.00 MX)</Text>
          <Text style={[styles.paddingTop15, styles.textAlignR]}>December 12th, 2024</Text>
        </View>
      </View>

      {/* Bottom Row */}
      <View style={[styles.btnBottom]}>
        <TouchableOpacity></TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
