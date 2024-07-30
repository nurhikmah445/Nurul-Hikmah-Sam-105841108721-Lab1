import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Obat = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="arrow-left" size={24} color="black" onPress={() => navigation.goBack()} />
        <Image source={require('../../assets/img/logobidanku 1.png')} style={styles.logo} /> 
      </View>

      <View style={styles.userInfo}>
        <View style={styles.searchBar}>
          <Text style={styles.searchBarText}>Hallo, pengguna 1</Text>
          <FontAwesome name="user" size={24} color="black" />
        </View>
      </View>

      <Text style={styles.headerText}>Obat</Text>
      <Text style={styles.subHeaderText}>Pilih berbagai jenis obat yang tersedia</Text>

      <View style={styles.medicineList}>
        <TouchableOpacity style={styles.medicineItem}>
          <Image source={require('../../assets/img/paracetamol.png')} style={styles.medicineImage} /> 
          <Text style={styles.medicineText}>PARACETAMOL Rp 6.000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicineItem}>
          <Image source={require('../../assets/img/amoxicillin.png')} style={styles.medicineImage} /> 
          <Text style={styles.medicineText}>AMOXCILIN Rp 5.000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicineItem}>
          <Image source={require('../../assets/img/ventolin 1.png')} style={styles.medicineImage} /> 
          <Text style={styles.medicineText}>VENTOLIN Rp 155.000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicineItem}>
          <Image source={require('../../assets/img/metformin.png')} style={styles.medicineImage} /> 
          <Text style={styles.medicineText}>METFORMIN Rp 23.000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicineItem}>
          <Image source={require('../../assets/img/mefinal.png')} style={styles.medicineImage} /> 
          <Text style={styles.medicineText}>MEFINAL Rp 21.000</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.medicineItem}>
          <Image source={require('../../assets/img/Promag.png')} style={styles.medicineImage} /> 
          <Text style={styles.medicineText}>PROMAG Rp 11.000</Text>
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
    marginLeft: 20,
  },

  userInfo: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    width: '100%',
    alignSelf: 'center',
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
  },

  subHeaderText: {
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },

  medicineList: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  medicineItem: {
    width: '45%',
    backgroundColor: '#48b8a0',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
  },

  medicineImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  medicineText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default Obat;
