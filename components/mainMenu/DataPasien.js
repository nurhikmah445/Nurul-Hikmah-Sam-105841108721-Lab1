import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const DataPasien = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} color="black" onPress={() => navigation.goBack()} />
      </View>

      <Text style={styles.headerText}>PROFIL DATA PASIEN</Text>

      <View style={styles.profileSection}>
        <FontAwesome name="user-circle-o" size={100} color="#ccc" />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>User Id : pengguna 1</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>ubah user id</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Nomor : +6212345678</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>ubah nomor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Password : sehat123</Text>
          <TouchableOpacity>
            <Text style={styles.editText}>ubah Password</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
    width: '100%',
  },

  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },

  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },

  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },

  infoLabel: {
    fontSize: 16,
    color: 'black',
  },

  editText: {
    fontSize: 14,
    color: 'blue',
  },

  logoutButton: {
    backgroundColor: '#48b8a0',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },

  logoutButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default DataPasien;
