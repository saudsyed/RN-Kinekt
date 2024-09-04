import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import BackIcon from '../../assets/icons/twotone/arrow-left.png';

const OTPScreen = ({navigation, initialSeconds = 60}) => {
  //MARK: - OTP Field const
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    if (value === '1111') {
      setIsLoading(true);
      setTimeout(() => {
        navigation.navigate('ResetPassword');
      }, 3000);
    }
  }, [value]);

  //MARK: - Timer const and useEffect
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timer;
    if (isActive && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, secondsLeft]);

  const resetTimer = () => {
    setSecondsLeft(initialSeconds);
    setIsActive(true);
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
    <View style={styles.mainContainerView}>
      <Text style={[styles.subHeaderText, styles.fontHeaderColor]}>
        Enter the email associated with your account & we'll send verification
        code to reset your password.
      </Text>

      <View style={styles.parentView}>
        <View style={styles.codeFieldView}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <Text style={styles.timerText}>
          Expires in:{' '}
          <Text style={styles.orangeColor}> {`00:${secondsLeft}`}</Text>
        </Text>
      </View>

      {isLoading ? (
        <ActivityIndicator
          size="large"
          style={{marginTop: 100}}
          color="#EA7D59"
        />
      ) : null}

      <Text style={styles.resendText}>
        Didn’t receive code?{' '}
        <Text onPress={resetTimer} style={styles.orangeColor}>
          Resend
        </Text>
      </Text>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  mainContainerView: {
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

  parentView: {
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  codeFieldView: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  cell: {
    width: 46,
    height: 46,
    lineHeight: 42,
    fontSize: 14,
    marginHorizontal: 2.5,
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: '#f2f2f2',
    overflow: Platform.OS === 'ios' ? true : null,
  },

  timerText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#979797',
  },

  resendText: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
  },

  orangeColor: {
    color: '#EA7D59',
  },
});
