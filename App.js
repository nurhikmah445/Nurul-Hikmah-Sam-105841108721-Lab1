import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import MyTabs from './components/MyTabs';
import BerandaPage from './components/BerandaPage';
import MainMenu from './components/mainMenu/MainMenu';
import Immunization from './components/mainMenu/Immunization';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUpPage' screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Beranda" component={BerandaPage} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="Immunization" component={Immunization} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;