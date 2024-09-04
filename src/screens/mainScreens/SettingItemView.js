import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SettingItemView = ({ title, detail, id }) => {
  return (
    <View key={id} style={styles.containerView}>
      <Text style={styles.titleTxt}>{title}</Text>
      <Text style={styles.detailTxt}>{detail}</Text>
    </View>
  );
};

export default SettingItemView;

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'column',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },

  titleTxt: {
    fontWeight: '400',
    fontSize: 15,
    color: '#979797',
    padding: 0,
    marginBottom: 8,
  },

  detailTxt: {
    fontWeight: '400',
    fontSize: 15,
    color: '#2A2F35',
    padding: 0,
    marginBottom: 8,
  },
});
