import React, { useContext, useState } from 'react';

import DefaultProfileImg from '../../../assets/userImgs/default-user-img1.png'
import InputBox from '../../../components/InputBox/InputBox'
import PasswordInput from '../../../components/PasswordInput/PasswordInput';
import HideKeyboardContext from '../../../context/hideTabContext';

import {
    Head,
    Title,
    Logo,
    ChoosePictureText,
    ChoosePictureContainer,
} from './styles'

export default function SplitPage(props){
    
    const {isKeyboardOpen, image} = useContext(HideKeyboardContext)

    return(
        <>
            <Head>
                {props.imageUri ?   
                    <Logo 
                        isKeyboardOpen={isKeyboardOpen}
                        style={{
                            transform: [{ scale: image }]
                        }}
                        source={{uri:props.imageUri}} 
                    /> 
                    : 
                    <Logo 
                        isKeyboardOpen={isKeyboardOpen}
                        style={{
                            transform: [{ scale: image }]
                        }}
                        source={DefaultProfileImg}
                    />}
                <ChoosePictureContainer 
                    onPress={props.selectPicture} 
                    style={{
                        transform: [{ scale: image }]
                    }}
                    isKeyboardOpen={isKeyboardOpen}>
                    <ChoosePictureText isKeyboardOpen={isKeyboardOpen}>
                        {props.imageUri ? "Trocar imagem": "Escolher imagem"}
                    </ChoosePictureText>  
                </ChoosePictureContainer>
                <Title>
                    {props.title}
                </Title>
            </Head>

            <InputBox 
                onChange={props.firstInputChangeHandler}

                placeholder={props.firstInputPlaceholder}
                value={props.firstInputValue}
                iconName={props.firstIconName} 
                size={35}/>

            {props.isPassword ? 
                    <PasswordInput placeholder={props.secondInputPlaceholder} 
                        value={props.secondInputValue}
                        iconName={props.secondIconName}

                        onChange={props.secondInputChangeHandler}
                        size={35}
                    />
                :   <InputBox placeholder={props.secondInputPlaceholder} 
                        value={props.secondInputValue}
                        iconName={props.secondIconName}

                        onChange={props.secondInputChangeHandler}
                        size={35}/>
                }

            
        </>
    )
} 