import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import TextInputCustom from "./TextInput";
import ButtonCustom from "./ButtonCustom";

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logobidanku 1.png')} style={styles.logo} />
      <Text style={styles.headerText}>Login</Text>
      <Text style={styles.text}>Silahkan Login Dengan Akun Anda</Text>

      <View style={styles.form}>
        <TextInputCustom name={"Email"} />
        <TextInputCustom name={"Password"} />
        <ButtonCustom color={'green'} text={'LOGIN'} onPress={() => navigation.navigate('MainMenu')} />
      </View>
      <Text style={styles.text2}>Lupa Password? <Text style={{color: 'blue'}} onPress={() => navigation.navigate('ForgotPasswordPage')}>Klik Disini</Text></Text>

      <Text style={styles.footerText} onPress={() => navigation.navigate('SignUpPage')}>
        Belum Punya Akun? Klik Login
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
  },

  text: {
    fontSize: 16,
    bottom: 40,
    textAlign: 'flex-start',
  },

  text2: {
    fontSize: 16,
  },

  form: {
    width: '100%',
    alignItems: 'center'
  },

  footerText: {
    marginTop: 40,
    fontSize: 16,
    color: 'black',
    textAlign: 'center'
  },
});

export default LoginPage;
