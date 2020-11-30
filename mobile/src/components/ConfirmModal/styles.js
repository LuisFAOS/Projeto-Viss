import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components'
import { Button, ButtonText } from '../Button/styles'


export const Container = styled.View`
    background-color: white;


    border-radius: 3px;

    width: 80%;
    padding: 20px;
    height: 320px; 
`

export const ModalTitle = styled.Text`
    font-family: 'RobotoLight';
    font-size: 20px;

    margin-bottom: 20px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between; 

    margin-bottom: 5px;

`

export const Value = styled.Text`
    font-family: 'RobotoLight';
    font-size: 13px;

    color: gray;

    ${props => props.numberOfLines && css`height: 40px;`}
`

export const Title = styled.Text`

    margin-top: 5px;

    font-family: 'RobotoMedium'; 
    font-size: 15px;
    font-weight: bold;
`

export const WrapperButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
`

export const ButtonModal = styled(Button)`
    margin: 10px;
`   

export const ButtonTextModal = styled(ButtonText)`
    font-size: 16px;
`
