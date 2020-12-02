import React, { useContext } from 'react';
import HideKeyboardContext from '../../context/hideTabContext';

import { 
    InputContainer,
    Input,
    LabelInputContainer,
    InputLabel,
 } from './styles';

 function AppInputBox(props) {

    const [isFocused, setIsFocused] = React.useState(false)

    const PropsValueIsNull = () => {
        setIsFocused(props.multiline || props.value.length > 0 || props.openInput)
    }

    React.useEffect(()=>{
        PropsValueIsNull()
    },[])


    const refInput = React.useRef(null)


  return (
        <InputContainer 
            isTextArea={props.multiline}
            onFocused={isFocused}
            isExistError={props.isExistError}
        >
            <Input 
                ref={refInput}

                style={props.multiline && {textAlignVertical: 'top'}}
                
                autoCapitalize="none" 

                onChangeText={() => {
                    props.onChangeText()
                    setIsFocused(props.value && true)
                }}


                value={props.value}

                onBlur= {() => setIsFocused(props.multiline || (!isFocused || props.value) || false)}
                
                {...props}
                />

            <LabelInputContainer
                onPress={() => {
                        setIsFocused(true)
                        refInput.current.focus()
                    }
                }
            >
                <InputLabel 
                    onFocused={isFocused}>
                    {props.labelText}
                </InputLabel>
            </LabelInputContainer>
        </InputContainer>
  );
}

export default AppInputBox;