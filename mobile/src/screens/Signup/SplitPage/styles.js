import { Animated } from 'react-native';
import styled, { css } from 'styled-components/native';


export const ChoosePictureContainer = styled.TouchableOpacity`
  position: absolute;

  justify-content: center;
  align-items: center;
  align-self: center;

  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 80px;

  width: 170px;
  height: 170px;

  ${props => props.isKeyboardOpen && css`
    margin-top: 30px;
  `}
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

export const Logo = styled(Animated.Image)`
  align-self: center; 
 
  width: 170px;
  height: 170px;
  border-radius: 80px;

  margin-bottom: ${props => props.isKeyboardOpen ? '0px': '45px'};
  margin-top: ${props => props.isKeyboardOpen ? '30px': '0px'};


`

export const Title = styled.Text`
    font-family: 'RobotoMedium';
    font-size: 30px;
    color: white;
    font-weight: bold;
    margin-left: 10px;
`
