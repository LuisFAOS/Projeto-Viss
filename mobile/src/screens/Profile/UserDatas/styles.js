import styled,{css} from 'styled-components'

export const Container = styled.View`
    width: 100%;
    height: 100%;

    background-color: white;
`

export const Circle = styled.View`
    width: 100%;
    height: 120px;
    background-color: whitesmoke;
    position: relative;
    align-items: center;

    border-bottom-right-radius: 180px;
    border-bottom-left-radius: 180px;
`

export const Avatar = styled.Image`
    height: 180px;
    width: 180px;

    border: 2px solid white;
    border-radius: 90px;

    position: absolute;
    bottom: -90px;
`

export const Wrapper = styled.TouchableWithoutFeedback`
    flex: 1;

    margin-top: 100px;
    align-items: center;
`

export const Title = styled.Text`
    font-size: 25px;
    text-align: left;
    font-family: 'RobotoMedium';
    color: black;

    margin-top: 100px;
    padding: 30px;
    width: 100%;
`

export const ButtonContainer = styled.View`
    width: 100%;
`

export const InputContainer = styled.View`
    position: relative;

    flex-direction: row;
    align-items: center;

    background-color: white;
    border-radius: 3;

    margin: 15px 30px;
    height: 50;

`

export const Input = styled.TextInput` 
    position: relative;

    width: 100%;
    height: 100%;

    padding-left: 10px;
    margin-right: 4px;

    color: black;
    font-size: 17px;

    border-radius: 3;
    border: 1px solid gainsboro;

    ${props => props.onFocused && css`
        border: 1px solid gray;
        
    `}

    padding: 0px 15px;
`

export const TextInputContainer = styled.TouchableWithoutFeedback`
    justify-content: center;
`

export const TextInput = styled.Text`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    left: 15px;

    width: 94%;
    line-height: 40;

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