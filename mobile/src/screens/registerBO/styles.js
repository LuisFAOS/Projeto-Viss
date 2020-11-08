import { Entypo, Ionicons } from '@expo/vector-icons'
import styled, { css } from 'styled-components'

export const Container = styled.ScrollView`
    background-color: white;
`

export const PageTitle = styled.View`
    align-items: center;
    padding: 30px;
`

export const InputContainer = styled.View`
    margin: 30px 0px;
`

export const HeaderInputContainer = styled.View`

    flex-direction: row;
    align-items: center;

    margin: 0px 0px 5px 30px;

    border-bottom-width: 1px;
    border-bottom-color: whitesmoke;
`

export const TitleInputContainer = styled.Text`

    margin-left: 10px;

    font-family: 'RobotoMedium';
    font-size: 25px; 
`