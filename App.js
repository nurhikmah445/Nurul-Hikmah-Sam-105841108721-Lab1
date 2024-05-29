import { StyleSheet } from "react-native";
import React from "react"

const App = () => {
  return (
    <View style = {{ flex: 1 }}>
      <View style={{
        flex: 1, alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100, 

      }}>
        <View style={{
         backgroundColor: 'red' , width: 180, height: 100,
         justifyContent: 'center',
         borderRadius: 10,
        }}>
        <Text style={{
          fontSize: 30, color: 'white',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          Login
        </Text>
      </View>
    </View>
  </View>


  )
      }   

  

export default App
