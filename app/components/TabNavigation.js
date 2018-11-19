import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import LocationScreen from './LocationScreen';
import ProfileScreen from  './ProfileScreen';
import ListScreen from './ListScreen';



const TabNav =  TabNavigator(
  {
    Home: { screen: ListScreen },
    Location: { screen: LocationScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName ='home';
        } 
        else if (routeName === 'Location') {
          iconName  ='map-marker';
        }
        else if (routeName === 'Profile') {
          iconName  ='tune';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
        
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default TabNav;