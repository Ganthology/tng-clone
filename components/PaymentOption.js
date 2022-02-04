import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {scanIcon, payIcon, transferIcon, cashoutIcon} from '../assets/icons';

const PaymentOption = () => {
  return (
    <View style={styles.container}>
      <View style={styles.optionContainer}>
        <Image style={styles.optionImage} source={scanIcon} />
        <Text style={styles.optionLabel}>Scan</Text>
      </View>
      <View style={styles.optionContainer}>
        <Image style={styles.optionImage} source={payIcon} />
        <Text style={styles.optionLabel}>Pay</Text>
      </View>
      <View style={styles.optionContainer}>
        <Image style={styles.optionImage} source={transferIcon} />
        <Text style={styles.optionLabel}>Transfer</Text>
      </View>
      <View style={styles.optionContainer}>
        <Image style={styles.optionImage} source={cashoutIcon} />
        <Text style={styles.optionLabel}>Cash Out</Text>
      </View>
    </View>
  );
};

export default PaymentOption;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    width: width * 0.9,
    height: width * 0.25,
    justifyContent: 'space-around',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  optionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // height: width * 0.25,
  },
  optionImage: {
    height: 40,
    width: 40,
  },
  optionLabel: {
    paddingTop: 10,
    fontSize: 14,
  },
});
