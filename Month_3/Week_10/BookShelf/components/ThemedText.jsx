import { Text } from 'react-native'
import { Colors } from '../Constants/Colors'
import { useTheme } from "../contexts/ThemeContext"; // ✅ FIXED: Import your custom hook

const ThemedText = ({ style, title = false, ...props }) => {
  const { theme: currentTheme } = useTheme(); // ✅ FIXED: Read manually toggled theme state
  const theme = Colors[currentTheme] ?? Colors.light

  const textColor = title ? theme.title : theme.text

  return (
      <Text
          style={[{ color: textColor }, style]}
          {...props}
      />
  )
}

export default ThemedText