import { StyleSheet } from "react-native";

export const titleStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#414042',
    }
})

export const cardStyles = StyleSheet.create({
    loading:{
        textAlign:'center',
        marginButton:'40%'
    },
    button: {
        marginTop: 24,
        borderRadius: 12,
    },
    textSize: {
        marginBottom: 12,
        fontSize: 40,
        color: '#000',
        textAlign: 'center'
    },
    textNormal: {
        marginLeft:-6,
        marginTop: 2,
        fontSize: 20,
        color: '#f0d9a9',
        textAlign:'center'
    },
    subTitle: {
        marginLeft:-6,
        marginTop: -12,
        fontSize: 30,
        color: '#f0d9a9',
        textAlign:'center'
    },
    cardSize: {
        justifyContent:'center',
        width: 260,
        height: 450,
        borderRadius: 24,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageSize: {
        marginBottom:'-20%',
        marginHorizontal:'15%',
        width: '68%',
        height: '60%',
        borderRadius: 24,
    }
})