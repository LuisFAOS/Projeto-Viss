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
    nome: '',
    CEP: '',
    email:'',
    base64ProfileImg:'',
  })

  const getUserDatas = async () => {
    try {
      const response = await fetch(baseURL+'user', {
        method: 'GET',
        headers: {authorization: route.params.authDatas.token}
      })
      
      const UserDatas = await response.json();
      
      setInputValues({
        nome: UserDatas.nome,
        CEP: UserDatas.CEP,
        email:UserDatas.email,
        base64ProfileImg: UserDatas.img && UserDatas.img.base64,
      })


    } catch (e) {
      console.log("ERRO! "+ e);
    }
  }

  useEffect(() => {
    getUserDatas()
  },[])

  const StateValueHandler = (field, value) => {
    const newState = {...InputValues}
    newState[field] = value

    setInputValues({...newState})
  }

  return (
    <Container>
      <Header navigation={navigation} goBack/>
      <Wrapper onPress={()=> Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior='position'>
          <Circle>
            {InputValues.base64ProfileImg ?
              <Avatar source={{uri:"data:image/jpeg;base64, "+InputValues.base64ProfileImg}}/>
              :
              <Avatar source={require('../../../assets/userImgs/default-user-img3.png')}/>
            }
          </Circle>
          <Title>
            Editar Dados
          </Title>
          <AppInputBox
            onChangeText={nome => StateValueHandler("nome", nome)}
            value={InputValues.nome}
            labelText="Nome"
            openInput
          />

          <AppInputBox
            onChangeText={CEP => StateValueHandler("CEP", CEP)}
            value={InputValues.CEP}

            labelText="CEP"
            openInput
          />

          <AppInputBox

            onChangeText={email => StateValueHandler("email", email)}
            value={InputValues.email}

            labelText="Email"
            openInput
          />

          <ButtonContainer>
            <Button>
              <ButtonText>
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