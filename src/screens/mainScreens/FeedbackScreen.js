import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FeedbackScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Feedback Screen</Text>
    </View>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBFBFD',
    flex: 1,
  },
  text: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
});
