import React, { useContext, useEffect, useState } from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeDateService, Select, SelectItem } from '@ui-kitten/components';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { Button, ButtonText } from '../../../components/Button/styles';
import { 
    InputContainer,
    PickerFile, 
    TextPickerFile, 
    WrapperContentPickerFile, 
    CalendarBlock, 
    ButtonShowCalendar, 
    ButtonShowCalendarText,
    WrapperButton,
    ButtonCalendarLabel,
} from '../styles';
import HideKeyboardContext from '../../../context/hideTabContext';

function SecondPage(props) {

    const {setIsKeyboardOpen} = useContext(HideKeyboardContext)

    const i18n = {
        dayNames: {
          short: [
            "Seg", "Ter", "Qua", 
            "Qui", "Sex", "Sáb", 
            "Dom"
          ],
          long: [    
            "Segunda", "Terça", 
            "Quarta", "Quinta", 
            "Sexta", "Sábado", 
            "Domingo"
          ],
        },
        monthNames: {
          short: [
            "Jan", "Fev", "Mar", 
            "Abr", "Mai", "Jun", 
            "Jul", "Ago", "Set", 
            "Out", "Nov", "Dez"
          ],
          long: [            
            "Janeiro", "Fevereiro", 
            "Março", "Abril", "Maio",
            "Junho", "Julho", "Agosto",
            "Setembro", "Outubro",
            "Novembro", "Dezembro"
          ],
        },
      };
      
    const localeDateService = new NativeDateService("pt-Br", { i18n, startDayOfWeek: 1 });

    const dateFormat = (date) => {
        return ("0" + date.getDate()).substr(-2) + "/" 
        + ("0" + (date.getMonth() + 1)).substr(-2) + "/" + date.getFullYear()
    }

    useEffect(()=> {
        setIsExistError(props.boletimFile && !props.boletimFile.name)
    },[props.boletimFile])

    const [isExistError, setIsExistError] = useState(false)

    return (
            <InputContainer>
                <WrapperButton>
                    <ButtonCalendarLabel>Data do incidente:</ButtonCalendarLabel>
                    <TouchableWithoutFeedback onPress={()=> props.setShowCalendar(true)}>
                        <ButtonShowCalendar>
                            <ButtonShowCalendarText>
                                {props.data_ocorrido ? dateFormat(props.data_ocorrido) : "Selecione a data"}
                            </ButtonShowCalendarText>
                            <MaterialCommunityIcons name="calendar-text" size={24} color="rgb(141,156,179)" />
                        </ButtonShowCalendar>
                    </TouchableWithoutFeedback>
                </WrapperButton>
                {props.showCalendar && 
                <CalendarBlock
                    dateService={localeDateService}
                    placeholder="Selecione a data"
                    min={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()-10)}
                    max={new Date()}
                    date={props.data_ocorrido}
                    onSelect={nextDate => {
                        props.setShowCalendar(false)
                        props.onSelectedDatePicker('data_ocorrido', nextDate)
                    }}
                />}
                <Select
                    value={props.selectInputData[props.tipo_registro.row]}
                    selectedIndex={props.type}
                    style={{margin:30, marginTop: 5, marginBottom: 25}}
                    label='Tipo do incidente:'
                    placeholder='Escolher tipo'
                    onSelect={index => props.onSelectedSelectType('tipo_registro', index)}
                    size="large"
                >
                    {props.selectInputData.map((title) => (
                                            <SelectItem title={title}/>
                                        ))}    
                </Select>

                <PickerFile onPress={props.selectPDF}>
                    <WrapperContentPickerFile isExistError={isExistError}>
                        <TextPickerFile isExistError={isExistError}>
                            {props.boletimFile ? props.boletimFile.name ||  props.boletimFile : 'Insira a imagem ou o PDF do Boletim'}
                        </TextPickerFile>
                            <Feather name="upload" size={20} color={isExistError ? "#DC3545" : "gainsboro"} />
                    </WrapperContentPickerFile>
                </PickerFile>
                <View style={{height:50, marginBottom: 40}}>
                    <Button onPress={props.ButtonPressed}>
                        <ButtonText>
                            Voltar
                        </ButtonText>
                    </Button>

                    <Button onPress={() => {
                            if(!props.boletimFile ? true : !props.boletimFile.name) setIsExistError(true)
                            else {
                                setIsKeyboardOpen(true)
                                props.setShowModal(true)
                            }
                        }   
                        }>
                        <ButtonText>
                            Enviar
                        </ButtonText>
                    </Button>
                </View>
        </InputContainer>
    );
}

export default SecondPage;