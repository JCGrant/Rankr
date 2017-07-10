import React from 'react';
import { Platform } from 'react-native';
import { Constants } from 'expo'
import { StackNavigator } from 'react-navigation';
import Home from './components/Home.js';
import Profile from './components/Profile.js';

const navigationMarginBottom = 20;

export default App = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Profile: { screen: Profile },
  },
  {
    cardStyle: {
      marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
      paddingTop: Platform.OS === 'ios' ? navigationMarginBottom : 0,
      backgroundColor: 'white',
    },
    navigationOptions: {
      headerStyle: {
        marginBottom: Platform.OS === 'ios' ? 0 : navigationMarginBottom,
        backgroundColor: 'white',
      },
      headerBackTitle: null,
    },
  }
);
