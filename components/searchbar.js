import Autocomplete from 'react-native-autocomplete-input';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Dimensions,
    Platform
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function SearchBar({ theme }) {
    const [allMovies, setAllMovies] = useState([{ id: 1, title: "demo data one" }]);
    const [query, setQuery] = useState('');
    const isLoading = !allMovies?.length;
    const placeholder = isLoading
        ? 'Loading...'
        : 'Seach here';

    useEffect(() => {

    }, []);

    return (
        <View style={theme == 'light' ? lightStyle.container : darkStyle.container}>
            <View style={theme == 'light' ? lightStyle.autocompleteContainer : darkStyle.autocompleteContainer}>
                <AntDesign
                    name="search1"
                    size={18}
                    color="gray"
                    style={theme == 'light' ? lightStyle.searchIcon : darkStyle.searchIcon}
                />
                <Autocomplete
                    theme={theme}
                    renderTextInput={(props) => (<TextInput {...props} placeholderTextColor={theme == 'light' ? "gray" : "#606060"} style={[theme == 'light' ? {} : { color: '#606060', backgroundColor: '#333' }, {
                        ...Platform.select({
                            ios: {
                                width: Dimensions.get('window').width-120,
                            }
                        }),
                    }]} placeholder={placeholder} />)}
                    inputContainerStyle={theme == 'light' ? lightStyle.inputContainer : darkStyle.inputContainer}
                    editable={!isLoading}
                    autoCorrect={false}
                    data={
                        allMovies
                    }
                    value={query}
                    onChangeText={setQuery}
                    placeholderTextColor={'#333'}
                    placeholder={placeholder}
                    flatListProps={{
                        keyboardShouldPersistTaps: 'always',
                        keyExtractor: (movie) => movie.id,
                        // renderItem: ({ item: { title } }) => (
                        // ),
                    }}
                />
            </View>
            {query.length > 0 &&
                <View style={theme == 'light' ? lightStyle.titleSearchContainerWrap : darkStyle.titleSearchContainerWrap}>
                    {allMovies.length > 0 && allMovies.map((movie) =>
                        <TouchableOpacity key={movie.id} activeOpacity={.7} onPress={() => setQuery(movie.title)}>
                            <View style={theme == 'light' ? lightStyle.titleSearchContainer : darkStyle.titleSearchContainer}>
                                <Text style={theme == 'light' ? lightStyle.itemText : darkStyle.itemText}>{movie.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>}
        </View>
    );
};

const lightStyle = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1,
        zIndex: 1,
        width: '98%',
        left: '1%',
        top: '5%',
        borderRadius: 10
    },
    itemText: {
        fontSize: 15,
        margin: 2,
    },
    titleSearchContainerWrap: {
        backgroundColor: '#F5FCFF',
        padding: 10,
        width: '92%',
        left: '4%',
        flex: 1,
        position: 'absolute',
        zIndex: 2,
        bottom: '-50%',
        borderRadius: 10
        // border: '2px solid #ccc',
    },
    titleSearchContainer: {
        paddingLeft: 8,
    },
    infoText: {
        textAlign: 'center',
    },
    autocompleteContainer: {
        flex: 1,
        // height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        borderRadius: 10
    },
    searchIcon: {
        //padding: 10,
        paddingLeft: 10,
        backgroundColor: 'transparent',
    },
    inputContainer: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        marginLeft: 10,
    }
});

const darkStyle = StyleSheet.create({
    
    container: {
        position: 'absolute',
        flex: 1,
        zIndex: 1,
        width: '98%',
        left: '1%',
        top: '5%',
        borderRadius: 10
    },
    itemText: {
        fontSize: 15,
        margin: 2,
    },
    titleSearchContainerWrap: {
        backgroundColor: '#ccc',
        padding: 10,
        width: '92%',
        left: '4%',
        flex: 1,
        position: 'absolute',
        zIndex: 2,
        bottom: '-50%',
        borderRadius: 10
        // border: '2px solid #ccc',
    },
    titleSearchContainer: {
        paddingLeft: 8,
    },
    infoText: {
        textAlign: 'center',
    },
    autocompleteContainer: {
        flex: 1,
        // height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: '#333',
        flex: 1,
        padding: 10,
        borderRadius: 10
    },
    searchIcon: {
        //padding: 10,
        paddingLeft: 10,
    },
    inputContainer: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        marginLeft: 10
    }
});

