import styled, { css } from 'styled-components'


export const StreetInfosCard = styled.TouchableOpacity`
    height: 120px;
    margin-top: 10px;
    padding: 10px;

    border: 1px solid whitesmoke; 
    border-radius: 3px;

`

export const StreetInfosHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;

`

export const StreetInfoLabel = styled.View`
    ${props => props.name && css`flex:auto; padding-right: 5px;`}
    ${props => props.data && css`align-items: flex-end;`}
    ${props => props.desc && css`margin-top: 10px;`}
`

export const BoldTitle = styled.Text`
    font-family: 'RobotoLight';
    font-size: 14px;
    font-weight: bold;
`

export const StreetBodyText = styled.Text`
    font-family: 'RobotoLight';
    font-size: 14px;

    ${props => props.data && css`text-align: right;`}
`