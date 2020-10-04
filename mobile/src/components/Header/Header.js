import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'; 

import {
    Container,
    WrapperMenu
} from './styles'

export default function Hearder(props){

    return(
        <Container>
            <WrapperMenu onPress={props.Pressed}>
                <MaterialIcons 
                    name="menu" 
                    size={40} 
                    color="white"
                />
            </WrapperMenu>
            
        </Container>
    )
}