import { Dimensions } from 'react-native'
import styled from 'styled-components'
import { Error } from '../RegisterBO/styles'


export const Container = styled.View`
    flex: 1;
    background-color: white;
`

export const SearchInputContainer = styled.View`
    flex-direction: row;
    align-items: center;

    height: 55px;

    border: 1px solid ${props => props.isWrongValue ? '#DC3545' : 'gainsboro'};
    border-radius: 3px;

    margin: 20px 30px 0px 30px;
    padding-left: 10px; 
`

export const SearchInput = styled.TextInput`
    flex: auto;
    
    height: 100%;
    margin-left: 10px;
    padding-right: 10px;

    font-size: 18px;
`

export const ErrorMessage = styled(Error)`
    margin: 0px;
    margin-left: 30px;
`

export const NoDataFoundContainer = styled.View`
    flex: 1;
    
    justify-content: center;
    align-items: center;    
    background-color: white;

    margin-bottom: 60px;
`

export const NoDataFoundImage = styled.Image`
    height: ${`${Dimensions.get('screen').height/3}px`};
    width: ${`${Dimensions.get('screen').width-20}px`};
`

export const NoDataFoundText = styled.Text`
    font-family: 'RobotoLight';
    font-size: 16px;
    text-align: center;
    padding: 0px 20px;
`