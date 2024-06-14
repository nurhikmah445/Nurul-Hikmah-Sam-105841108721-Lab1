import { StyleSheet, Text, View,TextInput } from 'react-native';
import React from 'react' ;

const App = () => {
const TextInputcustom = ({name, color }) => {
  return (
      <TextInput
      placeholder={`Mausukan ${name}`}
      style={{
      height: 40,
      width: 200,
      borderColor: 'tomato',
      borderWidth: 1,
      marginBottom: 10,
      color: color,
      padding: 10,
      margin: 10,
      borderRadius: 10,
      paddingLeft: 10,
    }}
  />
  )
  }  

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <TextInputcustom name="Username" color="black">,</TextInputcustom>
      <TextInputcustom name= "email" color="green"></TextInputcustom>
      <TextInputcustom name="Password" color="red"></TextInputcustom>
    </View>
  )
}
  export default App