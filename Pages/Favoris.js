import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList, ActivityIndicator, Image } from "react-native";
import {getFilmDetailFromApi} from "../API/TMDBApi";
import {getData} from "../utils/storeManager";
import FilmItem from "../Components/FilmItem";

export const FavorisScreen = ({route, navigation}) => {

    const [arrayFilms, setArrayFilms] = useState([])
    const [arrayFilmsData, setArrayFilmsData] = useState([])

    useEffect(() => {
        async function getArrayFilms() {
            //setArrayFilmsData([])
            let array = await getData('favoris_movies', true)

            setArrayFilms(array)
            //console.log('aha', arrayFilms)

            array.forEach( item => {
                getFilmDetailFromApi(item).then(data => {
                    //console.log(arrayFilmsData.concat([data]))
                    setArrayFilmsData( arrayFilmsData => [...arrayFilmsData, data]);
                })


            })

            console.log(arrayFilmsData)
            console.log(arrayFilms)
        }

        getArrayFilms()
    }, [])


    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>

            <Text style={styles.title}>Mes Favoris</Text>

            <FlatList
                data={arrayFilmsData}
                keyExtractor={(item) => (item.id.toString())}
                renderItem={({item}) => <Text>{item.original_title}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 26,
      marginTop: 50,
    },
})

export default FavorisScreen