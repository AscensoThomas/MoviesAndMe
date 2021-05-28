import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ActivityIndicator, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getFilmDetailFromApi } from '../API/TMDBApi';
import {getData, storeData} from "../utils/storeManager";

export const FilmDetail = ({route, navigation}) => {
    const {idFilm} = route.params
    const [isLiked, setIsLiked] = useState(false)

    const [film, setFilm] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getIsLiked() {
            let array = await getData('favoris_movies', true)

            if (array.indexOf(idFilm.toString()) == -1) {
                setIsLiked(false)
            } else {
                setIsLiked(true)
            }
        }
        getIsLiked()
    }, [])

    useEffect(() => {
        getFilmDetailFromApi(idFilm).then(data => {
            setFilm(data)
            setIsLoading(false)
        })
    }, [])

    const clickLike = async (isLiked) => {
        await storeData('favoris_movies', idFilm,   true, isLiked)
        setIsLiked(isLiked)
    }

    const _displayFilm = (film) => {


        if (film !== undefined) {

            return (
                <>
                    <Ionicons onPress={() => clickLike(!isLiked)} name="heart" size={32} color={isLiked ? 'red' : 'grey'} />
                    <ScrollView style={styles.scrollview_container}>
                        <Text>{film.title}</Text>
                    </ScrollView>
                </>
            )
        }
    }

    const _displayLoading= (isLoading) => {
        if (isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }
    return (
        <View style={styles.main_container}>
            {_displayFilm(film)}
            {_displayLoading(isLoading)}
        </View>
    );

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    scrollview_container: {
        flex: 1
    }

})

export default FilmDetail;