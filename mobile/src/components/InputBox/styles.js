import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'; 

export const InputBox = styled.View`
  flex-direction: row;
  align-items: center;


  background-color: white;
  border-radius: 2;

  margin: 15px 30px;
  height: 50;
`

export const TextInput = styled.TextInput`
  flex:1 auto;

  color: black;
  font-size: 17px;

  height: 100%;
  padding-left: 10px;
  margin-right: 4px;

  border: 1px solid black;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-right-width: 0px;
`

const iconsCSS= css`
  margin-right: 9;
  margin-left: 9;

  color: black;
`

export const InputIcons = styled(MaterialIcons)`${iconsCSS}`