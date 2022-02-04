import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {dollarIcon, giftboxIcon} from '../assets/icons';

const RewardsSection = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source={dollarIcon} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>GO+</Text>
          <Text style={styles.subtitle}>Enjoy returns</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source={giftboxIcon} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Rewards</Text>
          <Text style={styles.subtitle}>Earn rewards</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RewardsSection;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    width: width * 0.9,
    backgroundColor: 'transparent',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    width: width * 0.43,
    height: width * 0.175,
    borderRadius: 10,
    backgroundColor: '#cfe8ff',
    paddingLeft: 10,
  },
  cardImage: {height: 35, width: 35},
  titleContainer: {flexDirection: 'column', paddingLeft: 10},
  title: {color: 'black', fontSize: 15, fontWeight: '600'},
  subtitle: {color: 'grey', fontSize: 12},
});
