import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';
import {MyStatusBar, Navbar} from '../components';

const AccountItems = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text>Icon</Text>
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: '1',
          borderBottomColor: 'black',
        }}>
        <Text>My Tier</Text>
        <Text>></Text>
      </View>
    </View>
  );
};

const AccountScreen = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <View>
      {StatusBar.setBarStyle('light-content', true)}
      <MyStatusBar backgroundColor='#1976d2' barStyle='light-content' />
      <Navbar backgroundColor={'#1976d2'} />
      <View
        id={'Upper Container'}
        style={{
          justifyContent: 'space-evenly',
          height: height * 0.35,
          backgroundColor: '#1976d2',
        }}>
        <View
          id={'Account Header Container'}
          style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View id={'Inbox Container'}>
            <Text>Email Icon</Text>
            <Text>Inbox</Text>
          </View>
          <View>
            <Text>Account Icon</Text>
          </View>
          <View>
            <Text>Edit Info Icon</Text>
            <Text>Edit Info</Text>
          </View>
        </View>
        <View id={'Account Details Container'} style={{alignItems: 'center'}}>
          <Text>Gan Boon Kit</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>DuitNow Icon</Text>
            <Text>110629305423</Text>
            <Text>Copy Icon</Text>
          </View>
        </View>
        <View
          id={'Upgrade Premium Container'}
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            width: width * 0.9,
          }}>
          <Text>Lock Icon</Text>
          <View style={{width: width * 0.8}}>
            <Text>Upgrade to the PREMIUM tier to unlock more benefits!</Text>
            <Text>Upgrade Now</Text>
          </View>
        </View>
      </View>
      <View id={'Bottom Container'}>
        <View
          style={{
            alignSelf: 'center',
            width: width * 0.9,
            flexDirection: 'row',
          }}>
          <Text>Icon</Text>
          <View style={{width: width * 0.8}}>
            <Text>
              Your account is 70% secure. Make it even safer with face
              verification now!
            </Text>
            <Text>Enable now ></Text>
          </View>
        </View>
        <FlatList
          data={[1, 2, 0, 0, 0, 0, 0]}
          renderItem={() => <AccountItems />}
        />
        <Text>Version Number</Text>
      </View>
    </View>
  );
};

export default AccountScreen;
