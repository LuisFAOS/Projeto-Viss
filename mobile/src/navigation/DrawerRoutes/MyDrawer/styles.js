import styled, {css} from 'styled-components'

import { DrawerItem } from '@react-navigation/drawer'
import { DrawerContentScrollView } from '@react-navigation/drawer'

import { Drawer } from 'react-native-paper'

export const Wrapper = styled.ImageBackground`
    align-items: flex-start;
    padding: 60px 0px 10px 20px;

    margin-bottom: 30px;
    margin-top: -10px;
`

export const Label = styled.Text`
    color: white;
    font-size: 22px;

    margin: 4px 0px 10px;
`

export const ProfileImageWrapper = styled.View`
    width: 120px;
    height: 120px;

    background-color: black;
`

export const FuncsTitle = styled.Text`
    color: gray;
    font-size: 18px;
    font-weight: bold;

    padding-left: 15px;
    margin-top: 20px;
`

export const DrawerItemStyled = styled(DrawerItem)`
    padding-bottom: 10px;
    padding-left: 5px;

    ${props => props.pos && css`
        position: absolute;
        bottom: 10px;
        width: 92%;
    `};
`

export const DrawerSection = styled(Drawer.Section)`
    flex: 1;
    height: 100%;
    padding-top: 10px;

    border-top-width: 1px;
    border-top-color: whitesmoke;
`

export const DrawerContentScrollViewS = styled.View`
    flex: 1; 
    position: relative;
`
