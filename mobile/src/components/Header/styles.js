import styled from 'styled-components'

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;

    background: whitesmoke;

    height: 70px;
    border-bottom-width: 1px;
    border-bottom-color: #D3D3D3;
    padding: 10px;
`

export const WrapperMenu = styled.TouchableOpacity`
    margin-left: 25px;
    width: 40px;
    height: 45px;
`

export const AppName = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #2F2E41;

    margin-right: 25px;
`