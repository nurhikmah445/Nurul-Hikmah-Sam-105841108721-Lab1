import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const TextInputCustom = ({name, color, secureTextEntry}) => {
  return (
  <TextInput
  placeholder={` ${name}`}
  secureTextEntry={secureTextEntry}
  style={{
    height: 64,
    borderColor: 'gray',
    color: color,
    width: '90%',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowRadius: 1,
    shadowOpacity: 0.5,
  }}
  />
)
}


const ButtomCustom = ({color, text}) => {
  return (
  <View style={{
    backgroundColor: color,
    width: '90%',
    borderRadius: 20,
    justifyContent: 'center',
    height: 50,
    alignItems: 'center',
  }}>
      <Text style={{
        color: 'white',
        textAlign: 'center',
      }}>{text}</Text>
    </View>
  )
  }
  
  const LoginPage = ({navigation}) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 20,
    }}>
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
        top: 30
      }}>
        <Text style={{
          alignItems: 'flex-start',
          fontSize: 30,
          fontWeight: 'bold',
          color: 'black',
        }}>
          Login
        </Text>
        </View>

        <View style={{
          flex : 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          width: '100%',
          bottom:40,
        }}>
          <TextInputCustom name="Email" color="black"/>
          <TextInputCustom name="Password" color="black"/>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordPage')} style={{
            alignSelf:'flex-end',
            right: 20,
            flex : 1,
            bottom: 30
          }}>
          <Text>
            Forgot Password?
          </Text>
          </TouchableOpacity>

        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
          bottom:150
        }}>
          <ButtomCustom color="green" text="LOGIN"/>
        </View>

        <View style={{
          alignSelf:'center',
        }}>
          <Text style={{
            color: 'black',
            fontSize:15,
            bottom: 50
          }}>
            Or sign up with social account
          </Text>

          <View style={{
            flexDirection:'row',
            columnGap: 20,
            alignSelf: 'center',
            bottom: 50
          }}>
              <Image source={require('../assets/img/google.png')} style={{
                width: 30,
                height: 50,
                resizeMode: 'contain',
              }}/>
              <Image source={require('../assets/img/facebook.png')} style={{
                width: 30,
                height: 50,
                resizeMode: 'contain',
              }}/>
            </View>
        </View>
    </View>
  )
}

export default LoginPage