import React from 'react'
import { useFonts } from 'expo-font';

import Header from '../../components/Header/Header'
import { useIsDrawerOpen } from '@react-navigation/drawer'
import {
    Welcomes,
    Image,
    IntroductionImage,
    Title, 
    Description,
    Card,
    CardTitle,
    CardDesc,
    Label
} from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Text } from 'react-native';

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
            <Header Pressed={ShowDrawer} page="Verificar Segurança"/>
            <Welcomes>
                <Title>{"BEM VINDO\nAO VISS!"}</Title>
                <IntroductionImage source={require('../../assets/homeImgs/welcome3.png')}/>

                <Label>Nossos serviços</Label>
                <Description>
                   <Card>
                        <CardTitle>Insira B.O's</CardTitle>
                        <MaterialIcons name="create" size={35} color="#41BD1B" style={{marginTop: 12}}/>
                        <CardDesc>
                            Para inserir um B.O, você tem que 
                            ter o PDF/imagem do mesmo!
                        </CardDesc>
                    </Card>
                   <Card>
                        <CardTitle>Consulte B.O's</CardTitle>
                        <FontAwesome5 name="sistrix" size={35} color="#41BD1B" style={{marginTop: 12}}/>
                        <CardDesc>
                            Consulte a quantidade de B.O's nas
                            ruas em que deseja, através de
                            gráficos e etc!
                        </CardDesc> 

                    </Card>
                   <Card>
                        <CardTitle>Notificações</CardTitle>
                        <FontAwesome5 name="bell" size={35} color="#41BD1B" style={{marginTop: 12}}/>
                        <CardDesc>
                            Notificaremos quando você estiver
                            em locais onde Qtd. de B.O's 
                            forem acima da média!
                        </CardDesc> 

                    </Card>
                   <Card>
                        <CardTitle>Traçe Rotas</CardTitle>
                        <FontAwesome5 name="route" size={35} color="#41BD1B" style={{marginTop: 12}}/>
                        <CardDesc>
                            Veja a Qtd. de B.O's nas ruas em que
                            você passará após traçar o trajeto!
                        </CardDesc>
                    </Card>
                </Description>
            </Welcomes>
        </>
    )
}

