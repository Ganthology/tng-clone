import React from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

const Highlights = ({campaignItems}) => {
  const renderItem = ({item}) => {
    return (
      <View>
        <Image source={item.image} style={styles.highlightImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.highlightLabel}>Highlights</Text>
        <FlatList
          data={campaignItems}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={styles.flatlistContainer}
        />
      </View>
    </View>
  );
};

export default Highlights;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width,
    backgroundColor: '#f9c74f',
  },
  innerContainer: {
    width: width * 0.9,
    height: width * 0.825,
  },
  flatlistContainer: {
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  highlightLabel: {
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 15,
  },
  highlightImage: {
    width: width * 0.4,
    height: width * 0.6,
    borderRadius: 10,
    marginRight: 20,
  },
});
