import styled, { css } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 100%;
`

export const ChangePageButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: ${props => props.page === 'first' ? 'flex-end' : 'flex-start'};

  height: 60;
  width: 60;
  margin: ${props => props.page === 'second' ? '10px 20px 10px 40px' : '10px 40px'};

  background-color: #41BD1B;
  border-radius: 30;
`

export const ArrowIcon = styled(MaterialIcons)`
  color: white;
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