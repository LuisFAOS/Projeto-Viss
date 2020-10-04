import React from 'react';
import 'react-native-gesture-handler'

import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import LoginStackRoutes from './src/navigation/StackRoutes/LoginStackRoutes'
import Header from './src/components/Header/Header'
import DrawerRoutes from './src/navigation/DrawerRoutes/DrawerRoute';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='black'/>
      <NavigationContainer>
          <DrawerRoutes/>
      </NavigationContainer>
    </>
  );
}
