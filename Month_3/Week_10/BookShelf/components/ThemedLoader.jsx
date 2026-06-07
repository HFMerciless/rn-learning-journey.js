import { ActivityIndicator } from "react-native";
import { Colors } from "../Constants/Colors";
import { useTheme } from '../contexts/ThemeContext' // ✅ FIXED: Import custom theme hook
import ThemedView from "./ThemedView";

const ThemedLoader = () => {
    const { theme: currentTheme } = useTheme() // ✅ FIXED: Read custom theme state
    const theme = Colors[currentTheme] ?? Colors.light

    return (
        <ThemedView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color={theme.title} />
        </ThemedView>
    )
}
export default ThemedLoader