import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={{
      flex : 1,
      backgroundColor : 'white',
      alignItems : 'center',
      justifyContent: 'center',
      padding: 30,
    }}>  

    <Text style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 20
    }}>
      Bidanku
    </Text>

    <Image source={require('../../assets/img/hero.png')} style={{
      width: 150,
      height: 150,
      marginBottom: 20,
      resizeMode: 'contain'
    }}/>

    <Text style={{
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      marginBottom: 10
    }}>
      Rencanakan Kesehatanmu Dari Sekarang
    </Text>

    <Text style={{
      fontSize: 16,
      color: 'black',
      textAlign: 'center',
      marginBottom: 20
    }}>
      Daftar Sekarang atau Login Dengan Akun Anda
    </Text>

    <TouchableOpacity style={{
      backgroundColor:'green',
      width: '100%',
      borderRadius:20,
      justifyContent: 'center',
      height: 50,
      alignItems: 'center',
    }}>
      <Text style={{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
      }}>
        Masuk
      </Text>
    </TouchableOpacity>
    </View>
  )
}

export default HomeScreen;