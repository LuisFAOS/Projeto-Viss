import React from 'react';

import DefaultProfileImg from '../../../assets/userImgs/default-user-img2.png'
import InputBox from '../../../components/InputBox/InputBox'
import PasswordInput from '../../../components/PasswordInput/PasswordInput';

import {
    Head,
    Title,
    Logo,
    ChoosePictureText,
    ChoosePictureContainer,
} from './styles'

export default function SplitPage(props){
    
    return(
        <>
            <Head>
                {props.imageUri ? <Logo source={{uri:props.imageUri}}/> : <Logo source={DefaultProfileImg}/>}
                <ChoosePictureContainer onPress={props.selectPicture}>
                    <ChoosePictureText>
                        {props.imageUri ? "Trocar imagem": "Escolher imagem"}
                    </ChoosePictureText>  
                </ChoosePictureContainer>
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