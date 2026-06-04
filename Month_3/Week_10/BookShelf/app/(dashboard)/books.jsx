import { StyleSheet } from 'react-native'
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"

const Books = () => {
    return (
        <ThemedView style={styles.container} safe={ true}>
            <ThemedText title={true} style={styles.heading}>
                Your Reading List
            </ThemedText>
            <ThemedText style={{ padding:20, fontSize: 16 }}>
                1. The Hunger Games
            </ThemedText>
            <ThemedText style={{ padding:20, fontSize: 16 }}>
                2. Hobbit
            </ThemedText>
            <ThemedText style={{ padding:20, fontSize: 16 }}>
                3. The Hunger Games
            </ThemedText>
        </ThemedView>
    )
}

export default Books

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
})