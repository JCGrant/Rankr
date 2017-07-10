import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'RANKR',
  }

  _onPressPicture = () => {
    this.props.navigation.navigate('Profile');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.rankText}>#2706</Text>
          <TouchableOpacity onPress={this._onPressPicture}>
            <Image style={styles.homeImage} source={require('../img/girl.jpg')} />
          </TouchableOpacity>
          <Text style={styles.scoreText}>7.6<Text style={styles.subScoreText}>83</Text></Text>
        </View>
        <View style={styles.bottom}>
          <MaterialCommunityIcons name="cards-outline" size={36} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  top: {
    flex: 2,
    alignItems: 'center',
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  header: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  rankText: {
    fontSize: 20,
  },

  homeImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
    margin: 20,
  },

  scoreText: {
    fontSize: 120,
  },

  subScoreText: {
    fontSize: 28,
  }
});
