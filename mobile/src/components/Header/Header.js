import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'; 

import { Text } from 'react-native'

import {
    Container,
    WrapperMenu,
    ActivedPage
} from './styles'

export default function Header(props){

    return(
        <Container>
            <WrapperMenu onPress={props.Pressed}>
                <MaterialIcons 
                    name="menu" 
                    size={45} 
                    color="black"
                />
            </WrapperMenu>
            <MaterialIcons name="home" size={40} color="black" style={{marginRight: 25}}/>
        </Container>
    )
}