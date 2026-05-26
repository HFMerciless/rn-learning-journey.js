import { Image, useColorScheme } from 'react-native'

import DarkLogo from '../assets/BookShelf_Dark.png'
import LightLogo from '../assets/BookShelf.jpg'

const ThemedLogo = (...props) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

    return (
        <Image source={logo} style={[{ width: 100, height: 100 }]} {...props} />
    )
}

export default ThemedLogo