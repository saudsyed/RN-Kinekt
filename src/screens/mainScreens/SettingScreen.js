import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  FlatList,
} from 'react-native';

import SettingScreenItem from '../../components/SettingScreenItem';

import notificationIcon from '../../assets/icons/settingScreen/push-notification-icon.png';
import changePasswordIcon from '../../assets/icons/settingScreen/change-password-icon.png';
import faqIcon from '../../assets/icons/settingScreen/FAQ-icon.png';
import termsAndConditionIcon from '../../assets/icons/settingScreen/term-and-condition-icon.png';
import privacyPolicyIcon from '../../assets/icons/settingScreen/privacy-policy-icon.png';
import deactivateIcon from '../../assets/icons/settingScreen/deactivate-icon.png';
import logoutIcon from '../../assets/icons/settingScreen/logout-icon.png';

const SettingScreen = ({navigation}) => {
  const settingData = [
    {id: 1, title: 'Push Notification', icon: notificationIcon},
    {id: 2, title: 'Change Password', icon: changePasswordIcon},
    {id: 3, title: 'FAQs', icon: faqIcon},
    {id: 4, title: 'Terms & Conditions', icon: termsAndConditionIcon},
    {id: 5, title: 'Privacy Policy', icon: privacyPolicyIcon},
    {id: 6, title: 'Deactivate Account', icon: deactivateIcon},
    {id: 7, title: 'Logout', icon: logoutIcon},
  ];

  const handleSettingPress = item => {
    if (item.title === 'Logout') {
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    } else if (item.title === 'Change Password') {
      navigation.navigate('ChangePassword');
    } else if (item.title === 'Deactivate Account') {
      navigation.navigate('DeactivateAccount');
    } else if (item.title === 'Terms & Conditions') {
      navigation.navigate('TermsAndCondition');
    } else if (item.title === 'Privacy Policy') {
      navigation.navigate('PrivacyPolicy');
    } else {
      console.log(item.title);
    }
  };

  const renderItem = ({item}) => (
    <SettingScreenItem
      icon={item.icon}
      title={item.title}
      onPress={() => handleSettingPress(item)}
    />
  );

  const itemSeparator = () => <View style={styles.separator} />;

  const navigating = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileViewContainer}>
        <View style={styles.firstItem}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/fabd/b328/af3c6b7a42a4d5d9073e19cfcca55f35?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VvFc273L5d0nK3q1X~SmHSqH-BlkLoWyVoEOBkR1UZsNi6j7r5JISrxD7SHKl~dxwZw8~U4EdsXusiAqxFMtor9vwRR0oSyQ1QA249AQE8gFtzYMu1FfvLT52cW0~bo9vRklU2TgVR1ThPiRecnhbWp-hi4bUqpaOYXN2hUeX5wTs6rz8beBwDaBoLnaMzp-E~QRmdRiTPdf1kebRgFx5SjzCZHy2XAHRBbM~L4JvULRxX7FplzVB6wxhIHqXBwJX7WT8WBZrmyoARuFEForXGSq0NLyhhy1tVxgsOJcbi3nG0ipp~2jnax3vx1OpDH6LghRoWz2nj74I9Q1SCh1Aw__',
            }}
            style={styles.image}
          />
          <View style={styles.textView}>
            <Text style={styles.text}>John Cena</Text>
            <TouchableOpacity onPress={navigating}>
              <Text style={styles.button}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <FlatList
        data={settingData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={itemSeparator}
        scrollEnabled={false}
      />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBFBFD',
    flex: 1,
  },
  profileViewContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignContent: 'space-between',
    padding: 16,
    paddingTop: 16,
  },

  firstItem: {
    flexDirection: 'row',
    flex: 1,
  },

  textView: {
    alignSelf: 'center',
    marginLeft: 10,
  },

  image: {
    height: 74,
    width: 74,
    backgroundColor: 'black',
    borderRadius: 74 / 2,
  },

  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2A2F35',
  },

  button: {
    color: '#EA7D59',
    fontSize: 12,
    fontWeight: '600',
  },

  separator: {
    height: 10,
    width: '100%',
    backgroundColor: '#FBFBFD',
  },
});
