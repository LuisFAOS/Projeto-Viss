import React from 'react'

import MyDrawer from './MyDrawer/MyDrawer'

import { createDrawerNavigator } from '@react-navigation/drawer'
import TabRoutes from '../TabRoutes/TabRoute'


export default function DrawerRoutes(props){
    
    const Drawer = createDrawerNavigator();

    return(
            <Drawer.Navigator
                drawerContent={() => <MyDrawer {...props}/>}
            >
                <Drawer.Screen 
                    name="Inicio" 
                    component={TabRoutes}
                    options={{unmountOnBlur: false,
                        swipeEnabled: false,}}
                />
            </Drawer.Navigator>
    );
}