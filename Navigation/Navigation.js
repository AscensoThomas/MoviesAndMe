import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import {Search} from '../Components/Search';
import {HomeScreen} from '../Pages/Home';
import {FavorisScreen} from '../Pages/Favoris';
import {ToolsScreen} from '../Pages/Tools';
import FilmDetail from "../Components/FilmDetail";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Image} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


const Stack = createStackNavigator();

function DetailsFilmStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Rechercher" component={Search} />
            <Stack.Screen name="FilmDetail" component={FilmDetail} options={{title: 'Détail du film'}}/>
        </Stack.Navigator>
    )
}

const StackTools = createStackNavigator();

function ToolsStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Réglages" component={ToolsScreen} />
            <Stack.Screen name="Tool" component={HomeScreen} />
            <Stack.Screen name="Favoris" component={FavorisScreen} />
            <Stack.Screen name="Informations" component={HomeScreen} />
        </Stack.Navigator>
    )
}


const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Rechercher') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'Tools') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Rechercher" component={DetailsFilmStackScreen}
                />
                <Tab.Screen name="Tools" component={ToolsStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}