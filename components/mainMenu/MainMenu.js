import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const MainMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/img/logobidanku 1.png')} style={styles.logo} />
            <Text style={styles.welcomeText}>Selamat Datang Di Menu Utama</Text>

            <View style={styles.userInfo}>


            <View style={styles.searchBar}>
                <Text style={styles.searchBarText}>Halo, Hikmah</Text>
                <FontAwesome name='search' size={24} color='black' />
                </View>
            </View>

            <Text style={styles.headerText}>Silahkan Pilih Menu Yang Diinginkan</Text>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('imunisasi')}>
                    <Image source={require('../../assets/img/suntikan.png')} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Imunisasi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('obat')}>
                    <Image source={require('../../assets/img/obat.png')} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Obat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('riwayatBerobat')}>
                    <Image source={require('../../assets/img/riwayat berobat.png')} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Riwayat Berobat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('dataPasien')}>
                    <Image source={require('../../assets/img/data pasien.png')} style={styles.menuIcon} />
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
        padding: 20,
    },

    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 20,
    },

    welcomeText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'flex-start',
        marginBottom: 20,
    },

    userInfo: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,
    },

    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 10,
        width: '100%',
    },

    searchBarText: {
        flex: 1,
        fontSize: 16,
    },

    menu: {
        width: '100%',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },

    menuItem: {
        width: '35%',
        backgroundColor: 'green',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 40,
        aspectRatio: 1,
        justifyContent: 'center',
        top:30,
    },

    menuText: {
        fontSize: 10,
        padding: 10,
        color: 'white'
    },

    menuIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
})

export default MainMenu;