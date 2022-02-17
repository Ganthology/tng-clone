import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, AccountScreen} from '../screens';

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
