import styled,{ css } from 'styled-components'


export const InputContainer = styled.View`
    position: relative;

    flex-direction: row;
    align-items: center;

    border: 1px solid gainsboro;
    background-color: white;
    border-radius: 3;

    margin: 15px 30px;
    height: 50px;

    ${props => (props.onFocused && !props.isTextArea) && css`
        border: 1px solid gray;
    `}

    ${props => props.isTextArea && css`
        height: 150px;
        padding-top: 15px;
    `}

`

export const Input = styled.TextInput` 
    position: relative;

    width: 100%;
    height: 100%;

    padding-left: 10px;
    margin-right: 4px;

    color: black;
    font-size: 17px;

    border-radius: 3px;

    padding: 0px 15px;
`

export const LabelInputContainer = styled.TouchableWithoutFeedback`
    justify-content: center;
`

export const InputLabel = styled.Text`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    left: 15px;

    width: 95.5%;
    line-height: 40px;

    ${props => props.onFocused && css`
        top: -10px;
        line-height: 20;

        width: auto;
        height: auto;
    `}

    background-color: white;

    font-family: 'RobotoLight';
    font-size: 20px; 
`