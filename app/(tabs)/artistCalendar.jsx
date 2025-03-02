import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  StatusBar,
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
      <View style={styles.containerTop}>
        <ScrollView
          stickyHeaderIndices={[1]}
          showsVerticalScrollIndicator={true}
        >
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
        </ScrollView>  
      </View>

      {/* Bottom Container */}
      <View style={styles.containerBottom}>
        <ScrollView>
          <Text style={{fontSize: 35}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
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
