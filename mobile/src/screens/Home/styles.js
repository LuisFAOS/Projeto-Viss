import styled from 'styled-components'

export const Welcomes = styled.ScrollView`
    background: rgb(217, 242, 209);
`

export const Image = styled.Image`
    width: 250;
    height: 250;
`

export const ContainerImage = styled.View`
    align-items: center;
    
    padding: 30px 20px 20px 20px;

    background: white;
`

export const Title = styled.Text`
    font-size: 50px;
    font-family: 'BebasTitle';
    text-align: center;
    line-height: 45px;
    
    padding-top: 50px;

`

export const Description = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
    padding: 10px 30px;

    background-color: whitesmoke;
    border: 1px gainsboro;
    border-bottom-width: 0px;
    border-color: gainsboro;
    
    border-top-left-radius: 60px; 
    border-top-right-radius: 60px; 
`

export const Card = styled.View`
    align-items: center;

    height: 200px;
    width: 45%;
    margin: 20px 0px;

    background-color: whitesmoke;
    
    text-align: center;
    border-radius: 2px;
    border: 1px solid gainsboro;

    elevation: 1;
`

export const CardTitle = styled.Text`
    font-family: 'NanumDesc';
    text-align: center;
    font-size: 17px;
    
    font-weight: bold;

    margin-top: 10px;

`

export const CardDesc = styled.Text`
    text-align: center;
    font-size: 11px;

    padding: 6px;
    margin-top: 8px;

`

export const IntroductionImage = styled.Image`
    width: 100%;
    height: 290;
    align-self: center;
    margin-bottom: 20px;
`

export const Label = styled.Text`
    text-align: center;
    font-family: 'NanumDesc';
    font-size: 25px;
`