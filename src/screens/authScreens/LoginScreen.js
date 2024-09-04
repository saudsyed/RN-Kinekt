import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import PasswordInput from '../../components/PasswordInput';

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setpassword] = useState('');
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

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length <= 6) {
      newErrors.password = 'Password must be greater than 6 characters.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log('Submitted', userName, password);
      setUserName('');
      setpassword('');

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Home'}], // Replace 'Home' with your home screen name
        }),
      );
    }
  };

  //MARK: - return function
  return (
    <View style={{backgroundColor: '#FBFBFD', flex: 1}}>
      <Text style={[styles.headerText, styles.fontHeaderColor]}>Sign In</Text>
      <Text style={[styles.subHeaderText, styles.fontHeaderColor]}>
        Let’s get into the app.
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

        <Text style={styles.inputText}>
          Password <Text style={styles.themeColor}>*</Text>
        </Text>
        {/* <PasswordInput
          setPassword={setpassword}
          setPlaceholder="Enter your new password"
        /> */}
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="Enter your password"
          value={password}
          onChangeText={setpassword}
        />
        {errors.password ? (
          <Text style={styles.errorMsg}>{errors.password}</Text>
        ) : null}

        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={[styles.forgotPasswordTxt, styles.themeColor]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmission}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        By continuing you agree to our
        <Text style={[styles.bottomText, styles.themeColor]}>
          {' '}
          T&Cs
          <Text style={styles.bottomText}>
            {' '}
            and
            <Text style={[styles.bottomText, styles.themeColor]}>
              {' '}
              Privacy Policy
            </Text>
          </Text>
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  headerText: {
    // fontFamily: 'bold',
    fontWeight: '700',
    fontSize: 20,
    padding: 15,
    marginTop: Platform.OS === 'android' ? 20 : 40,
  },

  subHeaderText: {
    // fontFamily: 'Inter-Regular',
    fontWeight: '500',
    fontSize: 14,
    paddingLeft: 15,
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

  forgotPasswordTxt: {
    fontWeight: '500',
    fontSize: 12,
    marginTop: 15,
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

  bottomText: {
    // fontFamily: 'Inter-Regular',
    fontWeight: '400',
    fontSize: 13,
    color: '#707581',
    marginTop: 35,
    marginLeft: 18,
    marginRight: 18,
  },

  errorMsg: {
    fontSize: 12,
    color: 'red',
    marginTop: 10,
    marginBottom: 10,
  },
});
