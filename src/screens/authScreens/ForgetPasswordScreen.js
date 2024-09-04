import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import BackIcon from '../../assets/icons/twotone/arrow-left.png';

const ForgetPasswordScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [errors, setErrors] = useState({});
  const validateEmail = email => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  //MARK: - handleSubmission
  const handleSubmission = () => {
    const newErrors = {};
    if (!userName) {
      newErrors.userName = 'Email is required.';
    } else if (!validateEmail(userName)) {
      newErrors.userName = 'Email is not in correct format.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log('Submitted', userName);
      setUserName('');
      navigation.navigate('OTP');
    }
  };

  //MARK: - useEffect (For pop)
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
      {/* <Text style={[styles.headerText, styles.fontHeaderColor]}>Forgot Password</Text> */}
      <Text style={[styles.subHeaderText, styles.fontHeaderColor]}>
        Enter the email address associated with your account and we'll send
        verification code to reset your password
      </Text>

      <View style={styles.inputView}>
        <Text style={styles.inputText}>
          Email Address <Text style={styles.themeColor}>*</Text>
        </Text>

        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="Enter your email address"
          value={userName}
          onChangeText={setUserName}
        />
        {errors.userName ? (
          <Text style={styles.errorMsg}>{errors.userName}</Text>
        ) : null}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmission}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
  mainContainerview: {
    backgroundColor: '#FBFBFD',
    flex: 1,
  },

  headerText: {
    // fontFamily: 'bold',
    fontWeight: '700',
    fontSize: 20,
    padding: 15,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },

  subHeaderText: {
    // fontFamily: 'Inter-Regular',
    fontWeight: '500',
    fontSize: 14,
    padding: 15,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },

  fontHeaderColor: {
    color: '#2A2F35',
  },

  inputView: {
    marginLeft: 15,
    marginTop: 25,
    marginRight: 15,
    backgroundColor: '#FBFBFD',
  },

  inputText: {
    // fontFamily: 'Inter-Regular',
    fontWeight: '400',
    fontSize: 12,
    color: '#707581',
    marginTop: 15,
  },

  themeColor: {
    color: '#EA7D59',
  },

  inputStyle: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 23,
    height: 46,
    backgroundColor: '#f2f2f2',
    // fontFamily: 'regular',
    fontWeight: '400',
    fontSize: 13,
    marginTop: 10,
  },

  button: {
    backgroundColor: '#EA7D59',
    paddingVertical: 12,
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
});
