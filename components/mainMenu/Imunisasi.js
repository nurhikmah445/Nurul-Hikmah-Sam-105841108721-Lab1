import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Imunisasi = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState({
    BCG: false,
    POLIO: false,
    MMR: false,
  });

  const toggleOption = (option) => {
    setSelectedOption({
      ...selectedOption,
      [option]: !selectedOption[option],
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back-outline" size={24} color="black" onPress={() => navigation.goBack()} />
          <Image source={require('../../assets/img/logobidanku 1.png')} style={styles.logo} />
          </View>

          <View style={styles.userInfo}>
            <View style={styles.searchBar}>
              <Text style={styles.searchBarText}>Halo, Hikmah</Text>
              <FontAwesome name='user' size={24} color='black' />
            </View>
          </View>

          <View style={styles.userInfoo}>
          <Text style={styles.headerText}>Imunisasi</Text>
          <Image source={require('../../assets/img/imun.png')} style={styles.image} />
          </View>
          <Text style={styles.subHeaderText}>Pilih berbagai layanan imunisasi</Text>

          <View style={styles.imunisasiOption}>
            <TouchableOpacity style={styles.optionItem} onPress={() => toggleOption('BCG')}>
              <view style={styles.optionTextContainer}>
                <Text style={styles.optionText}>BCG</Text>
                <Text style={styles.optionDeskripsi}>(Bacillus Calmette-Guerin): Melindung terhadap tuberkulosis. </Text>
              </view>
              <FontAwesome name={selectedOption.BCG ? 'check-circle' : 'circle-o'} size={24} color='black' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem} onPress={() => toggleOption('POLIO')}>
              <view style={styles.optionTextContainer}>
                <Text style={styles.optionText}>POLIO</Text>
                <Text style={styles.optionDeskripsi}>(Poliomyelitis): Melindungi terhadap penyakit polio. </Text>
              </view>
              <FontAwesome name={selectedOption.POLIO ? 'check-circle' : 'circle-o'} size={24} color='black' />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem} onPress={() => toggleOption('MMR')}>
              <view style={styles.optionTextContainer}>
                <Text style={styles.optionText}>MMR</Text>
                <Text style={styles.optionDeskripsi}>(Measles, Mumps, Rubella): Melindungi terhadap campak, gondongan, dan rubella. </Text>
              </view>
              <FontAwesome name={selectedOption.MMR ? 'check-circle' : 'circle-o'} size={24} color='black' />
            </TouchableOpacity>
          </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },

  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    alignItems: 'center',
    marginLeft: 80
  },

  userInfo: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'row',
  },

  userInfoo: {
    width: '100%',
    justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    width: '100%',
  },

  searchBarText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
    marginLeft:30
  },

  subHeaderText: {
    fontSize: 16,
    bottom:90,
    color: 'black',
    width: '40%',
    right:75
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  imunisasiOption: {
    width: '100%',
  },

  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#48b8a0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },

  optionTextContainer: {
    flex: 1,
    marginRight: 10,
  },

  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  optionDeskripsi: {
    fontSize: 14,
    color: 'white',
  },
})

export default Imunisasi;