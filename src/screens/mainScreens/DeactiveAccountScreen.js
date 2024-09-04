import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';

import BackIcon from '../../assets/icons/twotone/arrow-left.png';
import DeactivateAccountScreenItem from '../../components/DeactivateAccountScreenItem';

const DeactivateAccounntScreen = ({navigation}) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [isButtonEnable, setIsButtonEnable] = useState(false);

  const deactiveReasons = [
    {id: 1, reason: 'Privacy concerns'},
    {id: 2, reason: 'Inactivity'},
    {id: 3, reason: 'Dissatisfaction with the platform or service'},
    {id: 4, reason: 'Lack of interest in the platform or service'},
    {id: 5, reason: 'Moving on to a different platform or service'},
  ];

  //MARK: - handlePress
  const handlePress = id => {
    setSelectedIds(prevSelectedIds =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter(selectedId => selectedId !== id)
        : [...prevSelectedIds, id],
    );
    console.log(selectedIds);
    setIsButtonEnable(selectedIds.length > 0);
  };

  //MARK: - showAlert
  const showAlert = () => {
    Alert.alert(
      'Deactivate Account',
      'Are you sure you want to deactivate your account?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () =>
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            }),
        },
      ],
      {cancelable: false},
    );
  };

  //MARK: - renderItem
  const renderItem = ({item}) => (
    <DeactivateAccountScreenItem
      item={item}
      isSelected={selectedIds.includes(item.id)}
      onPress={handlePress}
    />
  );

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>We’re sorry that you are leaving!</Text>
      <Text style={styles.subTitle}>
        Before you deactivate your account, can you tell us why you are leaving?
      </Text>

      <FlatList
        style={{backgroundColor: '#FFFFFF', marginTop: 10}}
        data={deactiveReasons}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />

      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: isButtonEnable ? '#EA7D59' : '#F6F6FA'},
        ]}
        onPress={showAlert}>
        <Text
          style={[
            styles.buttonText,
            {color: isButtonEnable ? '#FFFFFF' : '#707581'},
          ]}>
          Deactivate
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeactivateAccounntScreen;

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2A2F35',
  },

  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#979797',
    marginTop: 10,
    paddingRight: 100,
  },

  button: {
    paddingVertical: 13,
    borderRadius: 23,
    height: 46,
    marginRight: 16,
    marginBottom: 16,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
