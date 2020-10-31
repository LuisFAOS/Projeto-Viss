import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 100%;
`

export const ChangePageButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 20px 10px 30px 15px;

  width: 200px;
`

export const ArrowIcon = styled(MaterialIcons)`
  color: white;
  margin-left: 5px;
`

export const ButtonContainer = styled.View`
  display: flex;
  flex:1 auto;
  align-items: center;
  flex-direction: row;
  ${props=> props.page === 'first' && css`
    justify-content: space-between;
    flex-direction: row-reverse;
  `}

  width: 100%;
  height: 100%;
`

export const HeaderTitle = styled.Text`
  color: white;

  font-size: 18px;
  margin-left: 5px;
`