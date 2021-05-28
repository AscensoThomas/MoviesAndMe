import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList, ActivityIndicator } from "react-native";
import films from '../Helpers/filmsData';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi';

export const Search = ({route, navigation}) => {

    const [films, setFilms] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchText, setSearchText] = useState("")
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)


    const _loadFilms = () => {
        setIsLoading(true)

        if (searchText.length > 0) {
            getFilmsFromApiWithSearchedText(searchText, page + 1).then(data => {
                setPage(data.page);
                setTotalPages(data.total_pages);
                setFilms(data.results)
                setIsLoading(false)

                //this.setState({
                //    films: [ ...this.state.films, ...data.results ],
                //    isLoading: false
                //})
            });
        }
    }

    const _displayLoading = () => {
        if (isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    const _searchFilms = () => {
        setPage(0)
        setTotalPages(0)
        setFilms([])
        _loadFilms()
    }

    const _displayDetailForFilm = (idFilm) => {

        navigation.navigate("FilmDetail", {idFilm: idFilm})
    }

    const _searchTextInputChange = (text) => {
        setSearchText(text)
    }


    return(
        <View style={ styles.main_container }>
            <TextInput onSubmitEditing={() => _searchFilms()} onChangeText={(text) => _searchTextInputChange(text)} style={ styles.textInput } placeholder="Titre du film"></TextInput>
            <Button style={{ height: 50 }} title="Rechercher" onPress={() => _searchFilms()}></Button>

            <FlatList
                data={films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={_displayDetailForFilm}/>}
                onEndReachThreashold={0.5}
                onEndReached={() => {
                    if (page < totalPages) {
                        _loadFilms();
                    }
                }}
            />

            {_displayLoading()}
        </View>
    )

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
        marginBottom: 20
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

export default Search;