import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const HomeScreenItem = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(item)}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.subTitle}</Text>
    </TouchableOpacity>
  );
};

export default HomeScreenItem;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('screen').width / 2 - 25,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },

  icon: {
    height: 40,
    width: 40,
  },

  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2A2F35',
    paddingTop: 10,
  },

  subTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#979797',
    paddingTop: 10,
    paddingBottom: 20,
  },
});
