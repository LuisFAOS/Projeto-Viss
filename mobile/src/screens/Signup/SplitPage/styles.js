import styled from 'styled-components/native';

export const Container = styled.View`
  display: ${props => props.display};
`

export const ChoosePictureContainer = styled.TouchableOpacity`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 90px;

  width: 159px;
  height: 158px;
`

export const ChoosePictureText = styled.Text`
  font-family:'RobotoLight';
  font-size: 18px;
  color: white;
`

export const Head = styled.View`
  position: relative;

  margin: 30px 20px;
`

export const Logo = styled.Image`
  align-self: center; 
 
  width: 160px;
  height: 160px;
  border-radius: 80px;

  margin-bottom: 45px;
`

export const Title = styled.Text`
    font-size: 35px;
    color: white;
    font-weight: bold;
    margin-left: 10px;
`
