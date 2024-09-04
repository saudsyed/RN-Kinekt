import React from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import HomeScreenItem from '../../components/HomeScreenItem';

import notificationIcon from '../../assets/icons/bell/bell-icon.png';
import patientIcon from '../../assets/icons/homeScreen/patient-icon.png';
import selfieIcon from '../../assets/icons/homeScreen/selfie-icon.png';
import instantfeedbackIcon from '../../assets/icons/homeScreen/instant-feedback-icon.png';
import videoCallIcon from '../../assets/icons/homeScreen/video-call-icon.png';
import socialRequestIcon from '../../assets/icons/homeScreen/social-request-icon.png';
import feedbackRequestIcon from '../../assets/icons/homeScreen/feedback-request-icon.png';

const HomeScreen = ({navigation}) => {
  const homeData = [
    {
      id: 1,
      icon: patientIcon,
      title: 'Patients',
      subTitle: 'View your patients',
    },
    {
      id: 2,
      icon: selfieIcon,
      title: 'Selfie',
      subTitle: 'Take a selfie with patient',
    },
    {
      id: 3,
      icon: instantfeedbackIcon,
      title: 'Instant Feedback',
      subTitle: 'Add your feedback',
    },
    {
      id: 4,
      icon: videoCallIcon,
      title: 'Video Testimonial',
      subTitle: 'Record video feedback',
    },
    {
      id: 5,
      icon: socialRequestIcon,
      title: 'Social Requests',
      subTitle: 'View your requests',
    },
    {
      id: 6,
      icon: feedbackRequestIcon,
      title: 'Feedback Requests',
      subTitle: 'View your feedback',
    },
  ];

  const handlePress = item => {
    if (item.title === 'Patients') {
      navigation.navigate('Patient');
    } else if (item.title === 'Instant Feedback') {
      navigation.navigate('InstantFeedback');
    } else if (item.title === 'Video Testimonial') {
      navigation.navigate('VideoTestimonial');
    } else if (item.title === 'Feedback Requests') {
      navigation.navigate('FeedbackRequest');
    }
  };

  const renderItem = ({item}) => (
    <HomeScreenItem item={item} onPress={handlePress} />
  );

  const itemSeparator = () => <View style={styles.itemSeparator} />;

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
    <FlatList
      style={{backgroundColor: '#FBFBFD'}}
      data={homeData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      ItemSeparatorComponent={itemSeparator}
      contentContainerStyle={styles.itemContainer}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginHorizontal: 15,
    // marginVertical: 7.5,
    backgroundColor: '#FBFBFD',
    paddingTop: 15,
  },

  itemSeparator: {
    height: 15,
  },

  row: {
    justifyContent: 'space-between',
  },
});
