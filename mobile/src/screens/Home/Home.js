import React from 'react'

import Header from '../../components/Header/Header'
import { useIsDrawerOpen } from '@react-navigation/drawer'

export default function Home({ navigation }){
    const isDrawerOpen = useIsDrawerOpen()

    const ShowDrawer = () => {
        if(!isDrawerOpen){
            navigation.openDrawer();
        }
    }

    return(
        <>
            <Header Pressed={ShowDrawer}/>
        </>
    )
}