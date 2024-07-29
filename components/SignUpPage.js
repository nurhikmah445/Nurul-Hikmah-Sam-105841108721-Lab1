import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
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
  
  const SignUpPage = () => {
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
          Sign Up
        </Text>
        </View>

        <View style={{
          flex : 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          width: '100%',
          bottom:80
        }}>
          <TextInputCustom name="Name" color="black"/>
          <TextInputCustom name="Email" color="black"/>
          <TextInputCustom name="Password" color="black"/>
        </View>

        <View style={{
          alignSelf:'flex-end',
          right: 20,
          bottom: 70
        }}>
          <Text>
            Already have an account?
          </Text>
        </View>

        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
          bottom:150
        }}>
          <ButtomCustom color="green" text="SIGN UP"/>
        </View>

    </View>
  )
}

export default SignUpPage