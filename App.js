import { View, Text, StyleSheet, Image } from 'react-native';
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

const App = () => {
  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
      <Text>Halo deck</Text>
      <ButtomCustom color={'red'} text={'SEND'} />
      
    </View>
  )
}

export default App