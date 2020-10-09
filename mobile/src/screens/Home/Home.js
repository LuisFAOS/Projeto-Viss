import React from 'react'
import { useFonts } from 'expo-font';

import Header from '../../components/Header/Header'
import { useIsDrawerOpen } from '@react-navigation/drawer'
import {
    Welcomes,
    Image,
    ContainerImage,
    Title, 
    Description,
    Card,
    CardTitle
} from './styles'

export default function Home({ navigation }){

    const [loaded] = useFonts({
        BebasTitle: require('../../assets/fonts/BebasNeue-Regular.ttf'),
        NanumDesc: require('../../assets/fonts/NanumGothic-Regular.ttf')
    });
    
      if (!loaded) {
          console.log('não esta carregandao')
        return null;
      }

    const isDrawerOpen = useIsDrawerOpen()

    const ShowDrawer = () => {
        if(!isDrawerOpen){
            navigation.openDrawer();
        }
    }

    return(
        <>
            <Header Pressed={ShowDrawer}/>
            <Welcomes>
                <ContainerImage>
                    <Image source={require('../../assets/homeImgs/welcome.png')}/>
                </ContainerImage>
                <Title>BEM VINDO AO VISS!!</Title>
                <Description>
                   <Card>
                       <CardTitle>Insira B.O's</CardTitle>

                    </Card>
                   <Card>
                        <CardTitle>Consulte B.O's</CardTitle>
                            

                    </Card>
                   <Card>
                        <CardTitle>Receba notificações</CardTitle>
                      

                    </Card>
                   <Card>
                        <CardTitle>Trace Rotas</CardTitle>
                       

                    </Card>
                </Description>
            </Welcomes>
        </>
    )
}