import React from 'react'

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 

import {
    Wrapper,
    Label,
    DrawerItemStyled,
    DrawerSection,
    DrawerContentScrollViewS,
    FuncsTitle
} from './styles'

import { DrawerContentScrollView } from '@react-navigation/drawer'

const MyDrawer = ({AuthDatas, navigation}) => {


    return (  
        <DrawerContentScrollViewS>
            <Wrapper source={require('../../../assets/drawer-background.jpg')}>
                <FontAwesome name="user-circle-o" size={90} color="white" />                
                <Label>{AuthDatas.user.name}</Label>
            </Wrapper>
            <FuncsTitle>Perfil</FuncsTitle>
                <DrawerSection>
                    <DrawerItemStyled 
                        activeTintColor="#41BD1B"
                        onPress={()=> navigation.navigate('Meus Dados', {AuthDatas})}
                        label="Meus Dados"
                        icon={({color, size}) => (
                            <MaterialCommunityIcons name="account-badge-horizontal-outline" size={size} color={color} />
                        )}
                    />
                    <DrawerItemStyled 
                        label="Minhas Rotas"
                        icon={({color, size}) => (
                            <MaterialCommunityIcons name="map-marker-distance" size={size} color={color}/>
                        )}
                    />
                    <DrawerItemStyled
                        label="Meus Registros"
                        icon={({color, size}) => (
                            <MaterialCommunityIcons name="comment-text-multiple-outline" size={size} color={color}/>
                        )}
                    />
                    <DrawerItemStyled
                        pos="ab"
                        label="Sair"
                        icon={({color, size}) => (
                            <MaterialCommunityIcons name="logout" size={size} color={color} />
                        )}
                    />
                </DrawerSection>
        </DrawerContentScrollViewS>
    )
}

export default MyDrawer