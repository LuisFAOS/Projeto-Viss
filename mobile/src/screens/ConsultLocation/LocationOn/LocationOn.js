import React, { memo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import RegisterItem from '../../../components/RegisterItem/RegisterItem';

import { 
    Container, 
    Header,
    NeighborhoodName,
    NeighborhoodInfos,
    InfosLabel,
    StreetInfosList,
} from './styles';

function LocationOn(props) {

    const dateFormat = (date) => {
        return ("0" + date.getDate()).substr(-2) + "/" 
        + ("0" + (date.getMonth() + 1)).substr(-2) + "/" + date.getFullYear()
    }

    return props.boletins[0] && (<Container>
                                    <Header>
                                        <NeighborhoodName>
                                            Bairro: {props.boletins[0] && props.boletins[0].bairro}
                                        </NeighborhoodName>
                                        <NeighborhoodInfos> 
                                            <InfosLabel>
                                                QTD. Boletins da pesquisa: {props.boletins.length}
                                            </InfosLabel>
                                        </NeighborhoodInfos>
                                    </Header>
                                    <StreetInfosList>
                                        <FlatList
                                            data={props.boletins}
                                            renderItem={({item}) => (<RegisterItem
                                                                        Pressed={() => props.setSelectedBO(item)}
                                                                        id={item.ID_registros}
                                                                        streetName={item.street}
                                                                        registerDate={dateFormat(new Date(item.data_ocorrido))}
                                                                        description= {item.desc_registro}
                                                                    />)}
                                        />
                                    </StreetInfosList>
                                </Container>)
}

export default memo(LocationOn);