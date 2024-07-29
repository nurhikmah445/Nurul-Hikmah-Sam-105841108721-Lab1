import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import TextInputCustom from "./TextInput";
import ButtonCustom from "./ButtonCustom";

const ForgotPasswordPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logobidanku 1.png')} style={styles.logo} />
      <Text style={styles.headerText}>Reset Password</Text>

      <View style={styles.form}>
        <TextInputCustom name={"Email"} />
        <TextInputCustom name={"New Password"} />
        <ButtonCustom color={'green'} text={'SEND'} onPress={() => navigation.navigate('MyTabs')} />
      </View>
      <Text style={styles.text2}>Bukan Akun Anda? <Text style={{color: 'blue'}} onPress={() => navigation.navigate('LoginPage')}>Klik Disini</Text></Text>

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

  text2: {
    fontSize: 16,
  },

  form: {
    width: '100%',
    alignItems: 'center'
  },
});

export default ForgotPasswordPage;
