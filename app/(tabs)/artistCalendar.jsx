import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";

const ArtistCalendar = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1, 
        alignItems: "center",
      }}
    >
      <View style={styles.containerTop}>
        <Text>
          dfsddfghfdgjhdfgjfdj
        </Text>
      </View>

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
  },
  containerBottom: {
    flex: 3,
    borderColor: 'red',
    borderWidth: 1,
  },
});


export default ArtistCalendar;
