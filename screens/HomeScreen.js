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
import {
  HomescreenHeader,
  HomeScreenMid,
  Highlights,
  Promotions,
  MyStatusBar,
} from '../components';
import {
  adImage2,
  adImage3,
  adImage4,
  adImage5,
  adImage6,
  adImage7,
} from '../assets/ads';

const HomeScreen = () => {
  const campaignItems = [
    {id: 1, image: adImage2},
    {id: 2, image: adImage3},
    {id: 3, image: adImage4},
  ];

  const promotionItems = [
    {id: 1, image: adImage5, title: 'Find Out More'},
    {id: 2, image: adImage6, title: 'Grab this voucher'},
    {id: 3, image: adImage7, title: 'Get It Now'},
  ];

  return (
    <View style={styles.container}>
      {StatusBar.setBarStyle('light-content', true)}
      <MyStatusBar backgroundColor='#1976d2' barStyle='light-content' />
      <ScrollView>
        <HomescreenHeader />
        <HomeScreenMid />
        <Highlights campaignItems={campaignItems} />
        <Promotions promotionItems={promotionItems} />
      </ScrollView>

      {/* <View id='Footer'>
        <Text>Image of tng logo and Alipay Partner</Text>
      </View> */}
    </View>
  );
};

export default HomeScreen;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    // backgroundColor: 'white',
  },
});
