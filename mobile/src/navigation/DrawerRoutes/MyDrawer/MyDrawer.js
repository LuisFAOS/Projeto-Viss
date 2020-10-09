import React from 'react';

import { FontAwesome } from '@expo/vector-icons'; 

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import {
    Wrapper,
    Label
} from './styles'


export default function MyDrawer(props){
    return (  
        <DrawerContentScrollView {...props}>
            <Wrapper source={require('../../../assets/drawer-background.jpg')}>
                <FontAwesome name="user-circle-o" size={90} color="white" />                
                <Label>Silton Mantos</Label>
            </Wrapper>
            <DrawerItemList {...props} activeTintColor="green"/>
        </DrawerContentScrollView>
    )
}