import { loadAsync } from 'expo-font';
async function RobotoFontLoader(){
    await loadAsync({
        RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
        RobotoLight: require('../assets/fonts/Roboto-Light.ttf')
    })
}

export default RobotoFontLoader
