import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is Home Screen</Text>
      <View id='Header section'>
        <Text>
          Blue Part (eWallet Balance, Account Button, Reload, Transaction
          History)
        </Text>
      </View>
      <View id='Middle section'>
        <Text>Go+, My Rewards</Text>
        <Text>List of services (Link to another stack)</Text>
        <Text>Discover more (Link to modal)</Text>
        <Text>Low Balance reminder</Text>
      </View>
      <View id='Highlights'>
        <Text>Flatlist of campaigns (Link to modal)</Text>
      </View>
      <View id='Promotions'>
        <Text>Flatlist of promotions (Link to new stack and modal)</Text>
      </View>
      <View id='Footer'>
        <Text>Image of tng logo and Alipay Partner</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
