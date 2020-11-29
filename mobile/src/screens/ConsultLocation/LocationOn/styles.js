import styled, { css } from 'styled-components'


export const Container = styled.View`
    flex: 1;
    align-items: center; 

    padding: 20px 30px;
`

export const Header = styled.View`

    width: 100%;
    padding-top: 20px;
    
    border-bottom-width: 1;
    border-bottom-color: whitesmoke;
`

export const NeighborhoodName = styled.Text`
    margin: 0px 10px;

    font-family: 'RobotoMedium';
    text-align: center;
    font-size: 17px;
`

export const NeighborhoodInfos = styled.View`
    flex-direction: row;
    justify-content: space-around;

    width: 100%;
    padding: 5px 0px;
`

export const InfosLabel = styled.Text`
    font-family: 'RobotoLight';
    font-size: 13px;
`

export const StreetInfosList = styled.View` 
    width: 100%;
    flex: 1;

    margin-bottom: 70px;
    margin-top: 10px;

    background-color: white;
`