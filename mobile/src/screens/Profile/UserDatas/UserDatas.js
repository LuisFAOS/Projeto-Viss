import React,{ useState, useRef, useEffect } from 'react';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import baseURL from '../../../baseURL';
import AppInputBox from '../../../components/AppInputBox/AppInputBox';
import { Button, ButtonText } from '../../../components/Button/styles';

import Header from '../../../components/Header/Header';

import { 
  Avatar,
  ButtonContainer,
  Circle,
  Container, 
  Title, 
  Wrapper, 
} from './styles';


function Profile({route, navigation}) {


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
          <AppInputBox
            onChangeText={nome => StateValueHandler("nome", nome)}
            value={InputValues.nome.value}
            labelText="Nome"
          />

          <AppInputBox
            onChangeText={CEP => StateValueHandler("CEP", CEP)}
            value={InputValues.CEP.value}

            labelText="CEP"
          />

          <AppInputBox

            onChangeText={email => StateValueHandler("email", email)}
            value={InputValues.email.value}

            labelText="Email"
          />

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