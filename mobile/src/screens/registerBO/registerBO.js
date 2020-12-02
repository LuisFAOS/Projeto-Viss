import { Ionicons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { ActivityIndicator, Image, Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from '../../components/Header/Header';
import * as DocumentPicker from 'expo-document-picker';
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { IconRegistry, IndexPath } from '@ui-kitten/components'
import * as Location from 'expo-location';
import moment from 'moment'
import baseURL from '../../baseURL';


import { 
  Container,
  PageTitle,
  WrapperSuccessImage,
  SuccessImage,
  SuccessText
} from './styles';

import SecondPage from './SecondePage/SecondPage';
import FirstPage from './FirstPage/FirstPage';
import AuthContext from '../../context/context';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
import { useEffect } from 'react';
import HideKeyboardContext from '../../context/hideTabContext';

function RegisterBO({navigation}) {

  const [loading, setLoading] = useState(false)
  const [loadingButton, setLoadingButton] = useState(false)

  const selectInputData = [
    'Roubo ou Furto de Veículos',
    'Desaparecimento de Pessoas',
    'Roubo ou Furto de objetos pessoais',
    'Roubo ou Furto de itens públicos',
    'Fuga de presidiários',
  ]

  const getLastCreatedBy = async ()=> {
    setLoading(true)
    try {

      const response = await fetch(baseURL+'record/lastCreatedAt', {
        method: 'GET',
        headers:{authorization: authDatas.token},
      })

      let lastCreatedAt= await response.text()

      if(!lastCreatedAt) throw new Error('O usuário pode inserir')

      lastCreatedAt= new Date(lastCreatedAt)

      setIsSuccess(!moment(lastCreatedAt).fromNow().includes('days ago'))

    } catch (error) {
      console.log(error)
      setIsSuccess(false)
    }
    setLoading(false)
  }

  useEffect(()=> {
    getLastCreatedBy()
  },[])

  const [BOdatas, setBOdatas] = useState({
    tipo_registro: new IndexPath(0),
    endereco_cep: '',
    desc_registro: '',
    data_ocorrido: new Date(),
  })

  const [boletimFile, setBoletimFile] = useState(null)

  const {authDatas} = useContext(AuthContext)

  const [locationDatas, setLocationDatas] = useState({})

  const [nextPage, setNextPage] = useState(1)

  const [isSuccess, setIsSuccess] = useState(false)
 
  const selectPDF = async() => {
    try {
      let {name, size, uri, type} = await DocumentPicker.getDocumentAsync({});

      if(type === "success") {

        const allowedTypes = ['.jpeg','.jpg', '.png', '.pdf']

        let isVerified = 0
        
        if(size >= 1572864) throw new Error('Arquivo muito grande: máx: 1.5MB')

        allowedTypes.forEach(type => {
            if(name.substring(name.lastIndexOf('.')) === type) return
            else isVerified++
        });

        if(isVerified == allowedTypes.length) throw new Error('Esse tipo não é aceito -> '+name.substring(name.lastIndexOf('.')))
      }
      
      else throw new Error('Você cancelou o upload')

      setBoletimFile({name, size, uri})

    } catch (error) {
      setBoletimFile(error.message)
    }
  }

  const StateValueHandler = (field, value) => {

    const lastState = {...BOdatas}

    lastState[field] = value

    setBOdatas({...lastState})
  }

  const NextPage = async (stateErrorFunction) => {
    setLoadingButton(true)

    try {
      console.log(BOdatas.endereco_cep)
      const GeocodeResponse = await Location.geocodeAsync(BOdatas.endereco_cep)

      const {latitude, longitude} = GeocodeResponse[0]

      setLocationDatas({latitude, longitude})
      
      setNextPage(2)
      stateErrorFunction(false)
    } catch (error) {
      stateErrorFunction(true)
      console.log('erroooooo',error)
    }
    setLoadingButton(false)
  }



  const SubmitDatas = async (stateErrorFunction) => {
    try {

      if(!boletimFile) throw new Error('SEM ARQUIVO!')

      const RequestForm = new FormData();

      RequestForm.append("boletim", {
          name: boletimFile.name,
          type: 'image/jpeg',
          uri:
          Platform.OS === "android" ? boletimFile.uri : boletimFile.uri.replace("file://", "")
      });

      const copyState = {...BOdatas}
      copyState.tipo_registro = selectInputData[copyState.tipo_registro-1] 
      copyState.data_ocorrido = copyState.data_ocorrido.toString() 

      
      Object.keys(copyState).forEach(key => {
        RequestForm.append(key, copyState[key]);
      });

      Object.keys(locationDatas).forEach(key => {
        RequestForm.append(key, locationDatas[key]);
      });
      

      const response = await fetch(baseURL+'record/make_BO', {
        method: 'POST',
        headers:{authorization: authDatas.token},
        body: RequestForm
      })

      setIsSuccess(response.status == 200)
      setShowModal(false)
    } catch (e) {
      stateErrorFunction(e.message.includes('SEM ARQUIVO!'))
      console.log("ERRO NO SUBMIT: [",e.message,"]")
    }

  }

  const {setIsKeyboardOpen} = useContext(HideKeyboardContext)

  const [showModal, setShowModal] = useState(false)
  
  const [showCalendar, setShowCalendar] = useState(false)

  return loading ? (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="#41BD1B" size="large"/>
        </View>): 
        (<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding":"height"}>
            <TouchableWithoutFeedback onPress={() => {
              setShowCalendar(false)
              Keyboard.dismiss()  
            }}>{
              !isSuccess ? 
              <View style={{height: '100%'}}>
                <Header 
                    navigation={navigation} 
                    page="Verificar Segurança"/>
                <WrapperSuccessImage>
                  <SuccessText>Seu registro está em análise :{')\n'}Por favor, aguarde para inserir outro</SuccessText>
                  <SuccessImage source={require('../../assets/RegisterBOimgs/CompletedInAnalyze.png')}/>
                </WrapperSuccessImage>
              </View>
              :
                <Container>
                  <IconRegistry icons={EvaIconsPack}/>
                  <Header 
                    navigation={navigation} 
                    page="Verificar Segurança"/>
                  <PageTitle>
                    <Text 
                      style={{
                        fontFamily:'RobotoLight', 
                        fontSize:25, 
                        textAlign: 'center'}}>
                      {nextPage == 1 ? "PREENCHA OS CAMPOS PARA ENVIAR O BOLETIM" : "SÓ MAIS ALGUMAS INFORMAÇÕES"}
                    </Text>
                    <Ionicons name="ios-arrow-down" size={30} color="black" />
                  </PageTitle>
                  {nextPage==1 ? (
                    <FirstPage 
                      {...BOdatas}
                      loadingState={loadingButton}
                      Changed={StateValueHandler}
                      ButtonPressed={NextPage}
                    />
                  ):(
                    <SecondPage
                      {...BOdatas}  
                      boletimFile = {boletimFile}
                      selectInputData={selectInputData}
                      onSelectedDatePicker={StateValueHandler}
                      onSelectedSelectType={StateValueHandler}
                      selectPDF={selectPDF}
                      showCalendar={showCalendar} 
                      setShowCalendar={setShowCalendar}
                      setShowModal={setShowModal}
                      ButtonPressed={()=> setNextPage(1)}
                    />
                  )}
                  
                </Container>
            }
            </TouchableWithoutFeedback>
            
            {
                showModal && <ConfirmModal 
                                {...BOdatas} 
                                tipo_registro={selectInputData[BOdatas.tipo_registro-1]} 
                                hideModal={() =>{ 
                                  setIsKeyboardOpen(false)
                                  setShowModal(false)
                                }}
                                onSubmit = {() => {
                                  SubmitDatas()
                                  setIsKeyboardOpen(false)
                                }}
                                />
            }
        </KeyboardAvoidingView>
  );
}

export default RegisterBO;