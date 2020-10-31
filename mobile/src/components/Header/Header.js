import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'; 

import { useIsDrawerOpen } from '@react-navigation/drawer'

import {
    Container,
    WrapperMenu,
    AppName
} from './styles'

export default function Header(props){
    const isDrawerOpen = props.goBack || useIsDrawerOpen()
    
    const ShowDrawer = () => {

        if(!isDrawerOpen){
            props.navigation.openDrawer();
        }
    }


    return(
        <Container>
            <WrapperMenu onPress={props.goBack ? () => props.navigation.goBack() : () => ShowDrawer()}>
                <MaterialIcons 
                    name={props.goBack ? 'arrow-back' : 'menu'}
                    size={45} 
                    color="#2F2E41"
                />
            </WrapperMenu>
            <AppName>
                Viss
            </AppName>
        </Container>
    )
}