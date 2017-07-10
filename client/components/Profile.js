import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Profile extends React.Component {
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
    marginTop: 25,
    marginBottom: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  header: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
