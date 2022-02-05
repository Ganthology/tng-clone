import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {moreIcon} from '../assets/icons';

const ServicesSection = () => {
  const testData = [
    {id: 1, icon: moreIcon, title: 'Toll'},
    {id: 2, icon: moreIcon, title: 'Parking'},
    {id: 3, icon: moreIcon, title: 'CarInsure'},
    {id: 4, icon: moreIcon, title: 'WalletSafe'},
    {id: 5, icon: moreIcon, title: 'Prepaid'},
    {id: 6, icon: moreIcon, title: 'Bills'},
    {id: 7, icon: moreIcon, title: 'TNB'},
    {id: 8, icon: moreIcon, title: 'A+ Rewards'},
    {id: 9, icon: moreIcon, title: 'BPHealthcare'},
    {id: 10, icon: moreIcon, title: 'FamilyMart'},
    {id: 11, icon: moreIcon, title: 'CTOS Report'},
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
  },
  serviceLabel: {
    position: 'absolute',
    top: 50,
    width: 100,
    fontSize: 12,
    textAlign: 'center',
  },
});
