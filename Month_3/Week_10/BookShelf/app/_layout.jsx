import { Stack } from "expo-router"
import { Colors } from "../Constants/Colors"
import { StatusBar } from "expo-status-bar"
import { UserProvider } from "../contexts/UserContext"
import { BookProvider } from "../contexts/BookContext"
import { ThemeProvider, useTheme } from "../contexts/ThemeContext"

function AppContent() {
    const { theme: currentTheme } = useTheme()
    const themeStyles = Colors[currentTheme] ?? Colors.light

    return (
        <>
            <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />

            {/* ✅ FIXED: Set headerShown: false so the main root layout doesn't create a double navigation top bar */}
            <Stack screenOptions={{
                headerShown: false,
                headerStyle: { backgroundColor: themeStyles.navBackground },
                headerTintColor: themeStyles.title,
            }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="(auth)" />
                <Stack.Screen name="(dashboard)" />
            </Stack>
        </>
    )
}

export default function RootLayout() {
    return (
        <ThemeProvider>
            <UserProvider>
                <BookProvider>
                    <AppContent />
                </BookProvider>
            </UserProvider>
        </ThemeProvider>
    )
}