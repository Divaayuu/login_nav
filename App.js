/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'; 
import Login from './pages/login';
import {StackNavigator } from 'react-navigation';
import Biodata from './pages/biodata'

const AppStackNavigator = new StackNavigator(
  {
    BiodataPages:{screen:Biodata},
    LoginPages:{screen:Login}
  },
  {
    initialRouteName:'LoginPages'
  }
)
export default class App extends 
Component {
  render() {
    return (
      <AppStackNavigator/>

    );
  }
}
    
