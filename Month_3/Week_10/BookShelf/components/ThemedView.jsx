import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'
import { Colors } from "../Constants/Colors";
import { useTheme } from "../contexts/ThemeContext"; // ✅ FIXED: Import your custom hook

const ThemedView = ({ style, safe=false, ...props }) => {
    const { theme: currentTheme } = useTheme(); // ✅ FIXED: Read manually toggled theme state
    const theme = Colors[currentTheme || 'light'];

    const flattenedStyle = StyleSheet.flatten(style);

    if (!safe) return (
        <View
            style={[
                { backgroundColor: theme.background }, style
            ]}
            {...props}
        />
    )

    const insets = useSafeAreaInsets()

    return (
        <View
            style={[
                {
                    backgroundColor: theme.background,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                },
                style
            ]}
            {...props}
        />
    )
}
export default ThemedView;