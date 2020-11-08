import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import {
    InputBox,
    InputIcons,
    TextInput
} from './styles'

const Input = props => { 

    const inputRef = React.useRef(null)

    return (
        <InputBox>
            <TouchableWithoutFeedback onPress={()=> inputRef.current.focus()}>
                <InputIcons name={props.iconName} size={35}/>
            </TouchableWithoutFeedback> 
            <TextInput ref={inputRef} 
                placeholder={props.placeholder} 
                autoCapitalize="none" 
                {...props}/>
        </InputBox>
    )
}

export default Input