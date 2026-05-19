import {StyleSheet, Text, useColorScheme, View} from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import {Colors} from "../Constants/Colors";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";

const About = () => {
    const colorScheme = useColorScheme();
    const theme=Colors[colorScheme || 'light']
    return (
        <ThemedView style={[styles.container, {backgroundColor: theme.background}]}>
            <ThemedText style={styles.title}>About Page</ThemedText>
            <Link style={styles.button} href="/">
                <ThemedText>Home Page</ThemedText>
            </Link>
        </ThemedView>
    )
}
export default About
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        padding:10,
        backgroundColor:'#488f9f',
        borderRadius:4,
        margin:5
    }
})
