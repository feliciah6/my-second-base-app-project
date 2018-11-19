import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import TabNavigation from './TabNavigation'
//import { StackNavigator } from "react-navigation";
export default class HomeScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null,
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTitleStyle: {
      textAlign:'left', 
      justifyContent: 'center',
      alignSelf:'flex-start',
    },
    headerTintColor: '#fff',
  };
  render() {
    return (
      <View style={styles.container}>
      <TabNavigation/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
