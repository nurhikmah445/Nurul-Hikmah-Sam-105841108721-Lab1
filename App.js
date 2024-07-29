import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUpPage' screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;