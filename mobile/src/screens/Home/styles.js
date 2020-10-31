import { Dimensions } from 'react-native'
import styled from 'styled-components'

export const Welcomes = styled.ScrollView`
    background: white;
`

const DEVICE_WIDTH = Dimensions.get("screen").width-40

export const IntroductionImage = styled.Image`
    display: ${props => props.display ? "flex" : "none"};
    align-self: center;

    width: 100%;
    height: ${DEVICE_WIDTH < 290 ? 290 : DEVICE_WIDTH};
    margin-top: 5px;
    margin-bottom: 25px;
`

export const Title = styled.Text`
    font-size: 22px;
    font-family: 'RobotoMedium';
    color: #41BD1B;
    text-align: center;

    padding: 15px;
    padding-top: 0px;

`

export const Description = styled.Text`
    font-size: 14px;
    font-family: 'RobotoLight';
    color: gray;
    text-align: center;

    padding: 0px 20px;
`   

export const ContainerBolls = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 90px;

    margin: 35px 0px;

    align-self: center;
`

export const NavigationCircle = styled.View`
    width: 15px;
    height: 15px;
    background-color: ${props => props.color};

    border-radius: 8px;
`

export const ContainerButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 30px;
`

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 70px;

    background-color: #41BD1B;

    border-radius: 40px;
`