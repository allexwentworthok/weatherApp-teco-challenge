import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import { HomeScreen, Forecast } from '../src/screens/index';
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
    {
        HomeScreen,
        Forecast
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'none'
    }
);
 
export default createAppContainer(AppNavigator);
