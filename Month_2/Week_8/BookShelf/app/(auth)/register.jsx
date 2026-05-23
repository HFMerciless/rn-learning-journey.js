import {Keyboard, StyleSheet, Text, TouchableWithoutFeedback,} from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import {useUser} from "../../hooks/useUser";
import {Colors} from "../../Constants/Colors";
//Components
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";


const Register = () => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const {register} = useUser()

    const handleSubmit = async () => {
        try {
            await register(username, password)
        } catch (error) {
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
            <Spacer height={20}/>
            <ThemedText title={true} style={styles.title}>Register For Your New Account</ThemedText>
            <ThemedTextInput
                style={{width:'80%', marginBottom:10}}
                placeholder={"Username"}
                onChangeText={setUsername}
                value={username}
            />
            <ThemedTextInput
                style={{width:'80%', marginBottom:10}}
                placeholder={"Password"}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
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
        </TouchableWithoutFeedback>
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
