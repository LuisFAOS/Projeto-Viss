import { Entypo, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View } from 'react-native';
import AppInputBox from '../../../components/AppInputBox/AppInputBox';
import { Error, HeaderInputContainer, InputContainer, TitleInputContainer } from '../styles';
import { Button, ButtonText } from '../../../components/Button/styles';
import { ScrollView } from 'react-native-gesture-handler';
import Loading from '../../../components/Loading/Loading';

function FirstPage(props) {

    const [isExistError, setIsExistError] = useState(false)

    return (
        <InputContainer>
            <ScrollView>
                <View style={{marginBottom: 30}}>
                    <HeaderInputContainer>
                        <Entypo name="location" size={25} color="black" />
                        <TitleInputContainer>Local do ocorrido</TitleInputContainer>
                    </HeaderInputContainer>
                    <AppInputBox
                        onChangeText={endereco_cep => props.Changed("endereco_cep", endereco_cep)}
                        value={props.endereco_cep}
                        
                        labelText="CEP"
                        isExistError={isExistError}

                        maxLength={10}
                        placeholder="Digite o CEP"
                    />
                    <Error>{isExistError && "Verifique se o CEP é válido!"}</Error>
                </View>
                <HeaderInputContainer ocorridoBox>
                    <Ionicons name="md-paper" size={28} color="black" />
                    <TitleInputContainer>Sobre o ocorrido</TitleInputContainer>
                </HeaderInputContainer>
                <AppInputBox
                    onChangeText={desc_registro => props.Changed("desc_registro", desc_registro)}
                    value={props.desc_registro}
                    
                    labelText="Descrição"
                    multiline={true}
                    numberOfLines={4}

                    maxLength={80}
                    placeholder="Descreva brevemente como o incidente aconteceu"
                />

                <View style={{height:50, marginBottom: 40}}>
                    <Button onPress={()=> props.ButtonPressed(setIsExistError)}> 
                        {props.loadingState ? <Loading size={24} color="white"/>: <ButtonText>Próximo</ButtonText>}
                        
                    </Button>
                </View>
            </ScrollView>
        </InputContainer>
    );
}

export default FirstPage;