import styled from 'styled-components/native';

export const Container = styled.View`
  display: ${props => props.display};
`


export const Head = styled.View`
    align-items: flex-start;

    margin: 30px 20px;
`

export const Logo = styled.Image`
  align-self: center; 
 
  width: 160px;
  height: 160px;
  margin-bottom: 45px;
`

export const Title = styled.Text`
    font-size: 35px;
    color: white;
    font-weight: bold;
    margin-left: 10px;
`
