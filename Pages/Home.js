import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList, ActivityIndicator, Image } from "react-native";
import {getImageFromApi} from "../API/TMDBApi";

export const HomeScreen = ({route, navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={styles.image}
                source={require('../assets/cinema.png')}
            />
            <Text style={styles.title}>Movies and Me!</Text>
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

export default HomeScreen