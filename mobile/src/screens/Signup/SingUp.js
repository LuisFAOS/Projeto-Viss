import React, { useState } from 'react';

import { StatusBar, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import SplitPage from './SplitPage/SplitPage'

import {Button, ButtonText} from '../../components/Button/styles'
import {
    Container,
    ChangePageButton,
    ButtonContainer,
    ArrowIcon,
    HeaderTitle
} from './styles'


export default function SingUp({navigation}){

    const [activePage, setActivePage] = useState({
        Page: {
            title: "Seja um\nusuário Viss",
            PlaceHolders: ["Email", "Senha"],
            IconsName: ["email", "vpn-key"],

            isPassword:true
        },
        id: 'first'
    })

    const [UserDatas, setUserDatas] = useState({
        email: '',
        senha: '',
        nome: '',
        CEP: '',
    })

    const ChangePageHandler = () => {    
        if(activePage.id === 'first'){
            setActivePage({
                Page: {
                    title: "Só mais\nalgumas informações",
                    PlaceHolders: ["Nome", "CEP"],
                    IconsName: ["person", "location-on"],
        
                    isPassword:false
                },
                id: 'second'
            })
        }else {
            setActivePage({
                Page: {
                    title: "Seja um\nusuário Viss",
                    PlaceHolders: ["Email", "Senha"],
                    IconsName: ["email", "vpn-key"],
        
                    isPassword:true
                },
                id: 'first'
            })
        }
    }

    const StateHandler = (value, field) => {
        const newState = {...UserDatas}
        newState[field] = value.nativeEvent.text

        setUserDatas({...newState})
    }

    return (
        <Container colors={['black', 'green']}>
            <KeyboardAvoidingView behavior='position'>
                <ChangePageButton onPress={() => activePage.id === 'first' ? 
                    navigation.navigate('Login')
                        :
                    ChangePageHandler()}>  
                    <ArrowIcon 
                        name='arrow-back'
                        size={40}
                    />
                    <HeaderTitle>
                        {activePage.id === 'first' ? 'Login':'Página anterior'}
                    </HeaderTitle>
                </ChangePageButton>
                <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
                    <ScrollView>
                        <SplitPage 
                            title={activePage.Page.title}
                            firstInputValue={activePage.id === 'first' ? UserDatas.email : UserDatas.nome}
                            firstInputPlaceholder={activePage.Page.PlaceHolders[0]}
                            firstIconName={activePage.Page.IconsName[0]}
                            firstInputChangeHandler={value => StateHandler(value, activePage.id === 'first' ? 'email' : 'nome')}
                            
                            secondInputChangeHandler={value => StateHandler(value, activePage.id === 'first' ? 'senha' : 'CEP')}
                            secondInputValue={activePage.id === 'first' ? UserDatas.senha : UserDatas.CEP}
                            secondInputPlaceholder={activePage.Page.PlaceHolders[1]}
                            secondIconName={activePage.Page.IconsName[1]}
                            isPassword={activePage.Page.isPassword}
                        />
                        <ButtonContainer page={activePage.id}>
                            {activePage.id === 'first' ?
                               <Button onPress={ChangePageHandler}>
                                    <ButtonText>PRÓXIMO</ButtonText>
                                    <ArrowIcon 
                                        name='arrow-forward'
                                        size={30}
                                    />
                                </Button>
                                :
                                <Button>
                                    <ButtonText>FINALIZAR</ButtonText>
                                </Button>
                            }    
                        </ButtonContainer>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Container>
    )
}