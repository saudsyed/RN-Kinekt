import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import eyeIcon from '../assets/icons/eye/eye-icon.png';
import eyeSlashIcon from '../assets/icons/eye/eye-slash-icon.png';

const PasswordInput = ({setPassword, setPlaceholder}) => {
  const [isSecureText, setIsSecureText] = useState(true);

  const toggleVisibility = () => {
    setIsSecureText(!isSecureText);
  };

  return (
    <View style={styles.conatiner}>
      <TextInput
        style={styles.inputField}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={isSecureText}
        onChangeText={setPassword}
        placeholder={setPlaceholder}
      />

      <TouchableOpacity onPress={toggleVisibility} style={styles.eyeButton}>
        <Image
          source={isSecureText ? eyeSlashIcon : eyeIcon}
          style={styles.eyeIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#F6F7F9',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 23,
    height: 46,
  },

  inputField: {
    fontWeight: '400',
    fontSize: 13,
    paddingHorizontal: 10,
    flex: 1,
  },

  eyeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  icon: {
    width: 24,
    height: 24,
  },
});
