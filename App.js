import { StyleSheet, View, Text, Image } from "react-native";
import React from "react"

const App = () => {
  return (
    <View style={{flx: 1}}>
     <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'

     }}>
      <Text style={{
        fontSize: 50,
        fontWeight: 'bold'

      }}>Toko Oren</Text>
      </View>

      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
      }}>
        <Image source={require('./shopee.jpg')} />
      </View>


      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'

      }}>

        <View style={{
          backgroundColor: 'green',
          width: 120,
          height: 80,
          borderRadius: 20,
          justifyContent: 'center'

        }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold'
          }}>Login
          </Text>
          </View>


          <View style={{
            backgroundColor: 'blue',
            width: 120,
            height: 80,
            borderRadius: 20,
            justifyContent: 'center'

          }}>
            <Text style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'white',
              fontWeight: 'bold'
            }}>Sign Up
            </Text>
            </View>

          </View>

          </View>

      )
    }
    export default App