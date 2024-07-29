import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import React from 'react';

const ButtomCustom = ({color, text}) => (
  <View style={{
    backgroundColor:color,
    width: '90%',
    height:50,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  }}>
    <Text style={{
      textAlign:'center',
      fontSize:15,
      color:'white',
    }}> {text}
    </Text>
  </View>
)

const TextInputCustom = ({ name, color}) => (
  <TextInput
  placeholder={`Maukkan ${name}`}
  style={{
    borderColor:'gray',
    width:'90%',
    height:50,
    marginBottom:10,
    paddingHorizontal:10,
    color:color,
    backgroundColor:'white',
    borderWidth:1 
  }}
  placeholderTextColor={color}
  />
)

const App = () => {
  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
      <TextInputCustom name={'Name'} color={'gray'} />
      <TextInputCustom name={'Email'} color={'gray'} />
      <TextInputCustom name={'Password'} color={'gray'} />
      <ButtomCustom color={'red'} text={'SEND'} />
      
    </View>
  )
}

export default App