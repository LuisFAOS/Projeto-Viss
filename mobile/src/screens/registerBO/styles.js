import { Calendar, Layout } from '@ui-kitten/components'
import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components'

export const Container = styled.View` 
    position: relative;

    background-color: white;
    height: 100%;
`

export const PageTitle = styled.View`
    align-items: center;
    padding: 30px;
`

export const WrapperSuccessImage = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;    
    background-color: white;

    margin-bottom: 60px;
`

export const SuccessText = styled.Text`
    font-family: 'RobotoLight';
    font-size: 22px;
    text-align: center;

    padding: 0px 10px;
`

export const SuccessImage = styled.Image`
    height: ${`${Dimensions.get('screen').height/2.5}px`};
    width: ${`${Dimensions.get('screen').height/2.5}px`};
`

export const InputContainer = styled.View`
    flex: 1;
    margin: 20px 0px;
    margin-bottom: 60px;
`

export const HeaderInputContainer = styled.View`

    flex-direction: row;
    align-items: center;

    margin: 0px 0px 20px 30px;

    border-bottom-width: 1px;
    border-bottom-color: whitesmoke;
`

export const TitleInputContainer = styled.Text`

    margin-left: 10px;

    font-family: 'RobotoMedium';
    font-size: 25px; 
`

export const PickerContainer = styled.View`
    border: 1px solid gainsboro;
    background-color: white;
    border-radius: 3;

    margin: 15px 30px;
    height: 50px;
`

export const PickerFile = styled.TouchableOpacity`
    margin: 10px 30px;
    margin-bottom: 25px;
`

export const WrapperContentPickerFile  = styled.View`
    align-items: center;

    border-bottom-width: 1;
    border-bottom-color: ${props => props.isExistError ? "#DC3545" : "gainsboro"};

    padding: 5px;
`

export const TextPickerFile = styled.Text`
    font-family: 'RobotoLight';
    font-size: 14px;
    color: ${props => props.isExistError ? "#DC3545" : "gray"} ; 
    text-align: center;
`

export const ButtonShowCalendar = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    margin: 0px 30px;
    height: 50px;

    background-color: rgb(248,249,253);
    border-radius: 4px;
    border: 1px solid rgb(237,238,242);

    padding: 0px 15px;
`

export const ButtonShowCalendarText = styled.Text`
    font-size: 16px;
    color: rgb(141,156,179);
`

export const CalendarBlock = styled(Calendar)`
    background-color: white;
    
    margin: 20px 30px;

    position: absolute;
    z-index: 4;

    display: flex;

    
`

export const DropShadowCalendar = styled.TouchableWithoutFeedback`
    ${props => !props.show && css`display: none;`}
`

export const WrapperButton = styled.View`
    justify-content: flex-start;

    margin-bottom: 30px;
`

export const ButtonCalendarLabel = styled.Text`
    font-size: 12px;
    color: rgb(141,156,179);

    background-color: white;

    margin: 5px 30px;
`

export const Error = styled.Text`
    font-family: 'RobotoLight';
    font-size: 12px;
    color: #DC3545;

    margin-left: 30px;
    margin-top: -8px;
`