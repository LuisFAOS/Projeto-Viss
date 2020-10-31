import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import DrawerRoutes from '../DrawerRoutes/DrawerRoute';
import UserDatasScreen from '../../screens/Profile/UserDatas/UserDatas';
import { UserDatasContext } from '../../context/context';

const STACK = createStackNavigator();

const AppStackRoute = ({route}) =>{

    return(
        <UserDatasContext.Provider value={route.params.AuthDatas}>
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
                    component={DrawerRoutes} 
                    options={
                        { 
                            headerShown: false,
                        }
                    }
                />
            </STACK.Navigator>
        </UserDatasContext.Provider>
    )
}

export default AppStackRoute 

