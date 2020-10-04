import styled from 'styled-components'

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

    height: 45;
    margin: ${props => props.login ? '10px 50px': '10px 40px 10px 0px'};
    flex-grow: 1;

    background-color: #41BD1B;
    border-radius: 2;
`
export const ButtonText = styled.Text`
    color: white;
    font-size: 20px;
`