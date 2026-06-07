import { Image } from 'react-native'
import { useTheme } from '../contexts/ThemeContext' // ✅ Import custom theme hook

import DarkLogo from '../assets/BookShelf_Dark.png'
import LightLogo from '../assets/BookShelf.jpg'

const ThemedLogo = ({ style, ...props }) => {
    const { theme: currentTheme } = useTheme() // ✅ Read custom theme state

    const logo = currentTheme === 'dark' ? DarkLogo : LightLogo

    return (
        <Image source={logo} style={[{ width: 100, height: 100 }, style]} {...props} />
    )
}

export default ThemedLogo