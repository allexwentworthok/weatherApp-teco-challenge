import { StyleSheet } from "react-native"
// Styles de el screen de Forecast.js
export const forecastStyles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        maxHeight: 720,
        marginTop:100,
        
    },
    scroll: {
        marginTop:'5%',
        height: '100%'
    },
    listItem:{
        borderRadius:18,
        marginHorizontal:12,
        marginBottom:12
    }
})