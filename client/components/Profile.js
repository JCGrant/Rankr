import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.profileImage} source={require('../img/girl.jpg')} />
        <View style={styles.info}>
          <Text style={styles.name}>Daisy<Text style={styles.age}>, 24</Text></Text>
          <View style={styles.location}>
            <EvilIcons style={styles.locationIcon} name="location" size={20} />
            <Text style={styles.locationName}>Plymouth, UK</Text>
          </View>
          <View style={styles.line}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  profileImage: {
    alignItems: 'flex-start',
    flex: 1,
  },

  info: {
    flex: 1,
    marginLeft: 20,
  },

  age: {
    fontSize: 18,
    fontWeight: 'normal',
  },

  name: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },

  location: {
    flexDirection: 'row',
    marginTop: 8,
  },

  locationIcon: {
    marginLeft: -4,
  },

  locationName: {
    marginLeft: 4,
  },

  line: {
    marginTop: 6,
    marginLeft: -20,
    height: 1,
    width: 500,
    backgroundColor: 'black'
  },

});
