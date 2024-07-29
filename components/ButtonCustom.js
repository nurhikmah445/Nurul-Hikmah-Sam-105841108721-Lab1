import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ButtonCustom = ({ color, text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, {backgroundColor:color}]}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default ButtonCustom;