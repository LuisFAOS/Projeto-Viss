import React from 'react'

import Home from '../../screens/Home/Home'
/* import Collection from '../../views/Collection/Collection'
import Item from '../../views/Item/Item'
import Profile from '../../views/Profile/Profile' */
import MyDrawer from './MyDrawer/MyDrawer'

import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'; 

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator
            drawerContent={MyDrawer}
        >

            <Drawer.Screen 
                name="Inicio" 
                component={Home}
                options={{
                    drawerIcon: ({ color, size }) =>(
                        <MaterialIcons name="home" size={size} color={color}/>
                    )
                }}    
            />
            <Drawer.Screen 
                name="Fazer B.O" 
                component={Home}
                options={{
                    drawerIcon: ({ color, size }) =>(
                        <MaterialIcons name="create" size={size} color={color}/>
                    )
                }}  
            />
            <Drawer.Screen  
                name="Verificar Segurança" 
                component={Home}
                options={{
                    drawerIcon: ({ color, size }) =>(
                        <MaterialIcons name="security" size={size} color={color}/>
                    )
                }}  
            />
            <Drawer.Screen 
                name="Traçar Rotas" 
                component={Home}
                options={{
                    drawerIcon: ({ color, size }) =>(
                        <FontAwesome5 name="route" size={size} color={color} />
                    )
                }}  
            />
            <Drawer.Screen  
                name="Perfil" 
                component={Home}
                options={{
                    drawerIcon: ({ color, size }) =>(
                        <MaterialIcons name="person" size={size} color={color}/>
                    )
                }}  
            />
        </Drawer.Navigator>
    );
}