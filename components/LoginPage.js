import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Alert, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Simulasi validasi login
    if (email === 'pppp' && password === 'pppp') {
      navigation.navigate('MyTabs');
    } else {
      Alert.alert('Login Error', 'Email atau kata sandi tidak valid.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logobidanku 1.png')} style={styles.logo} />
      <Text style={styles.headerText}>Login</Text>
      <Text style={styles.text}>Silahkan Login Dengan Akun Anda</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text2}>Lupa Password? <Text style={{color: 'blue'}} onPress={() => navigation.navigate('ForgotPasswordPage')}>Klik Disini</Text></Text>

      <Text style={styles.footerText} onPress={() => navigation.navigate('SignUpPage')}>
        Belum Punya Akun? Klik Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    bottom: 90,
    resizeMode: 'contain',
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
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 40,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});

export default LoginScreen;
