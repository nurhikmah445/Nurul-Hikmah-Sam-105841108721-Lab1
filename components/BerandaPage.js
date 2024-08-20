import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const BerandaPage = ({ navigation }) => {
  return (
    <View style={styles.container}>  
      
      <ScrollView 
        horizontal={true} 
        contentContainerStyle={styles.imageScrollContainer}>
        
        <Image source={require('../assets/img/logobidanku 1.png')} style={styles.image}/>
        <Image source={require('../assets/img/hero.png')} style={styles.image}/>
        <Image source={require('../assets/img/imun.png')} style={styles.image}/>
        <Image source={require('../assets/img/obatbg.png')} style={styles.image}/>

      </ScrollView>

      <Text style={styles.titleText}>
        Rencanakan Kesehatanmu Dari Sekarang
      </Text>

      <Text style={styles.descriptionText}>
        Daftar Sekarang atau Login Dengan Akun Anda
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginPage')} >
        <Text style={styles.buttonText}>
          Masuk
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  imageScrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 150,
    height: 150,
    marginRight: 20,
    resizeMode: 'contain'
  },

  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10
  },

  descriptionText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20
  },

  button: {
    backgroundColor: 'green',
    width: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default BerandaPage;
