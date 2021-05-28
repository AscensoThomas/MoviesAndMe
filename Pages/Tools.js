import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList, ActivityIndicator, Image } from "react-native";
import {getImageFromApi} from "../API/TMDBApi";
import {ToolItem} from "../Components/Tool";

export const ToolsScreen = ({route, navigation}) => {


    const navigateTools = (pages) => {
        navigation.navigate(pages)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <ToolItem icon={'settings'} text={'Mes réglages'} navigateTools={navigateTools} pages={'Home'} />
            <ToolItem icon={'heart'} text={'Mes favoris'} navigateTools={navigateTools} pages={'Favoris'} />
            <ToolItem icon={'person-circle'} text={'Mes informations'} navigateTools={navigateTools} pages={'Home'} />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        marginTop: 50,
    },
    image: {
        width: 200,
        height: 200,
    }
})

export default ToolsScreen