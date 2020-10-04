import React, { useState } from 'react';
import { 
    Container, 
    Logo,
    Button,
    ButtonText,
    TipsContainer,
    TipsText,
} from './styles'

import { 
    Text, 
    KeyboardAvoidingView, 
    Keyboard, 
    TouchableWithoutFeedback
} from 'react-native'

import LogoImg from '../../assets/logo.png'
import CheckBox from '../../components/Checkbox/Checkbox'

import InputBox from '../../components/InputBox/InputBox'

export default function Login({ navigation }) {
    const [isSelected, setIsSelected] = useState(true)

  return (
    
    <Container colors={['black', 'green']}>
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior='position'>

                <Logo source={LogoImg}/>

                <InputBox placeholder="Login" iconName="person" size={35}/>
                <InputBox placeholder="Senha" iconName="vpn-key" size={35} secureTextEntry/>

                <TipsContainer>
                    <TipsText>
                        <CheckBox
                            selected={isSelected} 
                            onPress={()=> setIsSelected(!isSelected)}
                            text='Lembrar-me!'
                        />
                    </TipsText>
                    <TipsText>
                        <Text style={{color: 'white'}}>Esqueceu a senha?</Text>
                    </TipsText>
                </TipsContainer>
                <Button>
                    <ButtonText>
                        ENTRAR
                    </ButtonText>
                </Button>
                <Button onPress={()=> navigation.replace('SingUp')}>
                    <ButtonText>
                        CADASTRAR
                    </ButtonText>
                </Button>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    </Container>

  );
}
