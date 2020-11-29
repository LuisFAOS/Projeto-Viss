import { AntDesign } from '@expo/vector-icons';
import { PropsService } from '@ui-kitten/components/devsupport';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import baseURL from '../../../baseURL';
import Header from '../../../components/Header/Header';
import MoreDetailsModal from '../../../components/MoreDetailsModal/MoreDetailsModal';
import RegisterItem from '../../../components/RegisterItem/RegisterItem';
import AuthContext from '../../../context/context';

import { 
  Container, Title, WrapperHeaderPage
} from './styles';

function UserRegisters(props) {

  const [loading, setLoading] = useState(false)
  const [boletins, setBoletins] = useState([])
  const [selectedBO, setSelectedBO] = useState(null)

  useEffect(() => {
    searchBOs()
  },[])

  const {authDatas} = useContext(AuthContext)

  const searchBOs = async() => {
    setLoading(true)
    try {        
        const response = await fetch(`${baseURL}record`, {
            method: 'GET',
            headers: {authorization: authDatas.token,'Content-Type':'application/json'},
        })

        const responseBoletinsDatas = await response.json()

        console.log(responseBoletinsDatas)
        setBoletins(responseBoletinsDatas)

    } catch (error) {
        console.log('ERRO NA BUSCA [',error,']')
    }
    setLoading(false)
  }

  const dateFormat = (date) => {
    return ("0" + date.getDate()).substr(-2) + "/" 
    + ("0" + (date.getMonth() + 1)).substr(-2) + "/" + date.getFullYear()
  }

  return (
      <Container>
          <Header navigation={props.navigation} goBack/>
          <WrapperHeaderPage>
              <AntDesign name="solution1" size={30} color="black" />
              <Title>Seus registros</Title>
          </WrapperHeaderPage>

          {loading ? 
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color="#41BD1B"/>
              </View>
            :
              <FlatList
                style={{paddingLeft: 20, paddingRight: 20}}
                data={boletins}
                renderItem={({item}) => (<RegisterItem
                                            Pressed={() => setSelectedBO(item)}
                                            id={item.ID_registros}
                                            streetName={item.street}
                                            registerDate={dateFormat(new Date(item.data_ocorrido))}
                                            description= {item.desc_registro}
                                          />)}
              />
          
          }
          {selectedBO && <MoreDetailsModal {...selectedBO} pressed={() => setSelectedBO(null)}/>}
      </Container>
  );
}

export default UserRegisters;