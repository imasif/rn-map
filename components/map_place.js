import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


export default function OverlayLocation({ theme, selectedLocation }) {
    const { image, name, address } = selectedLocation;
    return (
        <View style={theme == 'light' ? lightStyle.container : darkStyle.container}>
            <Image source={{ uri: image }} resizeMode={'contain'} style={theme == 'light' ? lightStyle.image : darkStyle.image} />
            <View style={theme == 'light' ? lightStyle.infoContainer : darkStyle.infoContainer}>
                <Text style={theme == 'light' ? lightStyle.name : darkStyle.name}>{name}</Text>
                <Text style={theme == 'light' ? lightStyle.address : darkStyle.address}>{address}</Text>
            </View>
        </View>
    );
};

var lightStyle = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: '5%',
        right: '4%',
        elevation: 7,
        shadowColor: '#D9D9D7',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        flex: 1,
        display: 'flex',
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        padding: 15,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white',
        width: '92%',
        borderRadius: 10
    },
    image: {
        width: 80,
        height: 80,
    },
    infoContainer: {
        display: 'flex',
        zIndex: 1,
        flexDirection: 'column',
        marginLeft: 20
    },
    name: {
        fontSize: 18,
        color: '#606060',
        marginLeft: 10,
        marginTop: 2,
        fontWeight: 'bold',
    },
    address: {
        fontSize: 14,
        color: '#606060',
        marginLeft: 10,
        marginTop: 2,
    },
});

var darkStyle = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: '5%',
        right: '4%',
        elevation: 7,
        flex: 1,
        display: 'flex',
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        padding: 15,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#333',
        width: '92%',
        borderRadius: 10
    },
    image: {
        width: 80,
        height: 80,
    },
    infoContainer: {
        display: 'flex',
        zIndex: 1,
        flexDirection: 'column',
        marginLeft: 20
    },
    name: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 10,
        marginTop: 2,
        fontWeight: 'bold',
    },
    address: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 10,
        marginTop: 2,
    },
});
