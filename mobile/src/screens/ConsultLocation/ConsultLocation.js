import { Feather, MaterialIcons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { ActivityIndicator, Image, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from '../../components/Header/Header';
import LocationOff from './LocationOff/LocationOff';
import LocationOn from './LocationOn/LocationOn';
import { Button, ButtonText } from '../../components/Button/styles';

import { 
    Container,
    SearchInputContainer, 
    SearchInput,
    ErrorMessage,
    NoDataFoundContainer,
    NoDataFoundImage,
    NoDataFoundText,
 } from './styles';
import baseURL from '../../baseURL';
import AuthContext from '../../context/context';
import MoreDetailsModal from '../../components/MoreDetailsModal/MoreDetailsModal';
import HideKeyboardContext from '../../context/hideTabContext';

function ConsultLocation({navigation}) {

    const SearchInputRef = React.useRef(null)

    const [searchInputValue, setSearchInputValue] = useState('')

    const [searchInputError, setSearchInputError] = useState(null)

    const [loading, setLoading] = useState(false)
    const [isNoDataFound, setNoDataFound] = useState({
        value: false,
        isKeyboardFocused: false
    })

    const [boletins, setBoletins] = useState([])

    const {authDatas} = useContext(AuthContext)

    const searchBOs = async() => {
        setLoading(true)
        try {
            if(searchInputValue.trim().length< 4) throw new Error('Valor inválido')
            
            const response = await fetch(`${baseURL}record/byLocal`, {
                method: 'POST',
                headers: {authorization: authDatas.token,'Content-Type':'application/json'},
                body: JSON.stringify({value: searchInputValue})
            })

            const responseBoletinsDatas = await response.json()

            setNoDataFound({...isNoDataFound, value: responseBoletinsDatas.length ==0})

            setBoletins(responseBoletinsDatas)
            setSearchInputError(null)

        } catch (error) {
            setSearchInputError('Valor inválido')
            console.log('ERRO NA BUSCA [',error,']')
        }
        setLoading(false)
    }

    const [selectedBO, setSelectedBO] = useState(null)
    const {isKeyboardOpen}= useContext(HideKeyboardContext)

    return (
        <Container>
            <Header navigation={navigation}/>
            <SearchInputContainer isWrongValue={searchInputError}>
                <TouchableWithoutFeedback onPress={()=> SearchInputRef.current.focus()}>
                    <Feather name="search" color="gray" size={30}/>
                </TouchableWithoutFeedback>
                <SearchInput
                    ref={SearchInputRef} 
                    onChangeText={value => setSearchInputValue(value)}
                    placeholder="Insira o bairro ou CEP"
                    onFocus={() => setNoDataFound({...isNoDataFound, isKeyboardFocused: true})}

                    onBlur={() => setNoDataFound({...isNoDataFound, isKeyboardFocused: false})}
                    />
            </SearchInputContainer>
            <ErrorMessage>{searchInputError && searchInputError}</ErrorMessage>
            <View style={{height:75}}>
                <Button onPress={searchBOs}>
                    <ButtonText>
                        Pesquisar
                    </ButtonText>
                </Button>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {loading ? 
                    <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center' }}>
                        <ActivityIndicator color="#41BD1B" size='large' />
                    </View>
                    :
                    isNoDataFound.value ? 
                        !isKeyboardOpen ?
                           (<NoDataFoundContainer>
                                <NoDataFoundText>Não temos nenhum dado relacionado {'\n'}a esse local: {`(${searchInputValue})\n`}</NoDataFoundText>
                                <NoDataFoundImage source={require('../../assets/ConsultBOsImgs/NoDataFound.png')}/>
                            </NoDataFoundContainer>) : <View style={{flex: 1}}/>
                        :
                    (
                        <View style={{flex: 1}}>
                            <LocationOn boletins={boletins} setSelectedBO={setSelectedBO}/>
                        </View>)
                }
            </TouchableWithoutFeedback>
            {selectedBO && <MoreDetailsModal {...selectedBO} pressed={() => setSelectedBO(null)}/>}
        </Container>
    );
}

export default ConsultLocation;