import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{flex:1}}>
      <View style={{
        flexDirection:'row',
        flex:1, 
        }}>

      <View style={{
        flex: 1,
        backgroundColor:'red'
      }}>
      </View>
      <View style={{
        flex: 1,
        backgroundColor:'blue'
      }}>
      </View>
      <View style={{
        flex: 1,
        backgroundColor:'yellow'
      }}>
      </View>
        </View>

        <View style={{
          flex: 1,
          backgroundColor:'green'
        }}>
        </View>
        <View style={{
          flex: 1,
          backgroundColor:'gray'
        }}>
        </View>

    </View>
  )
}

export default App