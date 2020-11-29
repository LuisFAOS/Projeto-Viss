import React, { useContext, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Dimensions, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import MapView from 'react-native-maps';
import { Button, ButtonText } from '../../components/Button/styles';
import Header from '../../components/Header/Header';

import * as Location from 'expo-location';

import {
    Container,
    WrapperInputs,
    TraceRoutesInput,
    TextMarker,
    RegistersCards,
    MapViewContainer,
    RegistersScrollView,
    Title,
    Wrapper,
    Value,
} from './styles'

import LocationOff from '../ConsultLocation/LocationOff/LocationOff';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AuthContext from '../../context/context';
import baseURL from '../../baseURL';
import moment from 'moment'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

function TraceRoute({navigation}) {

    const [userLocation, setUserLocation] = useState('Carregando...')
    const [locationOff, setLocationOff] = useState(false);

    const [warningPoints, setWarningPoints] = useState([])
    const [boletinsDatas, setBoletinsDatas] = useState([])


    const {authDatas} = useContext(AuthContext)

    const mapViewRef = useRef(null)

    useEffect(()=> {
        moment.updateLocale('pt-br',{
            relativeTime : {
                future : 'Em %s',
                past : 'Há %s atrás',
                s : 'segundos',
                m : 'um minuto',
                mm : '%d minutos',
                h : 'uma hora',
                hh : '%d horas',
                d : 'um dia',
                dd : '%d dias',
                M : 'um mês',
                MM : '%d meses',
                y : 'um ano',
                yy : '%d anos'
            }
        });
        getUserLocationAndWarningPoints()
    }, [])

    const getUserLocationAndWarningPoints = async () => {
        
        const { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') setLocationOff(true)
        
        const location = await Location.getCurrentPositionAsync({});

        const { latitude, longitude} = location.coords

        const response = await fetch(`${baseURL}record/byRadius`, {
            method: 'POST',
            headers: {authorization: authDatas.token,'Content-Type':'application/json'},
            body: JSON.stringify({latitude, longitude})
        })

        const ResponsewarningPoints = await response.json();

        setWarningPoints(ResponsewarningPoints.result_location_datas[0])
        setBoletinsDatas(ResponsewarningPoints.BOsInneredWithLocations)

        setUserLocation({...location})
    }

    const [selectedBO, setSelectedBO] = useState(null)

    const {width, height} = Dimensions.get('window')

    let mapAnimation = new Animated.Value(0);

    const CARD_WIDTH = Dimensions.get('window').width * 0.8

    const interpolations = warningPoints.map((warningPoint, index) => {
        const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            ((index + 1) * CARD_WIDTH),
        ];
    
        const scale = mapAnimation.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: "clamp"
        });
    
        return { scale };

    })
    
    const _scrollView = useRef(null);

    const onMarkerPress = (mapEventData) => {
        const markerID = mapEventData._targetInst.return.key;
        
        let x = (markerID * CARD_WIDTH) + (markerID * 20); 

        _scrollView.current.scrollTo({x: x, y: 0, animated: true});
    }

  return (
    <Container>
        <Header navigation={navigation}/>
        {locationOff ? 
            <LocationOff titleText="Você não aceitou o acesso a sua localização"/>
            :
            <>
                <WrapperInputs> 
                    {/* <GooglePlacesAutocomplete
                        placeholder='Digite o destino'
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                        }}
                        query={{
                            key: 'AIzaSyD2oaGHDsNkUAQ8LBYVPLh6diZTTygx_OU',
                            language: 'pt-br',
                        }}
                        fetchDetails = {true}
                    /> */}
                </WrapperInputs>
                {!(typeof userLocation === "string") ?
                    <MapViewContainer>
                        <MapView
                            showsCompass
                            ref={mapViewRef}
                            initialRegion={{
                                latitude: userLocation.coords.latitude,
                                longitude: userLocation.coords.longitude,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.014
                            }}
                            style={{position: 'absolute', top: 0, bottom: 10, right: 0, left: 0}}
                            rotateEnabled={false}
                            scrollEnabled={false}
                            zoomEnabled={false}
                            showsBuildings={false}
                            showsPointsOfInterest={false}
                            showsIndoors={false}
                        >
                            <MapView.Marker
                                isPreselected
                                title="VOCÊ"
                                pinColor="#2c384c"
                                coordinate={{
                                    latitude: userLocation.coords.latitude,
                                    longitude: userLocation.coords.longitude,
                                }}
                            />

                            {warningPoints.map((item,index) => {
                                const scaleStyle = {
                                    transform: [
                                      {
                                        scale: interpolations[index].scale,
                                      },
                                    ],
                                  };
                                    return(
                                        <MapView.Marker
                                            key={index} 
                                            onPress={(e)=>onMarkerPress(e)}
                                            title="PERIGO!"
                                            description={boletinsDatas[index].tipo_registro}
                                            coordinate={{
                                                latitude: parseFloat(item.latitude),
                                                longitude: parseFloat(item.longitude),
                                            }}
                                        >
                                            <Animated.View style={[{width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}]}>
                                                <Animated.Image 
                                                    source={require('../../assets/alert.png')} 
                                                    style={[{width: 30, height: 30}, scaleStyle]} 
                                                    resizeMode="cover"/>
                                            </Animated.View>
                                        </MapView.Marker>)})}
                        </MapView>
                        <RegistersScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            scrollEventThrottle={1}
                            showsHorizontalScrollIndicator={false}
                            snapToInterval={CARD_WIDTH + 20}
                            ref={_scrollView}
                            snapToAlignment="center"
                            onScroll={Animated.event(
                                [
                                  {
                                    nativeEvent: {
                                      contentOffset: {
                                        x: mapAnimation,
                                      }
                                    },
                                  },
                                ],
                                {useNativeDriver: true}
                              )}
                            onMomentumScrollEnd={event => {
                                
                                const scrolled = event.nativeEvent.contentOffset.x
                                const place = (scrolled > 0) ? scrolled / width : 0
                                
                                let LatitudeAndLongitude

                                for (let i = 0; i < warningPoints.length; i++) {
                                    if(Math.round(place)+1 == warningPoints[i].ID_localidade) 
                                        LatitudeAndLongitude = warningPoints[i]
                                }
                                
                                const {latitude, longitude} = LatitudeAndLongitude

                                mapViewRef.current.animateToRegion({
                                    latitude: parseFloat(latitude), 
                                    longitude: parseFloat(longitude),
                                    latitudeDelta: 0.015,
                                    longitudeDelta: 0.014
                                },150) 
                            }}
                        >
                            {boletinsDatas.map((item, index) => (
                                <RegistersCards key={item.ID_registros}>
                                    <Wrapper>
                                        <Title>Rua:</Title>
                                        <Value>{item.street}</Value>
                                    </Wrapper>
                                    <Wrapper>
                                        <Title>Data do ocorrido:</Title>
                                        <Value>{moment(new Date(item.data_ocorrido)).fromNow()}</Value>
                                    </Wrapper>
                                    <Wrapper>
                                        <Title>Descrição do relator:</Title>
                                        <Value>{item.desc_registro || 'O relator não descreveu o incidente!'}</Value>
                                    </Wrapper>
                                </RegistersCards>
                            ))}
                        </RegistersScrollView>
                    </MapViewContainer>
                        :
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <ActivityIndicator color="#41BD1B" size='large'/>     
                    </View>}
            </>
        }
        {selectedBO && <MoreDetailsModal {...selectedBO} pressed={() => setSelectedBO(null)}/>}
    </Container>
  );
}

export default TraceRoute;