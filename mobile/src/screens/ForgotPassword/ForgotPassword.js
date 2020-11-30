import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Dimensions, Image, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import AppInputBox from '../../components/AppInputBox/AppInputBox';
import { Button, ButtonText } from '../../components/Button/styles';
import InputBox from '../../components/InputBox/InputBox';

import { 
  Container,
  Header,
  HeaderTitle,
  StyledImage,
  Title
} from './styles';

function ForgetPassword({navigation}) {


  const [email, setEmail] = useState('')
  const [responseStatus, setResponseStatus] = useState('')

  const sendPasswordSolicitation = () => {
    setResponseStatus(true)
  }

  return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
              <Header onPress={() => navigation.navigate('Login')}>
                <MaterialIcons 
                  name="keyboard-arrow-left" 
                  size={40} 
                  color="black" />
                <HeaderTitle>
                    Login
                </HeaderTitle>
              </Header>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              {!responseStatus ?
                  (<>
                      <StyledImage 
                        source={require('../../assets/forgotPassword/forgotpassword.png')}
                      />
                      <Title>Digite seu email e siga as instruções enviadas</Title>
                      <AppInputBox 
                        onChangeText={value => setEmail(value)}

                        placeholder='Qual é o seu email?'
                        labelText="Email"
                        value={email}
                        iconName='email' 
                        size={35}/>

                        <View style={{height: 40, width: '100%'}}>
                          <Button onPress={sendPasswordSolicitation}>
                              <ButtonText>ENVIAR</ButtonText>
                          </Button>
                        </View>
                  </>)
                  :(
                    <>
                      <StyledImage 
                        style={{width: Dimensions.get('window').width - 80, height: Dimensions.get('window').width - 80}}
                        source={require('../../assets/forgotPassword/congratulations.png')}
                      />
                      <Title>
                        Email enviado com sucesso! Agora basta seguir as instruções!
                      </Title>
                    </>
                  )
              }
                </View>
          </Container>
        </TouchableWithoutFeedback>
    )
}

export default ForgetPassword;