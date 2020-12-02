import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const CloseAlertIconWrapper = styled.View`
    position: absolute;
    right: 5px;
    top: 5px;
`

export const BackdropWrapper = styled.View`
    position: absolute;
    width: ${Dimensions.get('screen').width};
    height: ${Dimensions.get('screen').height};
    z-index: 999;

    align-items: center;
    justify-content: center;

    background-color: rgba(0,0,0, 0.7);
`

export const AlertModalLogin = styled.View`
    position: relative;

    justify-content: center;
    align-items: center;

    width: 250px;
    height: 150px;

    border-top-width: 4px;
    border-top-color:  crimson;
    background-color: white;
    border-radius: 3px;
`

export const ModalLabel = styled.Text`
    padding: 10px;
    font-size: 18px;
    text-align: center;

    font-family: 'RobotoLight';
`