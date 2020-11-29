import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AuthContext from '../context/context';
import AppStackRoutes from './StackRoutes/AppStackRoutes'
import AuthStackRoutes from './StackRoutes/AuthStackRoutes'

function navigation() {

    const {isSigned, loading} = useContext(AuthContext)

    console.log(loading)

    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center' }}>
          <ActivityIndicator color="#41BD1B" size='large' />
        </View>
      )
    }
    
    return isSigned ? <AppStackRoutes/> : <AuthStackRoutes/>

}

export default navigation;