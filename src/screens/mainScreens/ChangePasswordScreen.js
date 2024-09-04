import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

import BackIcon from '../../assets/icons/twotone/arrow-left.png';
import PasswordInput from '../../components/PasswordInput';

const ChangePasswordScreen = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

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

  //MARK: - handleSubmission
  const handleSubmission = () => {
    const newErrors = {};

    if (!oldPassword) {
      newErrors.oldPassword = 'Password is required.';
    } else if (oldPassword.length <= 6) {
      newErrors.oldPassword = 'Password must be greater than 6 characters.';
    }

    if (!newPassword) {
      newErrors.newPassword = 'New Password is required.';
    } else if (newPassword.length <= 6) {
      newErrors.newPassword = 'New Password must be greater than 6 characters.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required.';
    } else if (confirmPassword.length <= 6) {
      newErrors.confirmPassword =
        'Confirm Password must be greater than 6 characters.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else if (newPassword !== confirmPassword) {
      setErrors({});
      newErrors.newPassword = 'Password do not matched!';
      newErrors.confirmPassword = 'Password do not matched!';
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log('Submitted', oldPassword, newPassword, confirmPassword);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');

      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <Text style={styles.title}>
          Current Password <Text style={styles.themeColor}>*</Text>
        </Text>
        <PasswordInput
          setPassword={setOldPassword}
          setPlaceholder="Enter your current password"
        />
        {errors.oldPassword ? (
          <Text style={styles.errorMsg}>{errors.oldPassword}</Text>
        ) : null}
      </View>

      <View style={styles.textInputContainer}>
        <Text style={styles.title}>
          New Password <Text style={styles.themeColor}>*</Text>
        </Text>
        <PasswordInput
          setPassword={setNewPassword}
          setPlaceholder="Enter your new password"
        />
        {errors.newPassword ? (
          <Text style={styles.errorMsg}>{errors.newPassword}</Text>
        ) : null}
      </View>

      <View style={styles.textInputContainer}>
        <Text style={styles.title}>
          Confirm Password <Text style={styles.themeColor}>*</Text>
        </Text>
        <PasswordInput
          setPassword={setConfirmPassword}
          setPlaceholder="Re enter your new password"
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

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFBFD',
    flex: 1,
  },

  textInputContainer: {
    justifyContent: 'center',
    padding: 16,
  },

  title: {
    paddingBottom: 10,
  },

  themeColor: {
    color: '#EA7D59',
  },

  button: {
    backgroundColor: '#EA7D59',
    paddingVertical: 13,
    borderRadius: 23,
    height: 46,
    margin: 16,
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
});
