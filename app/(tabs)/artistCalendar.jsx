import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { getRelativeCoords } from "react-native-reanimated";

const ArtistCalendar = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1, 
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      {/* Top Container */}
      <View
        style={styles.containerTop}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
          }}
        >
          Calendar
        </Text>
        <Text>
          Welcome back, Suah!
        </Text>
      </View>

      {/* Bottom Container */}
      <View style={styles.containerBottom}>
        <Text>
          dfsd
        </Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
    position: 'relative',
  },
  containerBottom: {
    flex: 3,
    borderColor: 'red',
    borderWidth: 1,
  },
});


export default ArtistCalendar;
