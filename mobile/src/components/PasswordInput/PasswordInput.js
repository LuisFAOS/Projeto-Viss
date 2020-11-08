import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { EyeIconContainer, InputBox, InputIcons, TextInput } from '../InputBox/styles';

const PasswordInput = props => { 

    const inputRef = React.useRef(null)

    const [isSecureText, setIsSecureText] = React.useState(true)

    const ChangeSecureText = () => {
        setIsSecureText(!isSecureText)
    }

    return (
        <InputBox>
            <TouchableWithoutFeedback onPress={()=> inputRef.current.focus()}>
                <InputIcons name={props.iconName} size={35}/>
            </TouchableWithoutFeedback>
            <TextInput 
                placeholder={props.placeholder} 
                secureTextEntry={isSecureText}
                autoCapitalize="none"
                {...props}/>
            {isSecureText ? (<EyeIconContainer onPress={ChangeSecureText}>
                                <Ionicons name="md-eye-off" size={28} color="black" />
                            </EyeIconContainer>)

                            :(<EyeIconContainer onPress={ChangeSecureText}>
                                <Ionicons name="md-eye" size={28} color="black" />
                            </EyeIconContainer>)
            }
        </InputBox>
    )
}

export default PasswordInput