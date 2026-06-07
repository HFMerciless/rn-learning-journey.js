import { StyleSheet, Text, Pressable } from 'react-native'
import { useUser } from '../../hooks/useUser'
import { useTheme } from '../../contexts/ThemeContext'

import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import ThemedButton from '../../components/ThemedButton'

const Profile = () => {
    const { logout, user } = useUser()
    const { theme, toggleTheme } = useTheme()

    return (
        <ThemedView style={styles.container} safe={true}>


            <Pressable style={styles.cornerToggle} onPress={toggleTheme}>
                <Text style={styles.toggleIcon}>
                    {theme === 'dark' ? '☀️' : '🌙'}
                </Text>
            </Pressable>

            <ThemedText title={true} style={styles.heading}>
                {user?.email || "Guest Account"}
            </ThemedText>
            <Spacer />

            <ThemedText>Time to start reading some books...</ThemedText>
            <Spacer height={25} />

            <ThemedButton onPress={logout}>
                <Text style={{ color: '#f2f2f2', fontWeight: 'bold' }}>Logout</Text>
            </ThemedButton>
        </ThemedView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
    cornerToggle: {
        position: 'absolute',
        top: 50,
        right: 25,
        zIndex: 10,
        backgroundColor: 'rgba(128, 128, 128, 0.15)', // Blends cleanly over dark or light backdrops
        padding: 10,
        borderRadius: 50,
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center'
    },
    toggleIcon: {
        fontSize: 20,
    }
})