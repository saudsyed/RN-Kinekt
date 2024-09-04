import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from '../screens/authScreens/LoginScreen';
import ForgetPasswordScreen from '../screens/authScreens/ForgetPasswordScreen';
import ResetPasswordScreen from '../screens/authScreens/ResetPasswordScreen';
import OTPScreen from '../screens/authScreens/OTPScreen';

import MyProfileScreen from '../screens/mainScreens/MyProfileScreen';
import NotificationScreen from '..//screens/mainScreens/NotificationScreen';
import PatientScreen from '../screens/mainScreens/PatientScreen';
import InstantFeedbackScreen from '../screens/mainScreens/InstantFeedbackScreen';
import VideoTestimonialScreen from '../screens/mainScreens/VideoTestimonialScreen';
import SocialRequestScreen from '../screens/mainScreens/SocialRequestScreen';
import FeedbackRequestScreen from '../screens/mainScreens/FeedbackRequestScreen';
import ChangePasswordScreen from '../screens/mainScreens/ChangePasswordScreen';
import DeactivateAccounntScreen from '../screens/mainScreens/DeactiveAccountScreen';
import TermsAndConditionScreen from '../screens/mainScreens/TermsAndConditionScreen';
import PrivacyPolicyScreen from '../screens/mainScreens/PrivacyPolicyScreen';

import BackIcon from '../assets/icons/twotone/arrow-left.png';
import {Image, TouchableOpacity} from 'react-native';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '700',
          },
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Sign In',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPasswordScreen}
          options={{
            title: 'Forgot Password',
            headerLeft: () => (
              <TouchableOpacity
                style={{height: 24, width: 24}}
                onPress={() => console.log('back')}>
                <Image source={BackIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="OTP"
          component={OTPScreen}
          options={{
            title: 'OTP Verification',
            headerLeft: () => (
              <TouchableOpacity
                style={{height: 24, width: 24}}
                onPress={() => console.log('back')}>
                <Image source={BackIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{
            title: 'Reset Password',
            headerLeft: () => (
              <TouchableOpacity
                style={{height: 24, width: 24}}
                onPress={() => console.log('back')}>
                <Image source={BackIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={MyProfileScreen}
          options={{
            title: 'My Profile',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '500',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{height: 24, width: 24}}
                onPress={() => console.log('back')}>
                <Image source={BackIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: 'Notifications',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '500',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{height: 24, width: 24}}
                onPress={() => console.log('back')}>
                <Image source={BackIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Patient"
          component={PatientScreen}
          options={{
            title: 'Patients',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '500',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{height: 24, width: 24}}
                onPress={() => console.log('back')}>
                <Image source={BackIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="InstantFeedback"
          component={InstantFeedbackScreen}
          options={{
            title: 'Select Patient',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '500',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{height: 24, width: 24}}
                onPress={() => console.log('back')}>
                <Image source={BackIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="VideoTestimonial"
          component={VideoTestimonialScreen}
          options={{
            title: 'Select Patient',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '500',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{height: 24, width: 24}}
                onPress={() => console.log('back')}>
                <Image source={BackIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="FeedbackRequest"
          component={FeedbackRequestScreen}
          options={{
            title: 'Select Patients',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '500',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{height: 24, width: 24}}
                onPress={() => console.log('back')}>
                <Image source={BackIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{
            title: 'Change Password',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '500',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{height: 24, width: 24}}
                onPress={() => console.log('back')}>
                <Image source={BackIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="DeactivateAccount"
          component={DeactivateAccounntScreen}
          options={{
            title: 'Deactivate an account',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '500',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{height: 24, width: 24}}
                onPress={() => console.log('back')}>
                <Image source={BackIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="TermsAndCondition"
          component={TermsAndConditionScreen}
          options={{
            title: 'Terms & Conditions',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '500',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{height: 24, width: 24}}
                onPress={() => console.log('back')}>
                <Image source={BackIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicyScreen}
          options={{
            title: 'Privacy Policy',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '500',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{height: 24, width: 24}}
                onPress={() => console.log('back')}>
                <Image source={BackIcon} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
