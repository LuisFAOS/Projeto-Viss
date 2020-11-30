import React from 'react';

import { 
    StreetInfosCard,
    StreetInfosHeader,
    StreetInfoLabel,
    BoldTitle,
    StreetBodyText,   
} from './styles';

function RegisterItem(props) {

  return (
        <StreetInfosCard id={props.id} onPress={props.Pressed}>
            <StreetInfosHeader>
                <StreetInfoLabel name>
                    <BoldTitle>Nome da Rua:</BoldTitle>
                    <StreetBodyText numberOfLines={1}>
                        {props.streetName}
                    </StreetBodyText>
                </StreetInfoLabel>
                <StreetInfoLabel data>
                    <BoldTitle>Data do ocorrido:</BoldTitle>
                    <StreetBodyText>{props.registerDate}</StreetBodyText>
                </StreetInfoLabel>
            </StreetInfosHeader>
            <StreetInfoLabel desc> 
                <BoldTitle>Descrição:</BoldTitle>
                <StreetBodyText numberOfLines={1}>
                    {props.description}
                </StreetBodyText> 
            </StreetInfoLabel>
        </StreetInfosCard>
  );
}

export default RegisterItem;