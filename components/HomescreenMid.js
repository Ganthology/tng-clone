import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import RewardsSection from './RewardsSection';
import adImage from '../assets/adImage.jpg';

const HomeScreenMid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rewardContainer}>
        <RewardsSection />
      </View>
      <View style={styles.adContainer}>
        <Image source={adImage} style={styles.adImage} />
      </View>
    </View>
  );
};

export default HomeScreenMid;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: height * 0.7,
  },
  rewardContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 10,
  },
  adContainer: {
    backgroundColor: 'yellow',
    marginTop: 20,
  },
  adImage: {
    width: width * 0.9,
    height: width * 0.4,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
});
