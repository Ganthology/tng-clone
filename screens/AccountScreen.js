import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import {MyStatusBar, Navbar} from '../components';

const AccountScreen = () => {
  return (
    <View>
      {StatusBar.setBarStyle('light-content', true)}
      <MyStatusBar backgroundColor='#1976d2' barStyle='light-content' />
      <Navbar backgroundColor={'#1976d2'} />
      <Text>This is AccountScreen</Text>
    </View>
  );
};

export default AccountScreen;
