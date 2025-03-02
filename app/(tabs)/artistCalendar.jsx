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
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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
          stickyHeaderIndices={[7]}
          showsVerticalScrollIndicator={true}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MaterialIcons name="translate" size={20} color="grey" alignItems='bottom' marginTop={5}/>
            <Text
              style={{
                fontWeight: '150',
                color: 'grey',
                fontSize: 18,
                marginTop: 5,
                alignSelf: 'center',
              }}
            >
              Translation: On
            </Text>
          </View>
          

          <Text
            style={{
              fontWeight: '700',
              fontSize: 18,
              marginTop: 5,
            }}
          >
            Calendar
          </Text>
          <Text>
            Welcome back, Suah!
          </Text>
          <FontAwesome6 name="sliders" size={24} color="black"
            style={{
              position: 'absolute',
              right: 0,
            }}
          />
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
