import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  moreIcon,
  tollIcon,
  parkingIcon,
  carInsureIcon,
  walletSafeIcon,
  prepaidIcon,
  billsIcon,
  aplusrewardsIcon,
} from '../assets/icons';
import {ctosLogo, bpLogo, familymartLogo, tnbLogo} from '../assets/brands';

const ServicesSection = () => {
  const testData = [
    {id: 1, icon: tollIcon, title: 'Toll'},
    {id: 2, icon: parkingIcon, title: 'Parking'},
    {id: 3, icon: carInsureIcon, title: 'CarInsure'},
    {id: 4, icon: walletSafeIcon, title: 'WalletSafe'},
    {id: 5, icon: prepaidIcon, title: 'Prepaid'},
    {id: 6, icon: billsIcon, title: 'Bills'},
    {id: 7, icon: tnbLogo, title: 'TNB'},
    {id: 8, icon: aplusrewardsIcon, title: 'A+ Rewards'},
    {id: 9, icon: bpLogo, title: 'BPHealthcare'},
    {id: 10, icon: familymartLogo, title: 'FamilyMart'},
    {id: 11, icon: ctosLogo, title: 'CTOS Report'},
    {id: 12, icon: moreIcon, title: 'More'},
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.serviceContainer}>
        <Image source={item.icon} style={styles.serviceIcon} />
        <Text style={styles.serviceLabel}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={testData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={4}
        columnWrapperStyle={styles.row}
      />
      {/* {testData.map(item => renderItem(item))} */}
    </View>
  );
};

export default ServicesSection;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // width: width * 0.9,
    height: width * 0.55,
    backgroundColor: 'transparent',
  },
  row: {
    // width: width * 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  serviceContainer: {
    width: width / 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceIcon: {
    width: 45,
    height: 45,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  serviceLabel: {
    position: 'absolute',
    top: 50,
    width: 100,
    fontSize: 12,
    textAlign: 'center',
  },
});
