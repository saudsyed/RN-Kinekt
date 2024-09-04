import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import PatientScreenItem from '../../components/PatientScreenItem';

import BackIcon from '../../assets/icons/twotone/arrow-left.png';
import searchIcon from '../../assets/icons/search/search-icon.png';

const InstantFeedbackScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const patientList = [
    {
      id: 1,
      name: 'Aiden Methew',
      image:
        'https://s3-alpha-sig.figma.com/img/0cc7/eb0e/78338e93ae1dc064b513cc0d88c339f3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XYJm-6wEJeTZYHFEkxLgffskfFBdGK4Yv8C69F5zrNSSntJuEriTqM6GzjGTm8MqYUx7LIe383fTpZbskeHTvmtzMudPCBie8mt5AQPqV6d7fxkfijWy6LMKePkM-OCzfqVPADWSDcndjcKSxh9gonbUsxMw6iArTq6XjMrz7gqnLp5zLGQnIBTqsSa8G2aYj6xrBzac~zZF0cgQIwPdvH-Hhevl~AtBG5WTkgIUkGNG6-OlBuGVRyTRoRLk~--Ok-p1S3JxWaWzXzzksbaWKs1YSgpk2sBdGMnepOfMPi3XdUSju3YEpNdjAbR3aAtxe8oF93jmFW3zfmthWd1EfQ__',
    },
    {
      id: 2,
      name: 'Ariana Madeline',
      image:
        'https://s3-alpha-sig.figma.com/img/c8f6/db12/02cafd06d1568ba1132fc863959e19c7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ABMLYj~2MjCS-yp5V9OtnSSdneyTOWBdPi87efEcfQiiXEhxNiEM87FCh8S74eqBQ-ckkYTdgNAMkWrYUz6XaWZ4aBTM14a50o-XkhrgrOt6ajWoalps3uG7BjoyWbFPU2EcNmPzh7ScPHP5XkUaV3dYsHg4BBKslQEsGlIFilkciKtl7aec~SHi9o6nlHQeXbuqXOffF3dWXnnAYvVrCom8SYuLZrlJIlbGbLQixb2YZvIoKssm7Fift0NEzOGDH2ZusOexf2FKORUKneVLGbO7HdMTtB1aaUtRpPwACkOGWngwasFDizZBoMAHjMgi04s2EDjqSNfjIAlL2v3ulw__',
    },
    {
      id: 3,
      name: 'Aaron Jerimiah',
      image:
        'https://s3-alpha-sig.figma.com/img/57c6/9ffb/2a5d094ef6a00741ee07ef92b1ff1e66?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MgjlsJg0TeeWu8KwPdvIjHLjYsNwNsBp4CHrpJIQKYbXlmUe6EtXLCzYfyLmrbcu77OfbUq9EddzWRJDUUcpeQv6rbqqP44O-uVmwvTjMp0I6UGMj6mPQwjvfqRt1pSG5Hc0sWrIN72J8f3s46x91lLgqFMoZ~cW09oV15DSDGd2sg82mvcGw9hbtzOEOwC8IkTw1SteB8DuHKA5E74YPBp6ymtMOF6g2v2AO0LfErlW7CfBzvjluj5xtWgwT~uJMbBoBd9a~LiGuzw6O-rZHddq6xLPo2Xx3XFAZyxo9G7vOfi6jA29KlOuo4-tVZMkyRnVco7dBQnBiIgu~0cyAQ__',
    },
    {
      id: 4,
      name: 'Austin Charles',
      image:
        'https://s3-alpha-sig.figma.com/img/0cc7/eb0e/78338e93ae1dc064b513cc0d88c339f3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XYJm-6wEJeTZYHFEkxLgffskfFBdGK4Yv8C69F5zrNSSntJuEriTqM6GzjGTm8MqYUx7LIe383fTpZbskeHTvmtzMudPCBie8mt5AQPqV6d7fxkfijWy6LMKePkM-OCzfqVPADWSDcndjcKSxh9gonbUsxMw6iArTq6XjMrz7gqnLp5zLGQnIBTqsSa8G2aYj6xrBzac~zZF0cgQIwPdvH-Hhevl~AtBG5WTkgIUkGNG6-OlBuGVRyTRoRLk~--Ok-p1S3JxWaWzXzzksbaWKs1YSgpk2sBdGMnepOfMPi3XdUSju3YEpNdjAbR3aAtxe8oF93jmFW3zfmthWd1EfQ__',
    },
    {
      id: 5,
      name: 'Aubrie Katalyn',
      image:
        'https://s3-alpha-sig.figma.com/img/a7d2/c50e/5da607df8fe19c27c456f5cb1928a3e7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZYPLWdQJty7LpyldDI0iUc0OiO2v0eYAGhENrGN1d6UXvY64foTlKKUdmtGD6F10GN6Anjd1AfC33RS1P4U3itkdApD--vBuTXXJFm3FNo4QY6XeDs8xBlSTkZEDOG98uxRrPuXgKrgLsCp6sj83TSetX~PQmyQ991Nvd-aQKGzMeb-584fntS2P35SB5gQBCX1urJYCCX5OU2~FUVi20N5lbh2K~L9zaoMZY4nt09RaDhix7A2XxbPtk~rDFy~rRGVOZY0wJV9L5J4xnjxNVXnHa3pnsWWObT2XNt3LfPuljfRahIm50Uyf1edZQUql5B7meHPJANdYtlcPy5n2JQ__',
    },
    {
      id: 6,
      name: 'Bailey Wilson',
      image:
        'https://s3-alpha-sig.figma.com/img/c8f6/db12/02cafd06d1568ba1132fc863959e19c7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ABMLYj~2MjCS-yp5V9OtnSSdneyTOWBdPi87efEcfQiiXEhxNiEM87FCh8S74eqBQ-ckkYTdgNAMkWrYUz6XaWZ4aBTM14a50o-XkhrgrOt6ajWoalps3uG7BjoyWbFPU2EcNmPzh7ScPHP5XkUaV3dYsHg4BBKslQEsGlIFilkciKtl7aec~SHi9o6nlHQeXbuqXOffF3dWXnnAYvVrCom8SYuLZrlJIlbGbLQixb2YZvIoKssm7Fift0NEzOGDH2ZusOexf2FKORUKneVLGbO7HdMTtB1aaUtRpPwACkOGWngwasFDizZBoMAHjMgi04s2EDjqSNfjIAlL2v3ulw__',
    },
    {
      id: 7,
      name: 'Easton Rodricks',
      image:
        'https://s3-alpha-sig.figma.com/img/57c6/9ffb/2a5d094ef6a00741ee07ef92b1ff1e66?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MgjlsJg0TeeWu8KwPdvIjHLjYsNwNsBp4CHrpJIQKYbXlmUe6EtXLCzYfyLmrbcu77OfbUq9EddzWRJDUUcpeQv6rbqqP44O-uVmwvTjMp0I6UGMj6mPQwjvfqRt1pSG5Hc0sWrIN72J8f3s46x91lLgqFMoZ~cW09oV15DSDGd2sg82mvcGw9hbtzOEOwC8IkTw1SteB8DuHKA5E74YPBp6ymtMOF6g2v2AO0LfErlW7CfBzvjluj5xtWgwT~uJMbBoBd9a~LiGuzw6O-rZHddq6xLPo2Xx3XFAZyxo9G7vOfi6jA29KlOuo4-tVZMkyRnVco7dBQnBiIgu~0cyAQ__',
    },
    {
      id: 8,
      name: 'Mya Kylie',
      image:
        'https://s3-alpha-sig.figma.com/img/a7d2/c50e/5da607df8fe19c27c456f5cb1928a3e7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZYPLWdQJty7LpyldDI0iUc0OiO2v0eYAGhENrGN1d6UXvY64foTlKKUdmtGD6F10GN6Anjd1AfC33RS1P4U3itkdApD--vBuTXXJFm3FNo4QY6XeDs8xBlSTkZEDOG98uxRrPuXgKrgLsCp6sj83TSetX~PQmyQ991Nvd-aQKGzMeb-584fntS2P35SB5gQBCX1urJYCCX5OU2~FUVi20N5lbh2K~L9zaoMZY4nt09RaDhix7A2XxbPtk~rDFy~rRGVOZY0wJV9L5J4xnjxNVXnHa3pnsWWObT2XNt3LfPuljfRahIm50Uyf1edZQUql5B7meHPJANdYtlcPy5n2JQ__',
    },
  ];

  //MARK: - filteredData
  const filteredData = patientList.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  //MARK: - handlePress
  const handlePress = id => {
    setSelectedId(prevSelectedId => (prevSelectedId === id ? null : id));
  };

  //MARK: - renderItem
  const renderItem = ({item}) => (
    <PatientScreenItem
      item={item}
      isSelected={item.id === selectedId}
      onPress={handlePress}
      isRadio={true}
    />
  );
  const itemSeparator = () => <View style={styles.separator} />;

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

      <View style={styles.headerView}>
        <Text style={styles.header}>{filteredData.length} Patients</Text>
      </View>

      <FlatList
        style={{backgroundColor: '#FFFFFF'}}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={itemSeparator}
      />

      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InstantFeedbackScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FBFBFD',
    flex: 1,
  },

  headerView: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  header: {
    fontSize: 12,
    fontWeight: '400',
    color: '#979797',
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

  bottomView: {
    height: 108,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },

  button: {
    alignItems: 'center',
    height: 46,
    borderRadius: 46 / 2,
    backgroundColor: '#EA7D59',
    padding: 13,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});
