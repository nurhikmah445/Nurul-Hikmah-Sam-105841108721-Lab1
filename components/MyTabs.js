import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MainMenu from "./mainMenu/MainMenu";
import Imunisasi from "./mainMenu/Imunisasi";
import Obat from "./mainMenu/Obat";
import RiwayatBerobat from "./mainMenu/RiwayatBerobat";
import DataPasien from "./mainMenu/DataPasien";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                    iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Imunisasi") {
                    iconName = focused ? "git-network" : "git-network-outline";
                } else if (route.name === "Obat") {
                    iconName = focused ? "medkit" : "medkit-outline";
                } else if (route.name === "Riwayat Berobat") {
                    iconName = focused ? "document-text" : "document-text-outline";
                } else if (route.name === "Data Pasien") {
                    iconName = focused ? "person" : "person-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: "green",
            inactiveTintColor: "gray",
        }}
        >
        <Tab.Screen name="Home" component={MainMenu} options={{headerShown:false}}/>
        <Tab.Screen name="Imunisasi" component={Imunisasi} options={{headerShown:false}}/>
        <Tab.Screen name="Obat" component={Obat} options={{headerShown:false}}/>
        <Tab.Screen name="Riwayat Berobat" component={RiwayatBerobat} options={{headerShown:false}}/>
        <Tab.Screen name="Data Pasien" component={DataPasien} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
    };

export default MyTabs;