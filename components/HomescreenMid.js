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
import ServicesSection from './ServicesSection';
import {adImage1} from '../assets/ads';
import {rightArrow} from '../assets/icons';
import {lazadaLogo, tealiveLogo, mrdiyLogo} from '../assets/brands';

const HomeScreenMid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rewardContainer}>
        <RewardsSection />
      </View>
      <View style={styles.adContainer}>
        <Image source={adImage1} style={styles.adImage} />
      </View>
      <View style={styles.servicesContainer}>
        <ServicesSection />
      </View>
      <View style={styles.discoverMoreContainer}>
        <View style={styles.discoverMoreBrandsContainer}>
          <Image style={styles.discoverMoreBrandsLogo} source={lazadaLogo} />
          <Image style={styles.discoverMoreBrandsLogo} source={mrdiyLogo} />
          <Image style={styles.discoverMoreBrandsLogo} source={tealiveLogo} />
        </View>
        <TouchableOpacity style={styles.discoverMoreButton}>
          <Text style={styles.discoverMoreLabel}>Discover more</Text>
          <Image style={styles.discoverMoreArrow} source={rightArrow} />
        </TouchableOpacity>
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
    height: height * 0.675,
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
  servicesContainer: {
    marginTop: 20,
  },
  discoverMoreContainer: {
    marginTop: 10,
    width: width * 0.9,
    height: width * 0.13,
    backgroundColor: '#cfe8ff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discoverMoreBrandsContainer: {
    flexDirection: 'row',
    width: width * 0.3,
    justifyContent: 'space-around',
    paddingLeft: 10,
  },
  discoverMoreBrandsLogo: {width: 30, height: 30, borderRadius: 5},
  discoverMoreButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width * 0.3,
    paddingRight: 15,
  },
  discoverMoreLabel: {
    fontSize: 12,
  },
  discoverMoreArrow: {
    width: 12,
    height: 12,
  },
});
