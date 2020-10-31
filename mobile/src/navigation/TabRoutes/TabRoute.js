import React from 'react';

import RegisterBO from '../../screens/registerBO/registerBO'
/*import ConsultRegion from '../../screens/ConsultRegion/ConsultRegion'
import TraceRoute from '../../screens/TraceRoute/TraceRoute' */

import Home from '../../screens/Home/Home'

import DrawerRoutes from '../DrawerRoutes/DrawerRoute'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const icones = {
    Inicio: {name: 'home'},
    Inserir: {name: 'create'},
    Consultar: {name: 'search'},
    'Traçar Rota': {name: 'security'},
}

function TabRoutes() {
  return (
        <Tab.Navigator 
            tabBarOptions={
                {
                    style: { backgroundColor:'white', height: 65, paddingTop: 10, paddingBottom: 10, zIndex: 1, position: 'absolute'  },
                    activeTintColor: '#41BD1B',
                }
            }
            screenOptions = {({ route }) => ({
                tabBarIcon: ({color, size}) => {
                    const { name } = icones[route.name]

                    if(name === 'security') return <FontAwesome5 name="route" size={size+5} color={color} /> 
                    else return <MaterialIcons name={name} size={size+5} color={color}/>
                }
            })}
        >
            <Tab.Screen 
                name="Inicio" 
                component={Home}
                options={{
                    unmountOnBlur: true,
                }}
                />
            <Tab.Screen 
                name="Inserir"
                component={RegisterBO}
                />
            <Tab.Screen 
                name="Consultar" 
                component={Home}
                />
            <Tab.Screen 
                name="Traçar Rota" 
                component={Home}
                />
        </Tab.Navigator>
    );
}

export default TabRoutes;