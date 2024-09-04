import React, {useEffect} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import editIcon from '../../assets/icons/edit/edit.png';
import SettingItemView from './SettingItemView';
import BackIcon from '../../assets/icons/twotone/arrow-left.png';

const MyProfileScreen = ({navigation}) => {
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

  const profileData = [
    {id: 1, title: 'Address', detail: '217 E Bando Street, New York'},
    {id: 2, title: 'Email Address', detail: 'chris.west@gmail.com'},
    {id: 3, title: 'Phone Number', detail: '+1-901-546-6532'},
    {id: 4, title: 'Gender', detail: 'Male'},
    {id: 5, title: 'Date of Birth', detail: '08/05/2000'},
  ];

  return (
    <View style={styles.viewContainer}>
      <View style={styles.profileViewContainer}>
        <View style={styles.firstItem}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/fabd/b328/af3c6b7a42a4d5d9073e19cfcca55f35?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VvFc273L5d0nK3q1X~SmHSqH-BlkLoWyVoEOBkR1UZsNi6j7r5JISrxD7SHKl~dxwZw8~U4EdsXusiAqxFMtor9vwRR0oSyQ1QA249AQE8gFtzYMu1FfvLT52cW0~bo9vRklU2TgVR1ThPiRecnhbWp-hi4bUqpaOYXN2hUeX5wTs6rz8beBwDaBoLnaMzp-E~QRmdRiTPdf1kebRgFx5SjzCZHy2XAHRBbM~L4JvULRxX7FplzVB6wxhIHqXBwJX7WT8WBZrmyoARuFEForXGSq0NLyhhy1tVxgsOJcbi3nG0ipp~2jnax3vx1OpDH6LghRoWz2nj74I9Q1SCh1Aw__',
            }}
            style={styles.image}
          />
          <Text style={styles.text}>John Cena</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Image style={styles.button} source={editIcon} />
        </TouchableOpacity>
      </View>

      {profileData.map((item, index) => (
        <SettingItemView id={index} title={item.title} detail={item.detail} />
      ))}
    </View>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    flex: 1,
  },

  viewContainer: {
    flex: 1,
    backgroundColor: '#FBFBFD',
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
    alignSelf: 'center',
    marginLeft: 10,
  },

  button: {
    alignSelf: 'center',
    height: 25,
    width: 25,
  },

  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#EEEEEE',
  },
});
