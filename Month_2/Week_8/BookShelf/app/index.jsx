import { StyleSheet, Text, View, Image } from 'react-native'
import {Link} from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo source={require('../assets/BookShelf.jpg')} />
            <Spacer height={15}/>
            <ThemedText style={styles.title} title={true}>
                Hello I am HF_Merciless and this is my App
            </ThemedText>
            <Spacer height={20}/>
            <ThemedText>Welcome to my App</ThemedText>
            <View style={styles.card}>
                <ThemedText>
                    hello world
                </ThemedText>
            </View>
            <Link style={styles.button} href="/login">
                <ThemedText>Login Page</ThemedText>
            </Link>
            <Link style={styles.button} href="/register">
                <ThemedText>Register Page</ThemedText>
            </Link><Link style={styles.button} href="/profile">
                <ThemedText>Profile</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: "#e16565",
        borderRadius: 5,
        padding: 10,
        margin: 10,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        padding: 10,
        backgroundColor: '#488f9f',
        borderRadius: 4,
        margin: 5

    }
})