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
import {HomescreenHeader, HomeScreenMid} from '../components';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {StatusBar.setBarStyle('light-content', true)}
      <ScrollView>
        <View style={styles.header}>
          <HomescreenHeader />
        </View>
        <View style={styles.mid}>
          <HomeScreenMid />
        </View>
      </ScrollView>

      {/* <View id='Middle section'>
        <Text>Ads</Text>
        <Text>Go+, My Rewards</Text>
        <Text>List of services (Link to another stack)</Text>
        <Text>Discover more (Link to modal)</Text>
        <Text>Low Balance reminder</Text>
      </View> */}
      {/* <View id='Highlights'>
        <Text>Flatlist of campaigns (Link to modal)</Text>
      </View>
      <View id='Promotions'>
        <Text>Flatlist of promotions (Link to new stack and modal)</Text>
      </View>
      <View id='Footer'>
        <Text>Image of tng logo and Alipay Partner</Text>
      </View> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    backgroundColor: '#1976d2',
  },
  header: {
    height: height * 0.3,
  },
  mid: {
    height: height * 0.7,
  },
});
