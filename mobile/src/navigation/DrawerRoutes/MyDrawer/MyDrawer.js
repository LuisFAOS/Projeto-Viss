import React from 'react';

import { Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import {
    Wrapper,
    UserImage,
    Label
} from './styles'


export default function MyDrawer(props){
    return (  
        <DrawerContentScrollView {...props}>
            <Wrapper source={require('../../../assets/drawer-background.jpg')}>
                <UserImage source={require('../../../assets/userImgs/default-user-img.png')}/>
                <Label>Silton Mantos</Label>
            </Wrapper>
            <DrawerItemList {...props} activeTintColor="green"/>
        </DrawerContentScrollView>
    )
}