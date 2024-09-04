import {StyleSheet, View, Text, Image} from 'react-native';
import {CheckBox} from 'react-native-elements';

import selectedCheckboxIcon from '../assets/icons/checkboxButton/selected-checkbox-icon.png';
import unSelectedCheckboxIcon from '../assets/icons/checkboxButton/unSelected-checkbox-icon.png';

const DeactivateAccountScreenItem = ({item, isSelected, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.reason}</Text>
      <CheckBox
        checked={isSelected}
        onPress={() => onPress(item.id)}
        checkedIcon={
          <Image source={selectedCheckboxIcon} style={styles.checkBox} />
        }
        uncheckedIcon={
          <Image source={unSelectedCheckboxIcon} style={styles.checkBox} />
        }
        style={styles.checkBox}
      />
    </View>
  );
};

export default DeactivateAccountScreenItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 14,
    fontWeight: '400',
    color: '#2A2F35',
    flex: 1,
    // paddingRight: 60,
  },

  checkBox: {
    height: 24,
    width: 24,
  },
});
