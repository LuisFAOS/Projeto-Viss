import React from 'react';

import { 
    InputContainer,
    Input,
    LabelInputContainer,
    InputLabel,
 } from './styles';

 function AppInputBox(props) {

    const [isFocused, setIsFocused] = React.useState(false)

    const PropsValueIsNull = () => {
        setIsFocused(props.multiline || props.value.length > 0)
    }

    React.useEffect(()=>{
        PropsValueIsNull()
    },[])


    const refInput = React.useRef(null)

  return (
        <InputContainer 
            isTextArea={props.multiline}
            onFocused={isFocused}
        >
            <Input 
                ref={refInput}
                
                autoCapitalize="none" 

                onChangeText={() => {
                    props.onChangeText()
                    setIsFocused(props.value && true)
                    console.log(props.value)
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