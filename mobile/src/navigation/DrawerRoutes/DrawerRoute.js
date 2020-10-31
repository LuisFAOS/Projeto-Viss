import React,{ useContext} from 'react'

import Profile from '../../screens/Profile/UserDatas/UserDatas'
/* import Collection from '../../views/Collection/Collection'
import Item from '../../views/Item/Item'
import Profile from '../../views/Profile/Profile' */
import MyDrawer from './MyDrawer/MyDrawer'


import { createDrawerNavigator } from '@react-navigation/drawer'
import TabRoutes from '../TabRoutes/TabRoute'
import { UserDatasContext } from '../../context/context'


export default function DrawerRoutes(props){
    
    const Drawer = createDrawerNavigator();
    const AuthDatas = useContext(UserDatasContext)

    return(
            <Drawer.Navigator
                drawerContent={() => <MyDrawer AuthDatas={AuthDatas} {...props}/>}
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