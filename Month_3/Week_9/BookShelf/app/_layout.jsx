import { Stack } from "expo-router"
import { Colors } from "../Constants/Colors"
import { useColorScheme } from "react-native"
import { StatusBar } from "expo-status-bar"
import { UserProvider } from "../contexts/UserContext"

// TODO: Appwrite project is fully setup and active on cloud panel.
// Current task: Debug why local context login function state updates do not trigger Expo Router navigation.

export default function RootLayout() {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <UserProvider>
            <StatusBar value="auto" />
            <Stack screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title,
            }}>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
                <Stack.Screen name="index" options={{ title: "Home" }} />
            </Stack>
        </UserProvider>
    )
}