import styled from 'styled-components'

export const Welcomes = styled.ScrollView`
    background: white;
`

export const Image = styled.Image`
    width: 250;
    height: 250;
`

export const ContainerImage = styled.View`
    align-items: center;
    
    padding: 20px;

    background: white;
`

export const Title = styled.Text`
    font-size: 35px;
    font-family: 'BebasTitle';
    text-align: center;
    color: rgb(58, 173, 71);

    padding: 30px 0px;

`

export const Description = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
    padding: 0px 25px; 
`

export const Card = styled.View`
    align-items: center;
    
    height: 200px;
    width: 45%;

    background: white;
    margin: 20px 0px;
    
    text-align: center;
    border-radius: 2px;
    border: 1px solid gainsboro;

    elevation: 1;
`

export const CardTitle = styled.Text`
    font-family: 'NanumDesc';
    font-size: 16px;
    text-align: center;
    color: black;

    margin-top: 10px;

`
