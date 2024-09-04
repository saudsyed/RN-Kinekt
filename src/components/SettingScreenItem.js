import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';

const SettingScreenItem = ({icon, title, onPress}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity style={styles.viewContainer} onPress={onPress}>
      <View style={styles.childView}>
        <Image source={icon} />
        {title === 'Logout' ? (
          <Text style={[styles.text, {color: '#FF5A4E'}]}>{title}</Text>
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </View>

      {title === 'Push Notification' ? (
        <Switch
          value={isActive}
          onValueChange={setIsActive}
          trackColor={{true: '#EA7D59'}}
          thumbColor="#f4f3f4"
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default SettingScreenItem;

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  childView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: 13,
    fontWeight: '400',
    color: '#2A2F35',
    paddingLeft: 8,
  },
});
