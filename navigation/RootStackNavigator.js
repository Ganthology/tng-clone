import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens';

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name='Homescreen'
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
