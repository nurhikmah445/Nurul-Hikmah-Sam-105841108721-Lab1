import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const App = () => {

  const [loaded] = useFonts({
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroRegular': require('./assets/fonts/Metropolis-Regular.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
    'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
    'MetroThin': require('./assets/fonts/Metropolis-Thin.otf'),
  })

  if (!loaded) return (
    <View>
      <Text>Loading...</Text>
    </View>
  )

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text>Hello Word</Text>
      <Text style={{
        fontFamily: 'MetroBold',
      }}>Hello Word</Text>
      <Text style={{
        fontFamily: 'MetroRegular',
      }}>Hello Word</Text>
      <Text style={{
        fontFamily: 'MetroMedium',
      }}>Hello Word</Text>
      <Text style={{
        fontFamily: 'MetroLight',
      }}>Hello Word</Text>
    </View>
  )
}

export default App