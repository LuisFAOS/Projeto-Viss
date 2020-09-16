import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    global_container:{
      backgroundColor: 'black',
      width: '100%',
      height: '100%',
    },
    inputs_container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input_box: {
      width: '80%',
      marginHorizontal: '10%',
      marginBottom:20
    },
    input: {
        height: 40,
        borderRadius: 10,
        padding: 5,
        backgroundColor: 'white',
    },
    label:{
      fontSize: 23,
      marginBottom: 5,
      color: 'white',
    },

    logo:{
      width: '55%',
      height: 240,
      marginHorizontal: '22.5%',
      marginTop: 60,
      marginBottom:40,
    },

    button:{
      backgroundColor:'#41BD1B',
      width: '60%',
      marginHorizontal: '20%',
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:20
    },

    button_text:{
      color: 'white',
      fontSize: 22
    },

    func_labels: {
      alignSelf: 'flex-start', 
      alignItems: 'center', 
      width:'100%' , 
      marginTop: 20
    },

    func_label:{color: 'white', fontSize: 20, marginTop: 10}

    

  });
  