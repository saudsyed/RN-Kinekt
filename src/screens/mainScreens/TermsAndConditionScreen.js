import React, {useEffect} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import BackIcon from '../../assets/icons/twotone/arrow-left.png';

const TermsAndConditionScreen = ({navigation}) => {
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
      <Text></Text>
    </ScrollView>
  );
};

export default TermsAndConditionScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFBFD',
    flex: 1,
    padding: 16,
  },

  text: {
    ontSize: 16,
  },

  boldText: {},
});
