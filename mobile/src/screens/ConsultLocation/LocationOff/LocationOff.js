import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import Svg, { Path } from 'react-native-svg';

import { 
    TitleLocationOff,
    ContainerLocationOff,
} from './styles';
import { View } from 'react-native';

function LocationOff(props) {
  return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TitleLocationOff>{props.titleText}</TitleLocationOff>
        <ContainerLocationOff>
            <Svg style={{position: 'absolute'}} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <Path fill="#41BD1B" d="M45.7,-67.4C56.4,-55.1,60.3,-38,67.1,-20.9C73.9,-3.8,83.6,13.2,76,21C68.3,28.7,43.4,27,27.9,34C12.3,40.9,6.2,56.4,-6.2,64.9C-18.6,73.5,-37.2,75.2,-45.1,65.7C-53,56.3,-50.2,35.9,-47.8,20.8C-45.4,5.7,-43.6,-3.9,-44.5,-18.6C-45.3,-33.2,-49,-52.9,-42.1,-66.4C-35.2,-80,-17.6,-87.4,-0.1,-87.3C17.5,-87.2,34.9,-79.7,45.7,-67.4Z" transform="translate(100 100)" />
            </Svg>
            <MaterialIcons
                name="location-off"
                size={100} 
                color="black"/>
        </ContainerLocationOff>
      </View>
  );
}

export default LocationOff;