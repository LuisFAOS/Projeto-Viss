import React,{ useState } from 'react'
import RobotoFontLoader from '../../FontConfig/RobotoFontConfig';


import Header from '../../components/Header/Header'
import {
    Welcomes,
    IntroductionImage,
    Title, 
    Description,
    ContainerBolls,
    NavigationCircle,
    ContainerButton,
    Button
} from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export default function Home({ navigation}){

    const Contents= [
        {
            title: "Insira boletins de ocorrências",
            description: "Com o pdf ou imagem do seu B.O, você pode fazer o "+
                        "registro no site e ajudar sua vizinhança!"
        },
        {
            title: "Consulte boletins de ocorrência",
            description: "Fique por dentro da QTD. de registro que seu "+
                        "bairro, ou rua, possui"
        },
        {
            title: "Sistema de notificação",
            description: "Notificaremos a QTD. de B.O's. que o bairro, ou rua, "+
                        "que você passou, possui."
        },
        {
            title: "Traçe rotas de outra maneira",
            description: "Junto com as ruas que você passará, terá também a "+ 
                        "QTD. de B.O's. da mesma."
        }
    ]

    //State

    const [ActivedContentIndice, setActivedContentIndice] = useState(0)

    const PreviousPage = indice => {
        const newIndice = indice-1 < 0 ? 3 : indice-1

        setActivedContentIndice(newIndice)
    } 

    const NextPage = indice => {
        const newIndice = indice+1 > 3 ? 0 : indice+1

        setActivedContentIndice(newIndice)
    }

    //Fonts configurantion

    RobotoFontLoader()


    // View code

    return(
        <>
            <Header navigation={navigation} page="Verificar Segurança"/>
            <Welcomes>
                <IntroductionImage display={ActivedContentIndice == 0} source={require(`../../assets/homeImgs/homeImg0.png`)}/>
                <IntroductionImage display={ActivedContentIndice == 1} source={require(`../../assets/homeImgs/homeImg1.png`)}/>
                <IntroductionImage display={ActivedContentIndice == 2} source={require(`../../assets/homeImgs/homeImg2.png`)}/>
                <IntroductionImage display={ActivedContentIndice == 3} source={require(`../../assets/homeImgs/homeImg3.png`)}/>

                <Title>{Contents[ActivedContentIndice].title}</Title>
                <Description>
                    {Contents[ActivedContentIndice].description}
                </Description>
                <ContainerBolls>
                    <NavigationCircle color={ActivedContentIndice == 0 ? "#41BD1B" : "gray"}/>
                    <NavigationCircle color={ActivedContentIndice == 1 ? "#2F2E41" : "gray"}/>
                    <NavigationCircle color={ActivedContentIndice == 2 ? "#41BD1B" : "gray"}/>
                    <NavigationCircle color={ActivedContentIndice == 3 ? "#2F2E41" : "gray"}/>
                </ContainerBolls>
                <ContainerButton>
                    <Button onPress={()=> PreviousPage(ActivedContentIndice)}>
                        <MaterialIcons 
                            name="keyboard-arrow-left"
                            size={65} 
                            color="#2F2E41"/>
                    </Button>
                    <Button onPress={() => NextPage(ActivedContentIndice)}>
                        <MaterialIcons 
                            name="keyboard-arrow-right"
                            size={65} 
                            color="#2F2E41"/>
                    </Button>
                </ContainerButton>
            </Welcomes>
        </>
    )
}

