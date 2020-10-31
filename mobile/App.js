import React from 'react';
import 'react-native-gesture-handler'

import { StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import LoginStackRoutes from './src/navigation/StackRoutes/LoginStackRoutes'
import DrawerRoutes from './src/navigation/DrawerRoutes/DrawerRoute';
import AppStackRoute from './src/navigation/StackRoutes/AppStackRoute';
import UserDatasScreen from './src/screens/Profile/UserDatas/UserDatas'
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    RobotoMedium: require('./src/assets/fonts/Roboto-Medium.ttf'),
    RobotoLight: require('./src/assets/fonts/Roboto-Light.ttf')
  });

  if (!loaded) {
      return <View/>
  }
  
  return (
    <>
      <StatusBar backgroundColor='black'/>
      <NavigationContainer>
          <LoginStackRoutes/>
      </NavigationContainer>
    </>
  );
}
