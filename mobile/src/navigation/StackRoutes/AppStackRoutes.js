import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import DrawerRoutes from '../DrawerRoutes/DrawerRoute';
import UserDatasScreen from '../../screens/Profile/UserDatas/UserDatas';
import UserRegisters from '../../screens/Profile/UserRegisters/UserRegisters';

const STACK = createStackNavigator();

const AppStackRoute = () =>{

    return(
        <STACK.Navigator>
            <STACK.Screen 
                name='Home' 
                component={DrawerRoutes} 
                options={
                    { 
                        headerShown: false,
                        
                    }
                }
            />
            <STACK.Screen 
                name='Meus Dados' 
                component={UserDatasScreen} 
                options={
                    { 
                        headerShown: false,
                    }
                }
            />
            <STACK.Screen 
                name='Minhas Rotas' 
                component={DrawerRoutes} 
                options={
                    { 
                        headerShown: false,
                    }
                }
            />
            <STACK.Screen 
                name='Meus Registros' 
                component={UserRegisters} 
                options={
                    { 
                        headerShown: false,
                    }
                }
            />
        </STACK.Navigator>
    )
}

export default AppStackRoute 

