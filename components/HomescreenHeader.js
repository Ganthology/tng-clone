import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {userIcon} from '../assets/icons';
import PaymentOption from './PaymentOption';

const HomescreenHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        <Text style={styles.ewalletLabel}>eWallet Balance</Text>
      </View>
      <View style={styles.horizontalContainer}>
        <Text style={styles.balanceLabel}>RM 0.14</Text>
        <TouchableOpacity style={styles.userButtonContainer}>
          <Image style={styles.userIcon} source={userIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.horizontalContainer_reload}>
        <TouchableOpacity
          style={styles.reloadButtonContainer}
          activeOpacity={0.9}>
          <Text style={styles.reloadButtonLabel}>+ Reload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transactionHistoryContainer}>
          <Text style={styles.transactionHistoryLabel}>
            Transaction History >
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentOption}>
        <PaymentOption />
      </View>
      <View style={styles.bottomPad} />
    </View>
  );
};

export default HomescreenHeader;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1976d2',
    alignItems: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    paddingTop: width * 0.02,
  },
  horizontalContainer_reload: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: width * 0.9,
    paddingTop: width * 0.02,
  },
  ewalletLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
    opacity: 0.5,
  },
  balanceLabel: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
  },
  reloadButtonContainer: {
    backgroundColor: 'white',
    width: width * 0.4,
    height: width * 0.1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reloadButtonLabel: {
    fontSize: 16,
    // color: '#007aff',
    color: '#1976d2',
  },
  transactionHistoryContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.5,
    height: width * 0.1,
  },
  transactionHistoryLabel: {
    fontSize: 16,
    color: 'white',
  },
  userButtonContainer: {
    backgroundColor: '#90e0ef',
    width: width * 0.12,
    height: width * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.12,
  },
  userIcon: {
    width: width * 0.05,
    height: width * 0.05,
  },
  paymentOption: {
    paddingTop: 20,
  },
  bottomPad: {
    position: 'absolute',
    backgroundColor: 'white',
    height: width * 0.15,
    width: width,
    top: width * 0.5,
    left: 0,
    zIndex: -1,
  },
});
