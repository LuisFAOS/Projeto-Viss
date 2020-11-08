import React from 'react'

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 

import {
    Wrapper,
    Label,
    DrawerItemStyled,
    DrawerSection,
    DrawerContentScrollViewS,
    FuncsTitle,
    ProfileImageWrapper
} from './styles'

import { DrawerContentScrollView } from '@react-navigation/drawer'
import baseURL from '../../../baseURL';
import { Image } from 'react-native';

const MyDrawer = ({AuthDatas, navigation}) => {

    const [profileImage, setProfileImage] = React.useState({uri:'',img:''})

    const LoadProfileImage = async () => {
        try {
            const response = await fetch(`${baseURL}user`, {
                method: 'GET',
                headers: {authorization: AuthDatas.token}
            })
    
            const responseData = await response.json()
            setProfileImage({uri:'data:image/jpg;base64,'+responseData.img.base64,img:responseData.img})
            
            return () => console.log(profileImage);

        } catch (e) {
            return () => console.log("ERRO!"+e);
        }

    }

    React.useEffect(() => {
        LoadProfileImage()
    },[])
    
    return (  
        <DrawerContentScrollViewS>
            <Wrapper source={require('../../../assets/drawer-background.jpg')}>
                <ProfileImageWrapper>
                    <Image source={{uri:"data:image/jpg;base64,YmVhNThjMGZjZTY0MDNjYjQ1ZWQtYWUwYzVhZTAtNWRhMi00YzlmLTkyNjMtNWMxZjI5NjdlN2VlLmpwZw==ZWJkMzg2ODU5NjVhMmZmZDk3MDQtbWF4cmVzZGVmYXVsdC5qcGc="}} style={{height: 100, width: 100 }}/>              
                </ProfileImageWrapper>
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