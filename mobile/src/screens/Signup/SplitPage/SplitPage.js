import React from 'react';

import LogoImg from '../../../assets/logo.png'
import InputBox from '../../../components/InputBox/InputBox'

import {
    Head,
    Title,
    Logo,
    Container,
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
                onChange={props.firstInputChangeHandler}
                value={props.firstInputValue}
                iconName={props.firstIconName} 
                size={35}/>

            <InputBox placeholder={props.secondInputPlaceholder} 
                value={props.secondInputValue}
                iconName={props.secondIconName}
                onChange={props.secondInputChangeHandler}
                size={35} 
                secureTextEntry = {props.isPassword}/>
  
        </>
    )
} 