import React from 'react';

import LogoImg from '../../../assets/logo.png'
import InputBox from '../../../components/InputBox/InputBox'

import {
    Head,
    Title,
    Logo,
} from './styles'

export default function SplitPage(props){
    return(
        <>
            <Head>
                <Logo source={LogoImg}/>
                <Title>
                    {props.title}
                </Title>
            </Head>

            <InputBox 
                placeholder={props.firstInputPlaceholder} 
                iconName={props.firstIconName} 
                size={35}/>
            <InputBox placeholder={props.secondInputPlaceholder} 
                iconName={props.secondIconName} 
                size={35} 
                secureTextEntry = {props.isPassword}/>
  
        </>
    )
} 