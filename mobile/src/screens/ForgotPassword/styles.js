import { Dimensions } from 'react-native'
import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;

    background-color:white;

`

const imageWidth = Dimensions.get('window').width - 200

export const StyledImage = styled.Image`
    width: ${imageWidth+'px'};
    height: ${imageWidth+'px'};

    margin: -10px 0px 30px 0px;

    border-radius: 1000px;
`

export const Header = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;

    padding-left: 15px;
    margin-top: 15px;
`

export const HeaderTitle = styled.Text`
    font-family: 'RobotoLight';
    font-size: 22px;

    color: black;
`

export const Title = styled.Text`
    font-family: 'RobotoLight';
    font-size: 20px;
    text-align: center;

    padding: 10px 30px;
`