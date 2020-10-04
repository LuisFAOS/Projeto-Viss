import React from 'react';

import Login from '../../screens/Login/Login'
import SingUp from '../../screens/SignUp/SingUp'

import { createStackNavigator } from '@react-navigation/stack'

const STACK = createStackNavigator();

const LoginStackRoutes = () =>{
    return(
        <STACK.Navigator>
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
        </STACK.Navigator>
    )
}

export default LoginStackRoutes