import React from 'react';
import {View, Image, StyleSheet, Dimensions, Text} from 'react-native';
import {tngLogo, alipayLogo} from '../assets/brands';

const HomescreenFooter = () => {
  return (
    <View style={styles.container}>
      <View style={styles.brandsContainer}>
        <Image source={tngLogo} style={styles.tngLogo} />
        <Text style={styles.brandsDivider}>│</Text>
        <Image source={alipayLogo} style={styles.alipayLogo} />
      </View>
    </View>
  );
};

export default HomescreenFooter;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: width * 0.4,
    backgroundColor: 'white',
  },
  brandsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width * 0.5,
  },
  tngLogo: {
    width: 35,
    height: 35,
  },
  alipayLogo: {
    width: 100,
    height: 40,
  },
  brandsDivider: {
    fontSize: 40,
    fontWeight: '100',
    color: 'grey',
  },
});
