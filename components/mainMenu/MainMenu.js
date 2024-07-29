import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const MainMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/img/logobidanku 1.png')} style={styles.logo} />
            <Text style={styles.welcomeText}>Selamat Datang Di Menu Utama</Text>
            <Text style={styles.greetingText}>Halo, Hikmah</Text>

            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Immunization')}>
                    <Text style={styles.menuText}>Imunisasi</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Medicine')}>
                    <Text style={styles.menuText}>Obat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MedicalHistory')}>
                    <Text style={styles.menuText}>Riwayat Berobat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.menuText}>Data Pasien</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },

    logo: {
        width: 150,
        height: 150,
        bottom: 90,
        resizeMode: 'contain'
    },

    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },

    greetingText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },

    menu: {
        width: '100%',
        alignItems: 'center',
    },

    menuItem: {
        width: '90%',
        backgroundColor: 'green',
        marginBottom: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    menuText: {
        fontSize: 18,
        padding: 10,
        color: 'white'
    }
})

export default MainMenu;