import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';

const ChatScreenItem = ({chatListingData}) => {
  const imageUri =
    'https://s3-alpha-sig.figma.com/img/fabd/b328/af3c6b7a42a4d5d9073e19cfcca55f35?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VvFc273L5d0nK3q1X~SmHSqH-BlkLoWyVoEOBkR1UZsNi6j7r5JISrxD7SHKl~dxwZw8~U4EdsXusiAqxFMtor9vwRR0oSyQ1QA249AQE8gFtzYMu1FfvLT52cW0~bo9vRklU2TgVR1ThPiRecnhbWp-hi4bUqpaOYXN2hUeX5wTs6rz8beBwDaBoLnaMzp-E~QRmdRiTPdf1kebRgFx5SjzCZHy2XAHRBbM~L4JvULRxX7FplzVB6wxhIHqXBwJX7WT8WBZrmyoARuFEForXGSq0NLyhhy1tVxgsOJcbi3nG0ipp~2jnax3vx1OpDH6LghRoWz2nj74I9Q1SCh1Aw__';

  return (
    <View style={styles.profileViewContainer}>
      <View style={styles.firstItem}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: chatListingData.imageUri}}
            style={styles.image}
          />
          {chatListingData.badge === '0' ? null : (
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{chatListingData.badge}</Text>
            </View>
          )}
        </View>
        <View style={styles.textView}>
          <View style={styles.innerTextView}>
            <Text style={styles.text}>{chatListingData.name}</Text>
            <Text style={styles.timeStamp}>{chatListingData.timeStamp}</Text>
          </View>
          <Text style={styles.message}>{chatListingData.message}</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatScreenItem;

const styles = StyleSheet.create({
  profileViewContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignContent: 'space-between',
    padding: 16,
  },

  firstItem: {
    flexDirection: 'row',
    flex: 1,
  },

  imageContainer: {
    position: 'relative',
    width: 50,
    height: 50,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50 / 2,
  },

  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#EA7D59',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },

  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '400',
  },

  textView: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 2,
  },

  innerTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: Platform.OS === 'android' ? 20 : 15,
  },

  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2A2F35',
  },

  message: {
    color: '#979797',
    fontSize: 12,
    fontWeight: '400',
    paddingRight: 120,
  },

  timeStamp: {
    color: '#2A2F35',
    fontSize: 12,
    fontWeight: '400',
    alignSelf: 'center',
    marginRight: Platform.OS === 'android' ? 20 : 15,
  },
});
