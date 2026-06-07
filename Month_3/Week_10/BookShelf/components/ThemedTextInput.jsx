import { TextInput } from 'react-native'
import { Colors } from '../Constants/Colors'
import { useTheme } from '../contexts/ThemeContext' // ✅ FIXED: Import custom theme hook

export default function ThemedTextInput({ style, ...props }) {
    const { theme: currentTheme } = useTheme() // ✅ FIXED: Read custom theme state
    const theme = Colors[currentTheme] ?? Colors.light

    return (
        <TextInput
            style={[
                {
                    backgroundColor: theme.uiBackground,
                    color: theme.text,
                    padding: 20,
                    borderRadius: 6,
                },
                style
            ]}
            placeholderTextColor={currentTheme === 'dark' ? '#777' : '#aaa'} // Optional: makes placeholder legible in both modes
            {...props}
        />
    )
}