import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const notificationScreenItem = ({notificationData}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: notificationData.image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.message}>{notificationData.notification}</Text>
        <Text style={styles.timeStamp}>{notificationData.time}</Text>
      </View>
    </View>
  );
};

export default notificationScreenItem;

const styles = StyleSheet.create({
  container: {
    height: 61,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },

  image: {
    width: 45,
    height: 45,
    marginRight: 10,
    borderRadius: 45 / 2,
    marginLeft: 5,
    backgroundColor: 'black',
  },

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    // paddingRight: 10,
  },

  message: {
    color: '#2A2F35',
    fontSize: 12,
    fontWeight: '400',
    paddingRight: 10,
    flex: 1,
  },

  timeStamp: {
    color: '#2A2F35',
    fontSize: 12,
    fontWeight: '400',
    // marginRight: Platform.OS === 'android' ? 20 : 15,
  },
});
