import {StyleSheet, Pressable, Text} from 'react-native'
import React from 'react'
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import {Link} from "expo-router";
import {Colors} from "../../Constants/Colors";

const Login = () => {
    const handleSubmit = () => {
        console.log("Login")
    }
    return (
        <ThemedView style={styles.container}>
            <Spacer height={20}/>
            <ThemedText title={true} style={styles.title}>Login Your Account</ThemedText>
            <ThemedButton onPress={handleSubmit}>
                <Text style={{color: '#f2f2f2'}}>
                    Login
                </Text>
            </ThemedButton>
            <Spacer height={50}/>
            <Link style={styles.button} href="/register">
                <ThemedText style={{textAlign: 'center'}}>
                    Register
                </ThemedText>
            </Link>
        </ThemedView>
    )
}
export default Login
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
    btn: {
        backgroundColor: Colors .primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8
    }
})
