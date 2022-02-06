import React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {rightArrow, rightArrowTriple} from '../assets/icons';

const Promotions = ({promotionItems}) => {
  const PromoItem = ({item}) => {
    return (
      <View>
        <Image source={item.image} style={styles.promotionImage} />
        <Text style={styles.promotionTitle}>{item.title}</Text>
      </View>
    );
  };

  const PromoFooterItem = () => {
    return (
      <View style={styles.promotionFooter}>
        <Text style={styles.promotionFooterTitle}>More Promotions</Text>
        <View style={styles.footerArrowContainer}>
          <Image style={styles.footerArrow} source={rightArrowTriple} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.horizontalContainer}>
          <Text style={styles.promotionsLabel}>Promotions</Text>
          <TouchableOpacity style={styles.moreContainer}>
            <Text style={styles.moreLabel}>More</Text>
            <Image source={rightArrow} style={styles.moreArrow} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={promotionItems}
          renderItem={PromoItem}
          horizontal
          contentContainerStyle={styles.flatlistContainer}
          ListFooterComponent={PromoFooterItem}
        />
      </View>
    </View>
  );
};

export default Promotions;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width,
    backgroundColor: 'white',
  },
  innerContainer: {
    width: width * 0.9,
    height: width * 0.7,
    alignItems: 'flex-start',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    width: width * 0.9,
  },
  promotionsLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  moreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width * 0.15,
    paddingRight: 0,
  },
  moreLabel: {
    color: '#1976d2',
    fontSize: 16,
    fontWeight: '500',
  },
  moreArrow: {
    width: 12,
    height: 12,
  },
  promotionImage: {
    width: width * 0.8,
    height: width * 0.4,
    borderRadius: 10,
    marginRight: 20,
  },
  promotionTitle: {
    fontSize: 18,
    fontWeight: '500',
    paddingTop: 5,
  },
  flatlistContainer: {
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  promotionFooter: {
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: 'white',
    justifyContent: 'space-around',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  promotionFooterTitle: {
    fontSize: 22,
    fontWeight: '600',
    width: width * 0.4,
    paddingLeft: 20,
  },
  footerArrowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  footerArrow: {
    width: 45,
    height: 45,
  },
});
