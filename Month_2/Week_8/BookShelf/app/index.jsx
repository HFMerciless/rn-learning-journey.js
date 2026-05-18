import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Hello I am HF_Merciless and this is my App</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})