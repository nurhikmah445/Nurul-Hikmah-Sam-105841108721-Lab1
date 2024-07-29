import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>Hello Word</Text>
      <Image source={require('./assets/img/shopee.jpg')} />
    </View>
  )
}

export default App