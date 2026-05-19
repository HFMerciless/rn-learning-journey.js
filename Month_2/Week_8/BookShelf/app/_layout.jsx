import {StyleSheet, Text, useColorScheme, View} from 'react-native'
import React from 'react'
import {Slot, Stack} from "expo-router";
import {Colors} from "../Constants/Colors";

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme=Colors[colorScheme || 'light']
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.navBackground,
                },
                headerTintColor: theme.title,
            }}
        >
                <Stack.Screen name="index" options={{headerShown:false ,title: "Home"}}/>
                <Stack.Screen name="about" options={{title: "About"}}/>
                <Stack.Screen name="contact" options={{title: "Contact"}}/>
            </Stack>
    )
}
export default RootLayout
const styles = StyleSheet.create({})
