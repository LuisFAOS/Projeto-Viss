import React, {createContext, useEffect, useState} from 'react'
import { Animated, Keyboard } from 'react-native'

const HideKeyboardContext = createContext({ isKeyboardOpen: false})

export function HideKeyboardProvider({children}) {

    const [image] = useState(new Animated.Value(1))
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

    useEffect(()=> {
        KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
    },[])
    

    function keyboardDidShow (){

        setIsKeyboardOpen(true)

        Animated.parallel([
            Animated.timing(image,{
                toValue: 0.5882,
                duration: 100,
                useNativeDriver: true

            })
        ]).start();

    }

    function keyboardDidHide (){

        setIsKeyboardOpen(false)

        Animated.parallel([
            Animated.timing(image,{
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            })
        ]).start();

    }

    
    return (
        <HideKeyboardContext.Provider value={{isKeyboardOpen, image, setIsKeyboardOpen}}>
            {children}
        </HideKeyboardContext.Provider>
    )
}

export default HideKeyboardContext;
