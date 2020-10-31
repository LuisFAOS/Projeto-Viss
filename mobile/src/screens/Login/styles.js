import styled,{ css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'


export const Container = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  z-index: 0;
`

export const Logo = styled.Image`
  width: 180;
  height: 180;
  align-self: center;
  margin-top: 100;
  margin-bottom: 60;
`

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  height: 40;
  margin: 10px 50px;

  background-color: #41BD1B;
  border-radius: 2;
`

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`

export const TipsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 30px 15px 30px;
`

export const TipsText = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: 'RobotoMedium';
  font-size: 14px;
`

export const ContainerCheckBox = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`