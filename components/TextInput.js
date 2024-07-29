import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputCustom = ({ name, secureTextEntry }) => {
    return (
        <TextInput
        placeholder={` ${name}`}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        />
    );
}

const styles = StyleSheet.create({
    input: { 
        height:50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        width: '90%',
        paddingHorizontal: 10,
        backgroundColor: '#f5f5f5'
    }
});

export default TextInputCustom;