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
