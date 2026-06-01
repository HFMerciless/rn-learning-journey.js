import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// 💡 IMPORT CLUSTER: Bringing in your custom layout blocks
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import ThemedLogo from '../components/ThemedLogo'; // 👈 1. ADDED THIS IMPORT
import Spacer from '../components/Spacer';

export default function Index() {
    const router = useRouter();

    return (
        <ThemedView style={styles.container}>

            {/* 👈 2. ADDED YOUR LOGO HERE RIGHT ABOVE THE TEXT */}
            <ThemedLogo />

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
                onPress={() => router.push('/(dashboard)/books')}
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
        color: '#a076f9',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});