import React from 'react';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import { 
    BackdropWrapper,
    AlertModalLogin, 
    CloseAlertIconWrapper, 
    ModalLabel
 } from './StyleAlertModal';

import RobotoFontLoader from '../../FontConfig/RobotoFontConfig';
import { Easing } from 'react-native-reanimated';


function AlertModal(props) {

    RobotoFontLoader()

    const spinValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(
          spinValue,
          {
           toValue: 1,
           duration: 200,
           easing: Easing.linear,
           useNativeDriver: true
          }
        )
       ).start();       

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

  return (
        <TouchableWithoutFeedback 
                onPress={props.pressed}>
            <BackdropWrapper>
                <AlertModalLogin>
                    <CloseAlertIconWrapper>
                        <EvilIcons name="close" size={25} color="gray" />
                    </CloseAlertIconWrapper>
                    {
                        props.isLoading ?
                            (<Animated.View
                                style={{transform: [{rotate: spin}] }}
                            >
                                <AntDesign name="loading2" size={34} color="black"/>
                            </Animated.View>)
                                :
                            <AntDesign name="warning" size={34} color="crimson" />

                    }
                    
                    <ModalLabel>
                        {props.alertTxt}
                    </ModalLabel>
                </AlertModalLogin>
            </BackdropWrapper>
        </TouchableWithoutFeedback>
  );
}

export default AlertModal;