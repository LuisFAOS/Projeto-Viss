import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components'

export const Container = styled.View`

    width: ${Dimensions.get('screen').width-30}; 
    height: ${Dimensions.get('screen').height/2.2}; 

    background-color: white;
    border-radius: 3px;

    padding: 10px 20px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-family:'RobotoMedium';
    font-size: 16px;
`

export const Value = styled.Text`
    font-family:'RobotoLight';
    font-size: 14px;

    color: gray;

`

export const Wrapper = styled.View`
    margin-top: 5px;
`

export const PageTitle = styled.Text`
    margin: 30px 0px;
    margin-bottom: 40px;

    font-family:'RobotoLight';
    font-size: 25px;
`