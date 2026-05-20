import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import {Link} from "expo-router";
import ThemedButton from "../../components/ThemedButton";

const Register = () => {
    const handleSubmit = () => {
        console.log("Register")
    }
    return (
        <ThemedView style={styles.container}>
            <Spacer height={20}/>
            <ThemedText title={true} style={styles.title}>Register For Your New Account</ThemedText>
            <ThemedButton onPress={handleSubmit}>
                <Text style={{color: '#f2f2f2'}}>
                    Register
                </Text>
            </ThemedButton>
            <Spacer height={50}/>
            <Link style={styles.button} href="/login">
                <ThemedText style={{textAlign: 'center'}}>
                    Login
                </ThemedText>
            </Link>
        </ThemedView>
    )
}
export default Register
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
    }
})
