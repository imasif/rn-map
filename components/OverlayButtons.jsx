import Autocomplete from 'react-native-autocomplete-input';
import PropTypes from 'prop-types';
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Platform,
} from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';


export default function OverlayButtonWrap({theme, changeTheme}) {

    return (
        <View style={lightStyle.btnClickContain}>
            <TouchableOpacity style={theme == 'light' ? lightStyle.buttonStyle: darkStyle.buttonStyle}
                onPress={() => {
                    if(theme === 'light'){
                        theme = 'dark';
                    }else{
                        theme = 'light';
                    }
                    changeTheme(theme) 
                }}
                underlayColor='#042417'>
                <View
                    style={theme == 'light' ? lightStyle.btnContainer : darkStyle.btnContainer}>
                    {theme == 'light' ? <FontAwesome name="toggle-on" size={30} color="black" /> : <FontAwesome name="toggle-off" size={30} color="white" />}
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { }}
                underlayColor='#042417'>
                <View
                    style={theme == 'light' ? lightStyle.btnContainer : darkStyle.btnContainer}>
                    {theme == 'light' ? <Ionicons name="md-navigate-outline" size={30} color="black" /> : <Ionicons name="md-navigate-outline" size={30} color="white" />}
                </View>
            </TouchableOpacity>
        </View>
    );
};

var lightStyle = StyleSheet.create({
    btnClickContain: {
        position: 'absolute',
        top: '25%',
        right: '8%',
        flex: 1,
        zIndex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    btnContainer: {
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        padding: 10,
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        borderRadius: 50,
    },
    btnIcon: {
        height: 25,
        width: 25,
    },
    btnText: {
        fontSize: 18,
        color: '#FAFAFA',
        marginLeft: 10,
        marginTop: 2,
    }
});


var darkStyle = StyleSheet.create({
    btnClickContain: {
        position: 'absolute',
        top: '25%',
        right: '8%',
        flex: 1,
        zIndex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    btnContainer: {
        backgroundColor: '#333',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        padding: 10,
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        borderRadius: 50,
    },
    btnIcon: {
        height: 25,
        width: 25,
    },
    btnText: {
        fontSize: 18,
        color: '#FAFAFA',
        marginLeft: 10,
        marginTop: 2,
    }
});

