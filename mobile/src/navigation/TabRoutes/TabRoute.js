import React, { useContext } from 'react';

import RegisterBO from '../../screens/RegisterBO/RegisterBO';
import Home from '../../screens/Home/Home'
import ConsultLocation from '../../screens/ConsultLocation/ConsultLocation';
import TraceRoute from '../../screens/TraceRoute/TraceRoute';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import { TabBarItemLabel } from './styles'
import HideKeyboardContext from '../../context/hideTabContext';

const Tab = createBottomTabNavigator();

const icones = {
    Inicio: {name: 'home'},
    Inserir: {name: 'edit-2'},
    Consultar: {name: 'search'},
    'Traçar Rota': {name: 'route'},
}

function TabRoutes() {

    const {isKeyboardOpen} = useContext(HideKeyboardContext)

  return (
        <Tab.Navigator 
            tabBarOptions={
                {
                    style: !isKeyboardOpen ? 
                    {   height: 65,    
                        paddingTop: 10, 
                        paddingBottom: 10, 
                        zIndex: 1, 
                        position: 'absolute'  }:
                    {
                        height: 0,    
                        backgroundColor: 'black',
                        paddingTop: 0, 
                        paddingBottom: 0, 
                    },
                    activeTintColor: '#41BD1B',
                    showLabel: false
                    
                }
            }
            screenOptions = {({ route }) => ({
                tabBarIcon: ({color, size}) => {
                    const { name } = icones[route.name]

                    return color === '#41BD1B' ? (
                    <View>
                        <LinearGradient style={styles.iconTabRound} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} colors={[color, 'green']}>
                            {name === 'route' ?
                                <FontAwesome5 name={name} size={size+4} color="white"/>
                            :
                                <Feather name={name} size={size+5} color="white"/>}
                        </LinearGradient>
                    </View>
                    ) : (
                        <View style={{alignItems: 'center'}}>
                            {name === 'route' ?
                                <FontAwesome5 name={name} size={size+4} color={color}/>
                            :
                                <Feather name={name} size={size+5} color={color}/>}
                            <TabBarItemLabel style={{color}}>{route.name}</TabBarItemLabel>
                        </View>
                    )
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
                component={ConsultLocation}
                />
            <Tab.Screen 
                name="Traçar Rota" 
                component={TraceRoute}
                />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
	iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#9C27B0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
    }
});

export default TabRoutes;