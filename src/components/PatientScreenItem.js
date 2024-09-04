import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import selectedRadioIcon from '../assets/icons/radioButton/selected-radio-icon.png';
import unSelectedRadioIcon from '../assets/icons/radioButton/unSelected-radio-icon.png';
import selectedCheckboxIcon from '../assets/icons/checkboxButton/selected-checkbox-icon.png';
import unSelectedCheckboxIcon from '../assets/icons/checkboxButton/unSelected-checkbox-icon.png';

const PatientScreenItem = ({
  item,
  isSelected,
  onPress,
  isRadio,
  isCheckbox,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.childContainer}>
        <Text style={styles.text}>{item.name}</Text>
        {isRadio ? (
          <CheckBox
            checked={isSelected}
            onPress={() => onPress(item.id)}
            checkedIcon={
              <Image source={selectedRadioIcon} style={styles.checkBox} />
            }
            uncheckedIcon={
              <Image source={unSelectedRadioIcon} style={styles.checkBox} />
            }
            style={styles.checkBox}
          />
        ) : null}

        {isCheckbox ? (
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
        ) : null}
      </View>
    </View>
  );
};

export default PatientScreenItem;

const styles = StyleSheet.create({
  container: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    backgroundColor: '#FFFFFF',
  },

  childContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
  },

  text: {
    color: '#2A2F35',
    fontSize: 14,
    fontWeight: '400',
  },

  checkBox: {
    height: 24,
    width: 24,
  },
});
