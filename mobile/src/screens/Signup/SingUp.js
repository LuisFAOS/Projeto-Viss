import React, { useState } from 'react';

import { 
    TouchableWithoutFeedback, 
    KeyboardAvoidingView, 
    Keyboard, 
    ScrollView, 
    Platform} from 'react-native';
import SplitPage from './SplitPage/SplitPage'

import {Button, ButtonText} from '../../components/Button/styles'
import {
    Container,
    ChangePageButton,
    ButtonContainer,
    ArrowIcon,
    HeaderTitle
} from './styles'

import * as ImagePicker from 'expo-image-picker'
import baseURL from '../../baseURL';
import DefaultProfileImg from '../../assets/userImgs/default-user-img2.png'
import AlertModal from '../../components/AlertModal/AlertModal';

export default function SingUp({navigation}){

    const [alert, setAlert] = useState({
        alertTxt: '',
        isLoading:false,
    })

    const [activePage, setActivePage] = useState({
        Page: {
            title: "Seja um\nusuário Viss",
            PlaceHolders: ["Email", "Senha"],
            IconsName: ["email", "vpn-key"],

            isPassword:true
        },
        id: 'first'
    })

    const [UserDatas, setUserDatas] = useState({
        email: '',
        senha: '',
        nome: '',
        CEP: '',
    })

    const [imageUri, setImageUri] = useState(null)

    React.useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
              alert('É necessário permitir o acesso a camera inserir uma foto!');
            }
          }
        })();
      }, []);

    const selectPicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
          });
      
          
          if (!result.cancelled) {
            setImageUri(result);
          }
    }

    const ChangePageHandler = () => {    
        if(activePage.id === 'first'){
            setActivePage({
                Page: {
                    title: "Só mais\nalgumas informações",
                    PlaceHolders: ["Nome", "CEP"],
                    IconsName: ["person", "location-on"],
        
                    isPassword:false
                },
                id: 'second'
            })
        }else {
            setActivePage({
                Page: {
                    title: "Seja um\nusuário Viss",
                    PlaceHolders: ["Email", "Senha"],
                    IconsName: ["email", "vpn-key"],
        
                    isPassword:true
                },
                id: 'first'
            })
        }
    }

    const StateHandler = (value, field) => {
        const newState = {...UserDatas}
        newState[field] = value.nativeEvent.text

        setUserDatas({...newState})
        
    }

    const createUserDatasForm = () => {
        const UserDatasForm = new FormData();


        if(imageUri){
            const ImagefileName = imageUri.uri.split('/')
    
            UserDatasForm.append("avatar", {
                name: ImagefileName[ImagefileName.length-1],
                type: 'image/jpeg',
                uri:
                Platform.OS === "android" ? imageUri.uri : imageUri.uri.replace("file://", "")
            });
        }else return JSON.stringify({...UserDatas})

        Object.keys(UserDatas).forEach(key => {
            UserDatasForm.append(key, UserDatas[key]);
        });

        return UserDatasForm
    }

    const SendDatas = async () => {
        try {
            Keyboard.dismiss()

            setAlert({
                alertTxt: 'Carregando...',
                isLoading:true,
            })

            const RouteChangerConfig = typeof createUserDatasForm() === "string" ? "/without_avatar" : ""

            const response = await fetch(`${baseURL}user/sing_up${RouteChangerConfig}`, {
                method: 'POST',
                headers: RouteChangerConfig && {'Content-Type':'application/json'},
                body: createUserDatasForm()
            })
            
            let responseData;

            if (response.status>=400) {
                responseData = await response.text()

                setAlert({
                    alertTxt: responseData,
                    isLoading: false
                })

            }else{
                var AuthDatas = await response.json() 
                navigation.navigate('Aplicação', {AuthDatas}) 
            }
            
        } catch (e) {

            setAlert({
                alertTxt: 'Servidores com problema, perdão.',
                isLoading: false
            })

            console.log("ERRO ENCONTRADO:\n"+e)
        }
    }

    return (
        <Container colors={['black', 'green']}>
            {
                alert.alertTxt ? (
                    <AlertModal
                        pressed={() => !alert.isLoading && setAlert({alertTxt:'', isLoading: false})}
                        isLoading={alert.isLoading}
                        alertTxt={alert.alertTxt}
                    />
                ): <></>
            }
            <KeyboardAvoidingView behavior='position'>
                <ChangePageButton onPress={() => activePage.id === 'first' ? 
                    navigation.navigate('Login')
                        :
                    ChangePageHandler()}>  
                    <ArrowIcon 
                        name='arrow-back'
                        size={40}
                    />
                    <HeaderTitle>
                        {activePage.id === 'first' ? 'Login':'Página anterior'}
                    </HeaderTitle>
                </ChangePageButton>
                <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
                    <ScrollView>
                        <SplitPage 
                            imageUri={imageUri && imageUri.uri}
                            selectPicture={selectPicture}
                            title={activePage.Page.title}
                            firstInputValue={activePage.id === 'first' ? UserDatas.email : UserDatas.nome}
                            firstInputPlaceholder={activePage.Page.PlaceHolders[0]}
                            firstIconName={activePage.Page.IconsName[0]}
                            firstInputChangeHandler={value => StateHandler(value, activePage.id === 'first' ? 'email' : 'nome')}
                            
                            secondInputChangeHandler={value => StateHandler(value, activePage.id === 'first' ? 'senha' : 'CEP')}
                            secondInputValue={activePage.id === 'first' ? UserDatas.senha : UserDatas.CEP}
                            secondInputPlaceholder={activePage.Page.PlaceHolders[1]}
                            secondIconName={activePage.Page.IconsName[1]}
                            isPassword={activePage.Page.isPassword}
                        />
                        <ButtonContainer page={activePage.id}>
                            {activePage.id === 'first' ?
                               <Button onPress={ChangePageHandler}>
                                    <ButtonText>PRÓXIMO</ButtonText>
                                    <ArrowIcon 
                                        name='arrow-forward'
                                        size={30}
                                    />
                                </Button>
                                :
                                <Button onPress={SendDatas}>
                                    <ButtonText>FINALIZAR</ButtonText>
                                </Button>
                            }    
                        </ButtonContainer>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Container>
    )
}