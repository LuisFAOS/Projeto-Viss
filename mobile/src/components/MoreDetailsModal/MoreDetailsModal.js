import React, { useContext } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import HideKeyboardContext from '../../context/hideTabContext';
import { BackdropWrapper } from '../AlertModal/StyleAlertModal';
import { Button, ButtonText } from '../Button/styles';

import { 
    Container,
    Header,
    Title,
    Value,
    Wrapper,
    PageTitle
} from './styles';

function MoreDetailsModal(props) {

    const dateFormat = (date) => {
        return ("0" + date.getDate()).substr(-2) + "/" 
        + ("0" + (date.getMonth() + 1)).substr(-2) + "/" + date.getFullYear()
    }
    
    const {setIsKeyboardOpen}= useContext(HideKeyboardContext)

    setIsKeyboardOpen(true)
  return (
      <TouchableWithoutFeedback onPress={()=> {
            props.pressed()
            setIsKeyboardOpen(false)
          }}>
          <BackdropWrapper>
              <Container>
                  <PageTitle>Mais detalhes</PageTitle>
                    <Header>
                        <Wrapper>
                            <Title>Nome da Rua:</Title>
                            <Value>{props.street}</Value>
                        </Wrapper>
                        <Wrapper>
                            <Title>Data do ocorrido:</Title>
                            <Value date>{dateFormat(new Date(props.data_ocorrido))}</Value>
                        </Wrapper>
                    </Header>
                    <Wrapper>
                        <Title>Tipo do registro:</Title>
                        <Value>{props.tipo_registro}</Value>
                    </Wrapper>
                    <Wrapper style={{height: 100}}>
                        <Title>Descrição:</Title>
                        <Value>{props.desc_registro ? props.desc_registro:'O usuário não inseriu uma descrição.'}</Value>
                    </Wrapper>
                    <View style={{height: 70}}>
                        <Button cancelButton  onPress={()=> {
                            props.pressed()
                            setIsKeyboardOpen(false)
                        }}>
                            <ButtonText>
                                Fechar
                            </ButtonText>
                        </Button>
                    </View>
              </Container>
          </BackdropWrapper>
      </TouchableWithoutFeedback>
  );
}

export default MoreDetailsModal;