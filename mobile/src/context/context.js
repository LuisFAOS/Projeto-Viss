import React, {createContext, useEffect, useState} from 'react'
import AsyncStorage from '@react-native-community/async-storage';

const AuthContext = createContext({ signed: false, user: {} })

export function AuthProvider({children}) {

    const [authDatas, setAuthDatas] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        async function loadStoragedData(){
            const authUserDatas = await AsyncStorage.getItem('@user_datas');
            
            if(authUserDatas) setAuthDatas(JSON.parse(authUserDatas))

            setLoading(false)
        }
        loadStoragedData()
    },[])
    
    
    async function signOut() {
        await AsyncStorage.clear()
        setAuthDatas(null);
    }
    
    const singIn = async (AuthDatas)=> {
        setAuthDatas({...AuthDatas})
                
        await AsyncStorage.setItem('@user_datas', JSON.stringify(AuthDatas))
    } 
    
    return (
        <AuthContext.Provider value={{isSigned: !!authDatas, authDatas, singIn, signOut, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
