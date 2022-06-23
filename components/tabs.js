
import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { AntDesign, Feather, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Empty from './empty';

const Tab = createBottomTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#000',
    },
    headerShown: false,
    componentBackgroundColor: '#000',
};

export default function TabBar({ theme }) {
    return (
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
                initialRouteName="compass"
                screenOptions={{
                    tabBarActiveTintColor:  theme == 'light' ? '#454545' : '#fff',
                    tabBarInactiveTintColor: theme == 'light' ? '#454545' :  '#fff',
                    tabBarStyle: { 
                        backgroundColor: theme == 'light' ? '#fff' : '#000',
                        borderTopWidth: 0,
                        borderTopColor: "transparent",
                        elevation: 0,
                     },
                }}>
                <Tab.Screen
                    name="compass"
                    component={Empty}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="compass" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="map"
                    component={Empty}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="map" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="add"
                    component={Empty}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <View style={{ marginTop: -25, width: 50, height: 50, backgroundColor: 'red', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <AntDesign name="plus" color={'white'} size={30} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="notifications"
                    component={Empty}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="notifications-outline" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="SettingsStack"
                    component={Empty}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5
                                name="user"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

