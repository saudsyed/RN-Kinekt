import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/mainScreens/HomeScreen';
import ChatScreen from '../screens/mainScreens/ChatScreen';

import homeIcon from '../assets/icons/home/home-icon.png';
import homeActiveIcon from '../assets/icons/home/home-active-icon.png';
import settingIcon from '../assets/icons/setting/setting-icon.png';
import settingActiveIcon from '../assets/icons/setting/setting-active-icon.png';
import chatIcon from '../assets/icons/chat/chat-icon.png';
import chatActiveIcon from '../assets/icons/chat/chat-active-icon.png';

import {Image, Platform} from 'react-native';
import SettingStack from './SettingStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = focused ? homeActiveIcon : homeIcon;
          } else if (route.name === 'Chat') {
            iconSource = focused ? chatActiveIcon : chatIcon;
          } else if (route.name === 'Setting') {
            iconSource = focused ? settingActiveIcon : settingIcon;
          }

          return <Image source={iconSource} />;
        },
        tabBarActiveTintColor: '#EA7D59',
        tabBarStyle: {
          height: Platform.OS === 'android' ? 60 : 80,
          paddingBottom: Platform.OS === 'android' ? 8 : 28,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingStack}
        options={{
          headerShown: false,
          title: 'My Account',
          tabBarLabel: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
