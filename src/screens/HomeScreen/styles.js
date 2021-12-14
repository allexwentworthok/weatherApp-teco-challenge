import { StyleSheet } from "react-native"

// Styles de el screen HomeScreen.js
export const homeStyles = StyleSheet.create({
    loading:{
        flex:1,
        textAlign:'center',
        marginButton:'40%'
    },
    title: {
        alignItems:'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
    containerCard: {
        marginLeft: '15%',
        marginRight: '10%',
        marginHorizontal: '10%',
        marginTop:12,
    }
})