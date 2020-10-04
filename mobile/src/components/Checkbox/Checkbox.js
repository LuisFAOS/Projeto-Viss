import React from 'react';

import { Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import { ContainerCheckBox } from './styles'

const CheckBox = ({ selected, onPress, size = 30, color = '#41BD1B', text = '', ...props}) => (
    <ContainerCheckBox onPress={onPress} {...props}>
        <>
            <MaterialIcons
                size={size}
                color={color}
                name={ selected ? 'check-box' : 'check-box-outline-blank'}
            />
            <Text style={{color: 'white'}}> {text} </Text>
        </>
    </ContainerCheckBox>
)

export default CheckBox