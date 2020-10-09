import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'; 

import {
    Container,
    WrapperMenu,
    Logo
} from './styles'

export default function Hearder(props){

    return(
        <Container>
            <WrapperMenu onPress={props.Pressed}>
                <MaterialIcons 
                    name="menu" 
                    size={45} 
                    color="black"
                />
            </WrapperMenu>
            <Logo source={require('../../assets/logo.png')}/>
        </Container>
    )
}