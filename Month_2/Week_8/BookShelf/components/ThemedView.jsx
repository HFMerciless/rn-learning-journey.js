import {View, useColorScheme, StyleSheet} from 'react-native'
import React from 'react'
import { Colors } from "../Constants/Colors";

const ThemedView = ({ style, ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme || 'light'];

    const flattenedStyle = StyleSheet.flatten(style);

    return (
        <View
            style={[
                { backgroundColor: theme.background },
                flattenedStyle
            ]}
            {...props}
        />
    )
}
export default ThemedView;