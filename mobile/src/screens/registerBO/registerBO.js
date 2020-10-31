import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header/Header';

// import { Container } from './styles';

function registerBO({navigation}) {
  return <View>
            <Header navigation={navigation} page="Verificar Segurança"/>

  </View>;
}

export default registerBO;