import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, Pressable, Alert} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export const ToolItem = ({icon, text, navigateTools, pages}) => {

    return (
        <Pressable onPress={() => navigateTools(pages)} style={styles.container_tool}>
            <View style={styles.container_tool_icon}>
                <Ionicons name={icon} size={40} color={'black'} />
            </View>

            <View style={styles.container_tool_icon}>
                <Text>{text}</Text>
            </View>

            <View style={styles.container_tool_icon}>
                <Ionicons name='chevron-forward-outline' size={40} color={'black'} />
            </View>


        </Pressable>
    )

}

const styles = StyleSheet.create({
    container_tool: {
        height: 100,
        width: '90%',
        marginTop: 20,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    container_tool_icon: {
        width: '20%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container_title: {
        width: '60%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container_arrow: {
        width: '20%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})