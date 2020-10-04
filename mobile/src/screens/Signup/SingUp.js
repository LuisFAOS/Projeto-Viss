import React, { useState } from 'react';

import { StatusBar, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, ScrollView, View, Text } from 'react-native';
import SplitPage from './SplitPage/SplitPage'

import {Button, ButtonText} from '../../components/Button/styles'
import {
    Container,
    ChangePageButton,
    ButtonContainer,
    ArrowIcon
} from './styles'


export default function SingUp(){

    const [activePage, setActivePage] = useState({
        Page: {
            title: "Seja um\nusuário Viss",
            PlaceHolders: ["Email", "Senha"],
            IconsName: ["email", "vpn-key"],

            isPassword:true
        },
        id: 'first'
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

    return (
        <KeyboardAvoidingView behavior='height'>
            <Container colors={['black', 'green']}>
                <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
                    <ScrollView>
                        
                        <SplitPage 
                            title={activePage.Page.title}
                            firstInputPlaceholder={activePage.Page.PlaceHolders[0]}
                            firstIconName={activePage.Page.IconsName[0]}
                
                            secondInputPlaceholder={activePage.Page.PlaceHolders[1]}
                            secondIconName={activePage.Page.IconsName[1]}
                            isPassword={activePage.Page.isPassword}
                        />
                        <ButtonContainer page={activePage.id}>
                            <ChangePageButton page={activePage.id} onPress={() => ChangePageHandler()}>
                                <ArrowIcon 
                                    name={activePage.id === 'first' ? 'arrow-forward' : 'arrow-back'} 
                                    size={35}
                                />
                            </ChangePageButton>
                            {activePage.id === 'second' ?
                                <Button>
                                    <ButtonText>FINALIZAR</ButtonText>
                                </Button> : 
                               <ChangePageButton onPress={() => ChangePageHandler()}>
                                    <ArrowIcon 
                                        name='arrow-back'
                                        size={35}
                                    />
                                </ChangePageButton>
                            }    
                        </ButtonContainer>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </Container>
        </KeyboardAvoidingView>
    )
}