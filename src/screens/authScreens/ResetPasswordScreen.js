import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
  Image,
} from 'react-native';
import BackIcon from '../../assets/icons/twotone/arrow-left.png';

import PasswordInput from '../../components/PasswordInput';

const ResetPasswordScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  //MARK: - handleSubmission
  const handleSubmission = () => {
    const newErrors = {};
    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length <= 6) {
      newErrors.password = 'Password must be greater than 6 characters.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required.';
    } else if (confirmPassword.length <= 6) {
      newErrors.confirmPassword =
        'Confirm Password must be greater than 6 characters.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else if (password !== confirmPassword) {
      Alert.alert('Alert', 'Your passwords do not match! Please try again.');
    } else {
      setErrors({});
      console.log('Submitted', password, confirmPassword);
      setPassword('');
      setConfirmPassword('');
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }
  };

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
    <View style={styles.mainContainerview}>
      <Text style={[styles.subHeaderText, styles.fontHeaderColor]}>
        Your new password must be different from the previously used passwords.
      </Text>

      <View style={styles.textInputContainer}>
        <Text style={styles.title}>
          Password <Text style={styles.themeColor}>*</Text>
        </Text>
        <PasswordInput
          setPassword={setPassword}
          setPlaceholder="Enter new password"
        />
        {errors.password ? (
          <Text style={styles.errorMsg}>{errors.password}</Text>
        ) : null}
      </View>

      <View style={styles.textInputContainer}>
        <Text style={styles.title}>
          Confirm Password <Text style={styles.themeColor}>*</Text>
        </Text>
        <PasswordInput
          setPassword={setConfirmPassword}
          setPlaceholder="Re-enter your password"
        />
        {errors.confirmPassword ? (
          <Text style={styles.errorMsg}>{errors.confirmPassword}</Text>
        ) : null}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmission}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  mainContainerview: {
    backgroundColor: '#FBFBFD',
    flex: 1,
  },

  subHeaderText: {
    // fontFamily: 'Inter-Regular',
    fontWeight: '500',
    fontSize: 14,
    padding: 15,
    marginTop: Platform.OS === 'android' ? 10 : 0,
  },

  fontHeaderColor: {
    color: '#2A2F35',
  },

  themeColor: {
    color: '#EA7D59',
  },

  button: {
    backgroundColor: '#EA7D59',
    paddingVertical: 13,
    borderRadius: 23,
    height: 46,
    marginTop: 35,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },

  errorMsg: {
    fontSize: 12,
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
  },

  textInputContainer: {
    justifyContent: 'center',
    padding: 16,
  },

  title: {
    paddingBottom: 10,
    fontWeight: '400',
    fontSize: 12,
    color: '#707581',
  },
});
