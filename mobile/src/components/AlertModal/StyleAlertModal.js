import styled from 'styled-components/native';

export const CloseAlertIconWrapper = styled.View`
    position: absolute;
    right: 5px;
    top: 5px;
`

export const BackdropWrapper = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;

    display: flex;
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

    font-family: 'RobotoLight';
`