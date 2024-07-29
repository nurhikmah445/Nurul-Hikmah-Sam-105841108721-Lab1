import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import TextInputCustom from "./TextInput";
import ButtonCustom from "./ButtonCustom";

const SignUpPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logobidanku 1.png')} style={styles.logo} />
      <Text style={styles.headerText}>Ayo Daftar Dulu</Text>

      <View style={styles.form}>
        <TextInputCustom name={"Nama"} />
        <TextInputCustom name={"Email"} />
        <TextInputCustom name={"Password"} />
        <ButtonCustom color={'green'} text={'DAFTAR'} onPress={() => navigation.navigate('LoginPage')} />
      </View>

      <Text style={styles.footerText} onPress={() => navigation.navigate('LoginPage')}>
        Sudah Punya Akun? Klik Login
      </Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  logo: {
    width: 150,
    height: 150,
    bottom: 90,
    resizeMode: 'contain'
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    bottom: 50,
    textAlign: 'flex-start',
  },

  form: {
    width: '100%',
    alignItems: 'center'
  },

  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
    textAlign: 'center'
  },
});

export default SignUpPage;
