import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/map';
import TabBar from './components/tabs';

export default function App() {
    const [theme, setTheme] = React.useState('light');

    const changeTheme = (theme) => {
        console.log(theme);
        setTheme(theme);
    }
    return (
        <View style={theme == 'light' ? lightStyles.container : darkStyles.container}>
            <StatusBar style="auto" />
            <Map theme={theme} changeTheme={changeTheme} />
            <View style={{ height: 50 }}>
                <TabBar theme={theme} />
            </View>
        </View>
    );
}

const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
    },
});
