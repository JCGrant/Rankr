import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Rankr</Text>
        <Text>#2706</Text>
        <Image source={require('./img/girl.jpg')} />
        <Text>7.6<Text>83</Text></Text>
        <Image source={require('.img/swipe-icon.svg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
