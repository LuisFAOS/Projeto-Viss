import React from 'react';
import { TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native';
import { Button, ButtonText } from '../Button/styles';

import { BackdropWrapper } from '../AlertModal/StyleAlertModal'

import { 
    ModalTitle,
    Container,
    Header,
    Value,
    Title,
    WrapperButtons,
    ButtonModal,
    ButtonTextModal
} from './styles';
import { View } from 'react-native';

function ConfirmModal(props) {

    const dateFormat = (date) => {
        return ("0" + date.getDate()).substr(-2) + "/" 
        + ("0" + (date.getMonth() + 1)).substr(-2) + "/" + date.getFullYear()
    }

    return (
        <TouchableWithoutFeedback onPress={props.hideModal}>
            <BackdropWrapper>
                <Container>
                    <ModalTitle>Dados do incidente</ModalTitle>
                    <Header>
                        <View>
                            <Title>CEP:</Title>
                            <Value>{props.endereco_cep}</Value>
                        </View>
                        <View>
                            <Title>Data:</Title>
                            <Value>{dateFormat(props.data_ocorrido)}</Value>
                        </View>
                    </Header>
                    
                    
                    <View>
                        <Title>Tipo:</Title>
                        <Value>{props.tipo_registro}</Value>
                    </View>

                    <View>
                        <Title>Descrição: </Title>
                        <Value numberOfLines={2}>{props.desc_registro==='' ? "Vázio / Você não inseriu nada..." : props.desc_registro}</Value>
                    </View>

                    <WrapperButtons>
                        <ButtonModal onPress={props.hideModal} cancelButton>
                            <ButtonTextModal>
                                Cancelar
                            </ButtonTextModal>
                        </ButtonModal>

                        <ButtonModal onPress={props.onSubmit}>
                            <ButtonTextModal>
                                Confirmar
                            </ButtonTextModal>
                        </ButtonModal>
                    </WrapperButtons>
                </Container>
            </BackdropWrapper>
        </TouchableWithoutFeedback>
    );
}

export default ConfirmModal;