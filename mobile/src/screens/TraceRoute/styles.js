import { Animated, Dimensions } from 'react-native'
import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;

    background-color: white;
`

export const WrapperInputs = styled.View`

`

export const TraceRoutesInput = styled.TextInput`
    height: 50px;
    width: 100%;

    font-family: 'RobotoLight';
    font-size: 18px;

    margin-top:5px;
    padding-left: 20px;
    padding-bottom: 5px;

    border-bottom-width: 1;
    border-bottom-color: gainsboro;
`

export const DestinyInput = styled.TextInput`
    width: 100%;
`

export const MapViewContainer = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
`

export const RegistersScrollView = styled(Animated.ScrollView)`
    width: 100%;
    max-height: 240px;
    margin: 20px 0px;
    margin-bottom: 50px;

`

const CARD_WIDTH = Dimensions.get('window').width * 0.8

export const RegistersCards = styled.View`
    width: ${CARD_WIDTH+"px"};
    height: 90%;

    margin: 0px 10px;
    padding: 20px;

    background-color: white;
    border: 1px solid gainsboro;
    border-radius: 3px;
`

export const Wrapper = styled.View`
    margin: 5px 0px;
`

export const Title = styled.Text`
    font-family: 'RobotoMedium';
    font-size: 14px;
`

export const Value = styled.Text`
    font-family: 'RobotoLight';
    font-size: 12px;
`