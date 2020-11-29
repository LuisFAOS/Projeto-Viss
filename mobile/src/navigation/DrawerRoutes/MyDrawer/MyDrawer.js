import React, { useContext } from 'react'

import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'; 

import {
    Wrapper,
    Label,
    DrawerItemStyled,
    DrawerSection,
    DrawerContentScrollViewS,
    FuncsTitle,
} from './styles'

import { DrawerContentScrollView } from '@react-navigation/drawer'
import baseURL from '../../../baseURL';
import { Image, View } from 'react-native';
import AuthContext from '../../../context/context';

const MyDrawer = ({navigation}) => {

    const [profileImage, setProfileImage] = React.useState({uri:null})

    const {authDatas, signOut} = useContext(AuthContext)

    const LoadProfileImage = async () => {
        try {
            const response = await fetch(`${baseURL}user`, {
                method: 'GET',
                headers: {authorization: authDatas.token}
            })
    
            const responseData = await response.json()
            setProfileImage({uri:'data:image/jpeg;base64, '+responseData.img.base64})
            
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
                <View>
                    {profileImage.uri ?
                        <Image source={profileImage} style={{width: 120, height: 120, borderRadius: 80 }}/>
                    :
                        <Image 
                            source={require('../../../assets/userImgs/default-user-img3.png')} 
                            style={{width: 120, height: 120, borderRadius: 80 }}/>
                    }        
                </View>
                <Label>{authDatas.user.name}</Label>
            </Wrapper>
            <FuncsTitle>Perfil</FuncsTitle>
                <DrawerSection>
                    <DrawerItemStyled 
                        activeTintColor="#41BD1B"
                        onPress={()=> navigation.navigate('Meus Dados', {authDatas})}
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
                        onPress={()=> navigation.navigate('Meus Registros', {authDatas})}
                        icon={({color, size}) => (
                            <MaterialCommunityIcons name="comment-text-multiple-outline" size={size} color={color}/>
                        )}
                    />
                    <DrawerItemStyled
                        pos="ab"
                        label="Sair"
                        onPress={signOut}
                        icon={({color, size}) => (
                            <MaterialCommunityIcons name="logout" size={size} color={color} />
                        )}
                    />
                </DrawerSection>
        </DrawerContentScrollViewS>
    )
}

export default MyDrawer