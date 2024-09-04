import React, {useEffect} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import BackIcon from '../../assets/icons/twotone/arrow-left.png';
const PrivacyPolicyScreen = ({navigation}) => {
  //MARK: - useEffect (For Pop)
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{height: 24, width: 24}}
          onPress={() => navigation.goBack()}>
          <Image source={BackIcon} />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}></Text>
    </ScrollView>
  );
};

export default PrivacyPolicyScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FBFBFD',
    flex: 1,
  },

  text: {},

  boldText: {},
});
