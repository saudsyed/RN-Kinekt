import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../screens/mainScreens/SettingScreen';

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'My Account',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
