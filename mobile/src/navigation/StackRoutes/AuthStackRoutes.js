import React from 'react';

import Login from '../../screens/Login/Login'
import SingUp from '../../screens/SignUp/SingUp'
import AppStackRoute from './AppStackRoutes'

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage';
import ForgotPassword from '../../screens/ForgotPassword/ForgotPassword';

const STACK = createStackNavigator();

const LoginStackRoutes = () => {

    return(
        <STACK.Navigator
            screenOptions={{
                animationEnabled: true,
                gestureDirection: "vertical",
            }}
        >
            <STACK.Screen 
                name='Login' 
                component={Login} 
                options={
                    { 
                        headerShown: false,
                    }
                }
                />
            <STACK.Screen 
                name='SingUp'
                component={SingUp} 
                options={
                    { 
                        headerShown: false
                    }
                }
                />
            <STACK.Screen 
                name='ForgotPassword'
                component={ForgotPassword} 
                options={
                    { 
                        headerShown: false
                    }
                }
                />
        </STACK.Navigator>
    )
}

export default LoginStackRoutes