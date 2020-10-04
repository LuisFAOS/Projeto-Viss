import React from 'react';

import {
    InputBox,
    InputIcons,
    TextInput
} from './styles'

const Input = props => { 
    return (
        <InputBox>
            <InputIcons name={props.iconName} size={35}/>
            <TextInput placeholder={props.placeholder} {...props}/>
        </InputBox>
    )
}

export default Input