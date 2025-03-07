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
import Octicons from '@expo/vector-icons/Octicons';

const ArtistCalendar = () => {
  const users = [
    {
      id: 1,
      name: "Harper Collins",
      place: "Bahia Principle Grand",
      time: "06:00 am",
    },
    {
      id: 2,
      name: "Charlotte Brown",
      place: "The Pyramid Cancun",
      time: "07:15 am",
    },
    {
      id: 3,
      name: "Aria Clark",
      place: "Zoey Walker",
      time: "07:00 am"
    }  
  ]

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
          stickyHeaderIndices={[2]}
          showsVerticalScrollIndicator={false}
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
          <Text
            style={{
              paddingTop: 10,
              color: '#8C5627',
              fontWeight: 700,
              paddingLeft: 10,
            }}>
            Today
          </Text>

          {/* Calendar Container Below */}
          <View style={styles.calendar}>
            <Text
              style={{
                fontWeight: 700,
              }}
            >
              Natalia Rocio Flores-Silva
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 2,
                // borderColor: 'blue',
                // borderWidth: 1,
              }}
            >
              <Text style={{textAlignVertical: 'bottom'}}>
                RIU Palace Kukulkan
              </Text>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    textAlign: 'center',
                  }}
                >
                  Your Arrival Time
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    // borderColor: 'green',
                    // borderWidth: 1,
                  }}
                >
                  <Octicons name="location" size={18} color="black" marginRight={15} />
                  <Text>
                    Your Arrival Time
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* Calendar Container Above */}
          <Text
            style={{
              color: '#8C5627',
              fontWeight: 700,
              paddingLeft: 10,
            }}>
            Upcoming
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
          {
            users.map((poop) =>
              <View style={styles.calendar}>
                <Text
                  style={{
                    fontWeight: 700,
                  }}
                >
                  Natalia Rocio Flores-Silva
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 2,
                    // borderColor: 'blue',
                    // borderWidth: 1,
                  }}
                >
                  <Text style={{textAlignVertical: 'bottom'}}>
                    RIU Palace Kukulkan
                  </Text>
                  <View>
                    <Text
                      style={{
                        fontSize: 10,
                        textAlign: 'center',
                      }}
                    >
                      Your Arrival Time
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        // borderColor: 'green',
                        // borderWidth: 1,
                      }}
                    >
                      <Octicons name="location" size={18} color="black" marginRight={15} />
                      <Text>
                        Your Arrival Time
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            
            )
          }
        </ScrollView>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    flex: 1.1,
    borderColor: 'red',
    borderWidth: 1,
    position: 'relative',
  },
  containerBottom: {
    flex: 3,
    borderColor: 'red',
    borderWidth: 1,
  },
  calendar: {
    marginTop: 5,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});


export default ArtistCalendar;
