import styled from 'styled-components'

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between; 

    background: whitesmoke;

    height: 70px;
    border-bottom-width: 1px;
    border-bottom-color: gray;
    padding: 10px;
`

export const WrapperMenu = styled.TouchableOpacity`
    margin-left: 25px;
    width: 40px;
    height: 45px;
`

export const Logo = styled.Image`
    height: 45;
    width: 45;
    margin-right: 25px;
`