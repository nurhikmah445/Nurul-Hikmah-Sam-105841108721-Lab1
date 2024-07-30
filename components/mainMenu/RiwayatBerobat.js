import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RiwayatBerobat = ({ navigation }) => {
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
          <Text style={styles.welcomeText}>Riwayat Berobat</Text>

          <View style={styles.userInfo}>
            <View style={styles.searchBar}>
              <Text style={styles.searchBarText}>Halo, Hikmah</Text>
              <FontAwesome name='user' size={24} color='black' />
            </View>
          </View>

          <View style={styles.records}>
            <View style={styles.recordItem}>
              <Text style={styles.recordHeader}>Riwayat Berobat 01 September 2024</Text>

              <View style={styles.recordDetail}>
                <Text style={styles.recordLabel}>Diagnosa</Text>
                <Text style={styles.recordValue}>Infeksi</Text>
              </View>

              <View style={styles.recordDetail}>
                <Text style={styles.recordLabel}>Keluhan</Text>
                <Text style={styles.recordValue}>Menggigil</Text>
                </View>

                <View style={styles.recordDetail}>
                  <Text style={styles.recordLabel}>Pembayaran</Text>
                  <Text style={styles.recordValue}>BPJS</Text>
                </View>
            </View>

            <View style={styles.recordItem}>
              <Text style={styles.recordHeader}>Riwayat Berobat 01 September 2024</Text>

              <View style={styles.recordDetail}>
                <Text style={styles.recordLabel}>Diagnosa</Text>
                <Text style={styles.recordValue}>Infeksi</Text>
              </View>

              <View style={styles.recordDetail}>
                <Text style={styles.recordLabel}>Keluhan</Text>
                <Text style={styles.recordValue}>Menggigil</Text>
                </View>

                <View style={styles.recordDetail}>
                  <Text style={styles.recordLabel}>Pembayaran</Text>
                  <Text style={styles.recordValue}>BPJS</Text>
                </View>
            </View>
            <View style={styles.recordItem}>
              <Text style={styles.recordHeader}>Riwayat Berobat 01 September 2024</Text>

              <View style={styles.recordDetail}>
                <Text style={styles.recordLabel}>Diagnosa</Text>
                <Text style={styles.recordValue}>Infeksi</Text>
              </View>

              <View style={styles.recordDetail}>
                <Text style={styles.recordLabel}>Keluhan</Text>
                <Text style={styles.recordValue}>Menggigil</Text>
                </View>

                <View style={styles.recordDetail}>
                  <Text style={styles.recordLabel}>Pembayaran</Text>
                  <Text style={styles.recordValue}>BPJS</Text>
                </View>
            </View>
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

  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 10,
    textAlign: 'flex-start',
    width: '100%',
    marginTop:40,
    marginBottom: 20,
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

  records: {
    width: '100%',
    marginTop: 20,
  },
  
  
  recordItem: {
    backgroundColor:'#41A190',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },

  recordHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black'
  },

  recordDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  recordLabel: {
    fontWeight: 'bold',
  },

  recordValue: {
    color: 'white',
  },

})

export default RiwayatBerobat;