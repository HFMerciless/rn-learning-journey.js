import { StyleSheet, View } from 'react-native'
import { Colors } from '../Constants/Colors'
import { useTheme } from '../contexts/ThemeContext' // ✅ FIXED: Import custom theme hook

const ThemedCard = ({ style, ...props }) => {
    const { theme: currentTheme } = useTheme() // ✅ FIXED: Read custom theme state
    const theme = Colors[currentTheme] ?? Colors.light

    return (
        <View
            style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
            {...props}
        />
    )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
})