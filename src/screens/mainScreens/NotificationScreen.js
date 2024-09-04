import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SectionList,
  StyleSheet,
} from 'react-native';
import NotificationScreenItem from '../../components/NotificationScreenItem';

import BackIcon from '../../assets/icons/twotone/arrow-left.png';

const NotificationScreen = ({navigation}) => {
  const notificationData = [
    {
      header: 'Latest',
      data: [
        {
          image:
            'https://s3-alpha-sig.figma.com/img/0cc7/eb0e/78338e93ae1dc064b513cc0d88c339f3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XYJm-6wEJeTZYHFEkxLgffskfFBdGK4Yv8C69F5zrNSSntJuEriTqM6GzjGTm8MqYUx7LIe383fTpZbskeHTvmtzMudPCBie8mt5AQPqV6d7fxkfijWy6LMKePkM-OCzfqVPADWSDcndjcKSxh9gonbUsxMw6iArTq6XjMrz7gqnLp5zLGQnIBTqsSa8G2aYj6xrBzac~zZF0cgQIwPdvH-Hhevl~AtBG5WTkgIUkGNG6-OlBuGVRyTRoRLk~--Ok-p1S3JxWaWzXzzksbaWKs1YSgpk2sBdGMnepOfMPi3XdUSju3YEpNdjAbR3aAtxe8oF93jmFW3zfmthWd1EfQ__',
          notification:
            'Lorem ipsum dolor sit amet, consectetur adipisici elit…',
          time: '20m ago',
        },
      ],
    },
    {
      header: 'Older',
      data: [
        {
          image:
            'https://s3-alpha-sig.figma.com/img/c8f6/db12/02cafd06d1568ba1132fc863959e19c7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ABMLYj~2MjCS-yp5V9OtnSSdneyTOWBdPi87efEcfQiiXEhxNiEM87FCh8S74eqBQ-ckkYTdgNAMkWrYUz6XaWZ4aBTM14a50o-XkhrgrOt6ajWoalps3uG7BjoyWbFPU2EcNmPzh7ScPHP5XkUaV3dYsHg4BBKslQEsGlIFilkciKtl7aec~SHi9o6nlHQeXbuqXOffF3dWXnnAYvVrCom8SYuLZrlJIlbGbLQixb2YZvIoKssm7Fift0NEzOGDH2ZusOexf2FKORUKneVLGbO7HdMTtB1aaUtRpPwACkOGWngwasFDizZBoMAHjMgi04s2EDjqSNfjIAlL2v3ulw__',
          notification: 'Lorem ipsum dolor sit amet, ',
          time: '2w ago',
        },
        {
          image:
            'https://s3-alpha-sig.figma.com/img/57c6/9ffb/2a5d094ef6a00741ee07ef92b1ff1e66?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MgjlsJg0TeeWu8KwPdvIjHLjYsNwNsBp4CHrpJIQKYbXlmUe6EtXLCzYfyLmrbcu77OfbUq9EddzWRJDUUcpeQv6rbqqP44O-uVmwvTjMp0I6UGMj6mPQwjvfqRt1pSG5Hc0sWrIN72J8f3s46x91lLgqFMoZ~cW09oV15DSDGd2sg82mvcGw9hbtzOEOwC8IkTw1SteB8DuHKA5E74YPBp6ymtMOF6g2v2AO0LfErlW7CfBzvjluj5xtWgwT~uJMbBoBd9a~LiGuzw6O-rZHddq6xLPo2Xx3XFAZyxo9G7vOfi6jA29KlOuo4-tVZMkyRnVco7dBQnBiIgu~0cyAQ__',
          notification:
            'Lorem ipsum dolor sit amet, consectetur adipisici elit…',
          time: '7w ago',
        },
        {
          image:
            'https://s3-alpha-sig.figma.com/img/72c6/d43d/69efe2d3c47a8d93f383b047bd72e762?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WHxLgkiviKKFrGOCT7E3JwGVOKkpHyePg8u55bVlZ4f4pquoIBiGBeGUay4f2dSlBYrZXbjZ7-38AwdygYLY-lJw8IBnyleKThlbyTzV1Nqv4RVzuHqXBMlqcbGX6psqat-3ZxhNO1QuvVSGf4L6aDyJwenY~dw1oKtPwYTHXAoca88m0K2NeotqxoPmum935CWLnrYwW~tqt16xqnncefLyNCbsFhLuxUUkchYCcHhXcsjvEtRaj68XVgCgLwX1jaaXBjlyklKJPEX5Kc5mFSidRSMPjS7H4dD9yJ0W6Jdoux~7V1enEuXwCzFiwjQahXq0yX~iPVjo~vRJQyw~0A__',
          notification:
            'It is used as a placeholder in magazine layouts, for example, in order to give an impression',
          time: '1w ago',
        },
        {
          image:
            'https://s3-alpha-sig.figma.com/img/a7d2/c50e/5da607df8fe19c27c456f5cb1928a3e7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZYPLWdQJty7LpyldDI0iUc0OiO2v0eYAGhENrGN1d6UXvY64foTlKKUdmtGD6F10GN6Anjd1AfC33RS1P4U3itkdApD--vBuTXXJFm3FNo4QY6XeDs8xBlSTkZEDOG98uxRrPuXgKrgLsCp6sj83TSetX~PQmyQ991Nvd-aQKGzMeb-584fntS2P35SB5gQBCX1urJYCCX5OU2~FUVi20N5lbh2K~L9zaoMZY4nt09RaDhix7A2XxbPtk~rDFy~rRGVOZY0wJV9L5J4xnjxNVXnHa3pnsWWObT2XNt3LfPuljfRahIm50Uyf1edZQUql5B7meHPJANdYtlcPy5n2JQ__',
          notification: 'It is used as a placeholder in magazine layouts.',
          time: '12w ago',
        },
        {
          image:
            'https://s3-alpha-sig.figma.com/img/72c6/d43d/69efe2d3c47a8d93f383b047bd72e762?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WHxLgkiviKKFrGOCT7E3JwGVOKkpHyePg8u55bVlZ4f4pquoIBiGBeGUay4f2dSlBYrZXbjZ7-38AwdygYLY-lJw8IBnyleKThlbyTzV1Nqv4RVzuHqXBMlqcbGX6psqat-3ZxhNO1QuvVSGf4L6aDyJwenY~dw1oKtPwYTHXAoca88m0K2NeotqxoPmum935CWLnrYwW~tqt16xqnncefLyNCbsFhLuxUUkchYCcHhXcsjvEtRaj68XVgCgLwX1jaaXBjlyklKJPEX5Kc5mFSidRSMPjS7H4dD9yJ0W6Jdoux~7V1enEuXwCzFiwjQahXq0yX~iPVjo~vRJQyw~0A__',
          notification: 'It is used as a placeholder in magazine layouts.',
          time: '15w ago',
        },
        {
          image:
            'https://s3-alpha-sig.figma.com/img/c8f6/db12/02cafd06d1568ba1132fc863959e19c7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ABMLYj~2MjCS-yp5V9OtnSSdneyTOWBdPi87efEcfQiiXEhxNiEM87FCh8S74eqBQ-ckkYTdgNAMkWrYUz6XaWZ4aBTM14a50o-XkhrgrOt6ajWoalps3uG7BjoyWbFPU2EcNmPzh7ScPHP5XkUaV3dYsHg4BBKslQEsGlIFilkciKtl7aec~SHi9o6nlHQeXbuqXOffF3dWXnnAYvVrCom8SYuLZrlJIlbGbLQixb2YZvIoKssm7Fift0NEzOGDH2ZusOexf2FKORUKneVLGbO7HdMTtB1aaUtRpPwACkOGWngwasFDizZBoMAHjMgi04s2EDjqSNfjIAlL2v3ulw__',
          notification:
            'It is used as a placeholder in magazine layouts, for example, in order to give an impression',
          time: '20w ago',
        },
      ],
    },
  ];

  const renderItem = ({item}) => (
    <NotificationScreenItem notificationData={item} />
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
    <SectionList
      style={{backgroundColor: '#FFFFFF'}}
      sections={notificationData}
      renderItem={renderItem}
      keyExtractor={(index, item) => index + item}
      renderSectionHeader={({section: {header}}) => (
        <Text style={styles.text}>{header}</Text>
      )}
    />
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2A2F35',
    padding: 10,
    marginLeft: 5,
    backgroundColor: '#FFFFFF',
  },
});
