import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useUser } from '../hooks/useUser';

import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import { Colors } from "../Constants/Colors";

export default function Index() {
    const router = useRouter();
    const { authState } = useUser();

    useEffect(() => {
        if (authState === "authenticated") {
            console.log("🎒 Welcome back! Fast-tracking to Dashboard...");
            router.replace('/(dashboard)/books');
        }
    }, [authState]);

    const handleProtectedNavigation = (targetPath) => {
        if (authState === "loading" || authState === "idle") {
            console.log("⏳ Still checking backend session status... please wait a second.");
            return;
        }

        if (authState === "unauthenticated") {
            console.log("🔒 Guard: Guest status confirmed. Redirecting to login route explicitly.");
            router.push('/(auth)/login');
        } else {
            router.push(targetPath);
        }
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedLogo/>

            <Spacer height={20} />

            <ThemedText title={true} style={styles.title}>
                The Number 1 Reading List App
            </ThemedText>

            <Spacer height={40} />

            <TouchableOpacity
                onPress={() => router.push('/(auth)/login')}
                style={styles.linkButton}
            >
                <Text style={styles.linkText}>Login Page</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => router.push('/(auth)/register')}
                style={styles.linkButton}
            >
                <Text style={styles.linkText}>Register Page</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => handleProtectedNavigation('/(dashboard)/books')}
                style={styles.linkButton}
            >
                <Text style={styles.linkText}>Profile Page</Text>
            </TouchableOpacity>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    linkButton: {
        paddingVertical: 12,
        width: '80%',
        alignItems: 'center',
        marginVertical: 8,
    },
    linkText: {
        color: '#ffffff',
        fontSize: 16,
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        borderStyle: 'solid',
        textAlign: 'center',
        width: '100%'
    },
});