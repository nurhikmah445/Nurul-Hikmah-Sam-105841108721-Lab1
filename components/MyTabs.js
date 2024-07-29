import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MainMenu from "./mainMenu/MainMenu";
import Profile from "./mainMenu/Profile";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                    iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Shopping") {
                    iconName = focused ? "cart" : "cart-outline";
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
        <Tab.Screen name="Shopping" component={Profile} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
    };

export default MyTabs;