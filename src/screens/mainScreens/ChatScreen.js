import {useEffect, useState} from 'react';
import React from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import ChatScreenItem from '../../components/ChatScreenItem';
import notificationIcon from '../../assets/icons/bell/bell-icon.png';
import searchIcon from '../../assets/icons/search/search-icon.png';

const ChatScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Partrik Nelson',
      message: 'Walk, daily exercise, and low calories food to be taken',
      badge: '3',
      timeStamp: '1h ago',
      imageUri:
        'https://s3-alpha-sig.figma.com/img/57c6/9ffb/2a5d094ef6a00741ee07ef92b1ff1e66?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F9Mlvd1sTlHomcOB5HJ6aVKIYt9tXDdW56DB6h3PKoKQ5cL9j3PSlMRYiyCpMT5TPEHtuQuEnlPlCZ6rL5ERjhHJm9ifV7LYUQKzd6daQj3sOIAK2adrER~eZyN9Y~Dcx5TIwFpuL5XATZSThV6XIISzPe9dsTxwLcGgS-kpblrKfg6Q3bF1Nhrk9R~54HHptnDN945F~UeuLmLgwvBOOX5aqaGihmz9FuzN3~eY0Yqq2i6xCo4mhq9FwSAv6i653GIl1YI1gOOXqwrM5RUg820h4b7fmL8KQE3XzRiRe7PohJOXGuv~yYaKkIqcsZ2SX1IMQEFPjbmZZs-5DhaOdQ__',
    },
    {
      id: 2,
      name: 'Aiden Methew',
      message: 'Walk, daily exercise, and low calories food to be taken',
      badge: '2',
      timeStamp: '2h ago',
      imageUri:
        'https://s3-alpha-sig.figma.com/img/0cc7/eb0e/78338e93ae1dc064b513cc0d88c339f3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IkLXmDoJOnTffK3aQzUTiSZ5p6WplTHZZVtUEP4bUOUfRxZCwxDaQVBVBbS9ldDHfi-XtsLONrq8AK-XjAsNECA2bpRuB9KwpioOzVnOvhkqFeIEvRm4qEojCbMP0xmZgZud4qehgMZGybB5fL5ZpxXunMjZXhBIWgAoMDsFkJCh7tFEctZjJ3S4hG5--GjATHXUKyndOxCOzn2iCJA97hVmR~vElc6FUn9aflX37TjfAEcgxDfadMPBvyCSDuJLVd99dIrAmxrinSdGVaRr-~b8wf~9a9gmorswQxGs-CJisCkSp2AoyLndjAIImValIVl33POXz-Jf2yeJ8zUWIQ__',
    },
    {
      id: 3,
      name: 'Amanda Parkers',
      message: 'Walk, daily exercise, and low calories food to be taken',
      badge: '0',
      timeStamp: '3h ago',
      imageUri:
        'https://s3-alpha-sig.figma.com/img/0a88/1244/a3776258a42745297a6bf863e3e494e9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=os8-qNxYB4CvL5Ha6jZx-wc54S3t~kRzy-T1nFtJ7d8zZLQ10Gk2yr0lCmdd1WxFHVjr2T9U3QpXZ3EIA2e9CzAwdHhYVB2~jjaXfmehT7NlQ78uylF-ISHdCJQVQcsqI3O9oqDmkD~jYklSsGrpF9PrO1UtitqSoA5GeeQTqCb1wfUV~YV~2Sen5ZBXKkyhoYLv4KDUZWkHpupq-1NX0l0ryLpGObwsNieg12BzQFx7qmNO3BY1vv5IwQ2GijChty63Iot7ixE~XlHKIfTOyH2gusTA30eGDA1h2Bu8mast3Lg0q64~Pnut~24lCI5xjI07xBOCBWJBtXCiu9Na3A__',
    },
    {
      id: 4,
      name: 'Austin Charles',
      message: 'Walk, daily exercise, and low calories food to be taken',
      badge: '0',
      timeStamp: '5h ago',
      imageUri:
        'https://s3-alpha-sig.figma.com/img/a7d2/c50e/5da607df8fe19c27c456f5cb1928a3e7?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cuDB2SDc5Usen4rRNVTazdae5DjVulZKV7Zr7t0hzRH0pGTyVenyogoJduqqQBNw1y0A1qsFl0WzRwPEgg4b9vJD~meNyV36bcx~UiKbXW378EiYlHVCmR6DMx9gwegxLUYU5tISF8M-F4UZkBUr20ScgDWUVqOY8341vHsDb~7P9uzHOFJu9IpyZHTYy7vzoV-qwC-3UOLrIM~gVENjh7C6L~mXMeqlX4yglBf6XOA~uNjh4zcCp1aNk5cz87AHNJDfZvMV3VIHEpATzglD4mT6LhZdRW7AgRqRwuqtAmxnlNS5IfnIi6VMR1rlQgFsD6SPFwAZiNRQ-F22ZpNRJQ__',
    },
    {
      id: 5,
      name: 'Bailey Wilson',
      message: 'Walk, daily exercise, and low calories food to be taken',
      badge: '0',
      timeStamp: '7h ago',
      imageUri:
        'https://s3-alpha-sig.figma.com/img/050b/68d2/51c1d2b6dbefb686473aaded29634452?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UwZNwZtRyrMI7njndRMBUdcXuFpnodjMgry04zW~k1iLcoY-6mr0-lxksXgeWO1ZIC21gYIUF4BExF~iymC78xfG5pBTK6G1LkGWVklPHhaiohiRRaVi1RIUxXLg2m4ipmhSatXDIKG1ODE7H6~ucqytS~SP6Ri1gSACFkNFtA4PSrzRMd2iW16DiNl5VeK8ZntxYuEVhRjQBijj6JgC9PPduwqZg1lI44DjXLLG~zDMvpSNn~uG5HuP8yPg0AsnWkvg1AJC8bqwAwUx05-xx1qrBGKi8wEGXLW9Xaxk09HK9EDrLizG35vJdaPvX-26nhruCZgb3kslj~LcecMw8Q__',
    },
    {
      id: 6,
      name: 'Easton Rodricks',
      message: 'Walk, daily exercise, and low calories food to be taken',
      badge: '0',
      timeStamp: '8h ago',
      imageUri:
        'https://s3-alpha-sig.figma.com/img/6a17/703d/a236bcd51f185f2b1f9c7794b7378e7a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z4cLuwPVpyfSKBvnJqm~6q3rFUWz7W9dJElziUfoqEin1X1yawcdBXZIn2lhQwL5EgE7kijur9-6TtPv4C0y6TZK5An0fwHGZ1pyeiUKsGuiKFZg25i6siHeOyf9CWteW9Ut~Bu9h9aYvuIIoLkrmjvGF0L8xxeajb5NPeTnDg4Ujqo58zZCyBkaL2LQmRTW2x-n70JZWEf-IeIpIBO4dCQoi8a9EvbbEr58rSnT3mHDCdLP6Mfxx1643DRPTnLJ87lmAcuFiAuZ7FLwcmystGlz6AEux-bkadu7uHtIos~Fm5R8f7o5B-TakyXmOnbkNoccjdqyMRSSz~5Ucbuh6w__',
    },
    {
      id: 7,
      name: 'Aubrie Katalyn',
      message: 'Walk, daily exercise, and low calories food to be taken',
      badge: '0',
      timeStamp: '10h ago',
      imageUri:
        'https://s3-alpha-sig.figma.com/img/72c6/d43d/69efe2d3c47a8d93f383b047bd72e762?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tmrj2Reoggwx4VIJto0xg3Sgrvn2TvZwdyGBW312t6yX3jTa~Wjtn1QRLJkskgt585OMjBZi0BIA~6UMFwMtYodz~PcjTYK5mYxCr5R9JsWu3hd3kTZ2u~LlGsD8nouFP5RFxFIQ07LKA-CnmmS1w32gizIEK~-f5z0HkvlkoxkpUo6HpRHVrwZHB0Iil6sgocitaokwtw9sM7~5yg~fdD-GAZt-oMVIk1ii7rWmGPFXRvR28j7p2AlhNhSLOCoHdg8nMeP329V49MsU1nSdogjLaZMcGs4IpxxjTS2ghnzZwSZkLEx11zZo8Njn5ra90eh8R192zO9YDUG3Z0YiWQ__',
    },
  ]);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderItem = ({item}) => <ChatScreenItem chatListingData={item} />;

  const itemSeparator = () => <View style={styles.separator} />;

  //MARK: - useEffect()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{height: 24, width: 24, marginRight: 15}}
          onPress={() => navigation.navigate('Notification')}>
          <Image source={notificationIcon} />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.parentContainer}>
        <View style={styles.searchContainer}>
          <Image source={searchIcon} style={styles.searchIcon} />
          <TextInput
            placeholder="Search chat"
            placeholderTextColor="#707581"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
        </View>
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={itemSeparator}
        scrollEnabled={true}
        style={{marginTop: 10}}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBFBFD',
    flex: 1,
  },

  parentContainer: {
    backgroundColor: '#FFFFFF',
  },

  searchContainer: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#F6F7F9',
    borderRadius: 10,
    margin: 16,
  },

  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 13,
    fontWeight: '400',
    color: '#707581',
  },

  separator: {
    height: 1,
    backgroundColor: '#F2F2F2',
  },
});
