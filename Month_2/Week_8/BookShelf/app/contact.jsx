import {StyleSheet, Text, useColorScheme, View} from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import {Colors} from "../Constants/Colors";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Contact = () => {
    const colorScheme = useColorScheme();
    const theme=Colors[colorScheme || 'light']
    return (
        <ThemedView style={[styles.container, {backgroundColor: theme.background}]}>
            <ThemedText style={styles.title}>Contact Page</ThemedText>
            <Link style={styles.button} href="/">
                <ThemedText>Home Page</ThemedText>
            </Link>
        </ThemedView>
    )
}
export default Contact
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
