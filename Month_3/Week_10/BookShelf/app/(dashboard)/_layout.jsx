import { Tabs, useRouter } from "expo-router"
import { useEffect } from "react"
import { Colors } from "../../Constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { useUser } from "../../hooks/useUser"
import { useTheme } from "../../contexts/ThemeContext" // ✅ FIXED: Import your custom theme hook
import React from "react"

export default function DashboardLayout() {
    const { theme: currentTheme } = useTheme() // ✅ FIXED: Get custom manual theme state ('light' or 'dark')
    const theme = Colors[currentTheme] ?? Colors.light // ✅ FIXED: Map it to your dictionary values
    const { authState } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (authState === "unauthenticated") {
            console.log("🔒 Dashboard Guard: Unauthenticated user. Redirecting to login...");
            router.replace("/(auth)/login");
        }
    }, [authState]);

    if (authState === "loading" || authState === "idle") {
        return null;
    }

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.navBackground, // ✅ Updates dynamically now!
                    paddingTop: 10,
                    height: 90,
                    borderTopWidth: 0 // Optional: removes the hairline border line on tabs
                },
                tabBarActiveTintColor: theme.iconColorFocused, // ✅ Updates dynamically now!
                tabBarInactiveTintColor: theme.iconColor, // ✅ Updates dynamically now!
            }}
        >
            <Tabs.Screen
                name="books"
                options={{
                    title: "Books",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            size={24}
                            name={focused ? 'book': 'book-outline'}
                            color={focused ? theme.iconColorFocused : theme.iconColor}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="create"
                options={{
                    title: "Create",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            size={24}
                            name={focused ? 'create': 'create-outline'}
                            color={focused ? theme.iconColorFocused : theme.iconColor}
                        />
                    )
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            size={24}
                            name={focused ? 'person': 'person-outline'}
                            color={focused ? theme.iconColorFocused : theme.iconColor}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name = "books/[id]"
                options={{ href: null }}
            />
        </Tabs>
    )
}