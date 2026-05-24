import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import Spacer from '../components/Spacer';

export default function Index() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.title}>
                The Number 1 Reading List App
            </ThemedText>

            <Spacer height={20} />

            {/* Manual Navigation Links to move around like Net Ninja */}
            <Link href="/login" style={styles.link}>
                <Text style={styles.linkText}>Login Page</Text>
            </Link>

            <Link href="/register" style={styles.link}>
                <Text style={styles.linkText}>Register Page</Text>
            </Link>

            <Link href="/(dashboard)/books" style={styles.link}>
                <Text style={styles.linkText}>Profile Page</Text>
            </Link>
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
        marginBottom: 40,
    },
    link: {
        marginVertical: 10,
    },
    linkText: {
        color: '#a076f9',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});