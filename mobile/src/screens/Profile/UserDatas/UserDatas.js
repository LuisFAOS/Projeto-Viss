import React,{ useState, useRef, useEffect } from 'react';
import { Keyboard, KeyboardAvoidingView, Text } from 'react-native';
import baseURL from '../../../baseURL';
import { Button, ButtonText } from '../../../components/Button/styles';

import Header from '../../../components/Header/Header';
import InputBox from '../../../components/InputBox/InputBox'

import { 
  Avatar,
  ButtonContainer,
  Circle,
  Container, 
  InputContainer,
  Input,
  TextInputContainer, 
  Title, 
  Wrapper, 
  TextInput
} from './styles';


function Profile({route, navigation}) {

  console.log(route.params.AuthDatas.token)

  const [InputValues, setInputValues] = useState({
    nome: {
      value: '',
      isFocused: false
    },
    CEP: {
      value: '',
      isFocused: false
    },
    email: {
      value: '',
      isFocused: false
    }
  })

  const getUserDatas = async () => {
    try {
      const response = await fetch(baseURL+'user', {
          method: 'GET',
          headers: {authorization: route.params.AuthDatas.token}
      })
      
      const UserDatas = await response.json();

      setInputValues({
        nome: {
          value: UserDatas.nome,
          isFocused: true
        },
        CEP: {
          value: UserDatas.CEP,
          isFocused: true
        },
        email: {
          value: UserDatas.email,
          isFocused: true
        }
      })

      return () => {
        console.log(UserDatas)
      }

    } catch (e) {
      return () => {
        console.log("ERRO!"+e);
      }
    }
  }

  useEffect(() => {
    getUserDatas()
  },[])

  const refInputName = useRef(null);
  const refInputCEP = useRef(null);
  const refInputEmail = useRef(null);



  const FocusStateHandler = field =>{
    const newState = {...InputValues}
    newState[field].isFocused = newState[field].isFocused || true

    setInputValues({...newState})
  }

  const BlurStateHandler = field =>{
    const newState = {...InputValues}
    newState[field].isFocused = (!newState[field].isFocused || newState[field].value) || false
    
    setInputValues({...newState})

  }

  const StateValueHandler = (field, value) => {
    const newState = {...InputValues}
    newState[field].value = value.trim()

    setInputValues({...newState})
  }

  return (
    <Container>
      <Header navigation={navigation} goBack/>
      <Wrapper onPress={()=> Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior='position'>
          <Circle>
            <Avatar source={require('../../../assets/userImgs/default-user-img1.png')}/>
          </Circle>
          <Title>
            Editar Dados
          </Title>
          <InputContainer>
            <Input 
              ref={refInputName}

              onChangeText={nome => StateValueHandler("nome", nome)}
              value={InputValues.nome.value}

              onBlur= {() => BlurStateHandler('nome')}
              onFocused={InputValues.nome.isFocused}/>
            <TextInputContainer
              onPress={() => {
                  FocusStateHandler('nome')
                  refInputName.current.focus()
                }
              }
            >
              <TextInput 
                onFocused={InputValues.nome.isFocused}>
                  Nome
              </TextInput>
            </TextInputContainer>
          </InputContainer>

          <InputContainer>
            <Input 
              ref={refInputCEP}
              
              onChangeText={CEP => StateValueHandler("CEP", CEP)}
              value={InputValues.CEP.value}

              onBlur= {() => BlurStateHandler('CEP')}
              onFocused={InputValues.CEP.isFocused}/>
            <TextInputContainer
              onPress={() => {
                  FocusStateHandler('CEP')
                  refInputCEP.current.focus()
                }
              }
            >
              <TextInput 
                onFocused={InputValues.CEP.isFocused}>
                  CEP
              </TextInput>
            </TextInputContainer>
          </InputContainer>

          <InputContainer>
            <Input 
              ref={refInputEmail}

              onChangeText={email => StateValueHandler("email", email)}
              value={InputValues.email.value}
              
              onBlur= {() => BlurStateHandler('email')}
              onFocused={InputValues.email.isFocused}/>
            <TextInputContainer
              onPress={() => {
                  FocusStateHandler('email')
                  refInputEmail.current.focus()
                }
              }
            >
              <TextInput 
                onFocused={InputValues.email.isFocused}>
                  Email
              </TextInput>
            </TextInputContainer>
          </InputContainer>


          <ButtonContainer>
            <Button>
              <ButtonText >
                Editar
              </ButtonText>
            </Button>
          </ButtonContainer>
        </KeyboardAvoidingView>
      </Wrapper>
    </Container>
  );
}

export default Profile;