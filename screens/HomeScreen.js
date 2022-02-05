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
import {HomescreenHeader, HomeScreenMid, Highlights} from '../components';
import {adImage2, adImage3, adImage4} from '../assets/ads';

const HomeScreen = () => {
  const campaignItems = [
    {id: 1, image: adImage2},
    {id: 2, image: adImage3},
    {id: 3, image: adImage4},
  ];

  return (
    <SafeAreaView style={styles.container}>
      {StatusBar.setBarStyle('light-content', true)}
      <ScrollView>
        <HomescreenHeader />
        <HomeScreenMid />
        <Highlights campaignItems={campaignItems} />
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
});
