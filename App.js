import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import MyTabs from './components/MyTabs';
import BerandaPage from './components/BerandaPage';
import MainMenu from './components/mainMenu/MainMenu';
import Imunisasi from './components/mainMenu/Imunisasi';
import Obat from './components/mainMenu/Obat';
import DataPasien from './components/mainMenu/DataPasien';
import RiwayatBerobat from './components/mainMenu/RiwayatBerobat';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Beranda' screenOptions={{}}>
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} />
        <Stack.Screen name="Bidanku" component={MyTabs} />
        <Stack.Screen name="Beranda" component={BerandaPage} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="imunisasi" component={Imunisasi} />
        <Stack.Screen name="obat" component={Obat} />
        <Stack.Screen name="riwayatBerobat" component={RiwayatBerobat} />
        <Stack.Screen name="dataPasien" component={DataPasien} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;