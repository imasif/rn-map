import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, Platform } from 'react-native';
import SearchBar from './searchbar';
import OverlayButtonWrap from './OverlayButtons';
import OverlayLocation from './map_place';

export default function Map({ theme, changeTheme }) {
    const [locations, setLocations] = React.useState([
        {
            latitude: 23.872896242844426,
            longitude: 90.39932911312448,
            image: 'https://raw.githubusercontent.com/imasif/rn-map/main/assets/1.jpg',
            name: 'Great Home',
            address: 'Azampur, Dhaka, Bangladesh',
        },
        {
            latitude: 23.869992173301274,
            longitude: 90.41228954738831,
            image: 'https://raw.githubusercontent.com/imasif/rn-map/main/assets/2.jpg',
            name: 'Great Food',
            address: 'Chalabon, Dhaka, Bangladesh',
        },
        {
            latitude: 23.86112258472573,
            longitude: 90.43031399239099,
            image: 'https://raw.githubusercontent.com/imasif/rn-map/main/assets/3.jpg',
            name: 'Great Scene',
            address: 'Dakkhinkhan, Dhaka, Bangladesh',
        },
    ]);

    const [selectedLocation, setSelectedLocation] = React.useState(null);

    const [selectedLocationIdx, setSelectedLocationIdx] = React.useState(null);

    return (
        <View style={lightStyle.container}>
            <SearchBar theme={theme} />
            <OverlayButtonWrap theme={theme} changeTheme={changeTheme} />
            <MapView
                provider = { MapView.PROVIDER_GOOGLE }
                initialRegion={{
                    latitude: 23.863798355751083,
                    longitude: 90.41458563425171,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                customMapStyle={theme == 'light' ? []: mapDarktheme} style={theme == 'light' ? lightStyle.map : darkStyle.map}>

                    {locations.length > 0 && locations.map((location, index) =>(
                    
                        <MapView.Marker
                            style={{width:120, height:120}}
                            key={index}
                            title=""
                            coordinate={{
                                latitude: parseFloat(location.latitude),
                                longitude: parseFloat(location.longitude),
                            }}
                            onPress={() => {
                                setSelectedLocation(location);
                                setSelectedLocationIdx(index);
                            }}
                            >
                            <View style={[theme == 'light' ? lightStyle.markerView : darkStyle.markerView, selectedLocationIdx == index ? theme == 'light' ? lightStyle.markerViewSelected : darkStyle.markerViewSelected : {}]}>
                                <Image source={require('../assets/map_marker.png')} style={{width:25, height:25}} />
                            </View>  
                            </MapView.Marker>
                    ))}
            </MapView>

            {selectedLocation != null && (
                <OverlayLocation theme={theme} selectedLocation={selectedLocation} />
            )}
        </View>
    );
}

const mapDarktheme = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#181818"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1b1b1b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8a8a8a"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#373737"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3c3c3c"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3d3d3d"
            }
        ]
    }
]

const lightStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    markerView: {
        backgroundColor: "white", 
        elevation: 5,
        shadowColor: '#D9D9D7',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        padding: 7,
        width:40,
        height:40,
        borderRadius: 50,
        borderColor: '#D9D9D7',
        borderWidth:1
    },
    markerViewSelected: {
        borderColor: '#060606',
        borderWidth: 2, 
        padding: 10,
        width:49,
        height:49,
        ...Platform.select({
            ios: {
                padding: 7,
                width:40,
                height:40,
            }
        }),
    }
});


const darkStyle = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#000',
    },
    map: {
        backgroundColor: '#000',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    markerView: {
        backgroundColor: "#333", 
        elevation: 5,
        shadowColor: '#D9D9D7',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        padding: 7,
        width:40,
        height:40,
        borderRadius: 50,
        borderColor: '#333',
        borderWidth:1
    },
    markerViewSelected: {
        borderColor: '#fff',
        borderWidth: 2, 
        padding: 10,
        width:49,
        height:49,
        ...Platform.select({
            ios: {
                padding: 7,
                width:40,
                height:40,
            }
        }),
    }
});