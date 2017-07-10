import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  header: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
