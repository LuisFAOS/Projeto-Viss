import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AppInputBox from '../../components/AppInputBox/AppInputBox';
import Header from '../../components/Header/Header';

import { 
  Container,
  InputContainer, 
  HeaderInputContainer,
  TitleInputContainer,
  PageTitle,
 } from './styles';

function registerBO({navigation}) {

  const [BOdatas, setBOdatas] = React.useState({
    type:['Roubo ou Furto de Veículos','Desaparecimento de Pessoas', 'Roubo de objetos pessoais', 'Furto de itens públicos'],
    localIdentification: '',
    description: '',
    dateOccurred: [],

  })


  const StateValueHandler = (field, value) => {

    const lastState = {...BOdatas}

    lastState[field] = value


    setBOdatas({...lastState})
  }

  return (
      <Container>
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
          <Header 
            navigation={navigation} 
            page="Verificar Segurança"/>
          <KeyboardAvoidingView behavior='position'>
            <PageTitle>
              <Text 
                style={{
                  fontFamily:'RobotoLight', 
                  fontSize:35, 
                  textAlign: 'center'}}>
                INSIRA OS DADOS SOBRE O BOLETIM
              </Text>
              <Ionicons name="ios-arrow-down" size={30} color="black" />
            </PageTitle>
            <InputContainer>
              <HeaderInputContainer>
                <Entypo name="location" size={25} color="black" />
                <TitleInputContainer>Local do ocorrido</TitleInputContainer>
              </HeaderInputContainer>
              <AppInputBox
                  onChangeText={localIdentification => StateValueHandler("localIdentification", localIdentification)}
                  value={BOdatas.localIdentification}
                  
                  labelText="Identificação"

                  maxLength={50}
                  placeholder="CEP, nome (bairro ou rua)"
                />
            </InputContainer>

            <InputContainer>
              <HeaderInputContainer>
                <Ionicons name="md-paper" size={28} color="black" />
                <TitleInputContainer>Sobre o ocorrido</TitleInputContainer>
              </HeaderInputContainer>
              <AppInputBox
                  onChangeText={description => StateValueHandler("description", description)}
                  value={BOdatas.description}
                  
                  labelText="Data"

                  placeholder="Quando ocorreu o incidente?"

                  keyboardType="decimal-pad"
                  maxLength={11}
              />
              <AppInputBox
                onChangeText={dateOccurred => StateValueHandler("dateOccurred", dateOccurred)}
                value={BOdatas.dateOccurred}
                
                labelText="Descrição"

                multiline = {true}
                maxLength={150}
                style={{textAlignVertical: 'top'}}
                placeholder="Descreva o que ocorreu"
              />
            </InputContainer>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Container>
  );
}

export default registerBO;