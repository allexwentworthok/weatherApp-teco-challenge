import React, { useEffect } from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import { Button, Card, Image } from 'react-native-elements'



// TODO:containerStyle en el Image

export default function CardToday({ data, navigation }) {
    

    return (
            <Card containerStyle={styles.cardSize} >
                <Image source={{ uri: `https://openweathermap.org/img/w/${data.weather[0].icon}.png` }} style={styles.imageSize} />
                <Text style={styles.textSize}>{data.main.temp}º</Text>
                <Text style={styles.subTitle}> {data.name} </Text>
                <Text style={styles.textNormal}> {data.weather[0].main} </Text>
                <Button title="Ver mas" containerStyle={styles.button} onPress={()=> navigation.navigate('Forecast',data.coord)} />
            </Card>
    )
}

const styles = StyleSheet.create({
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
        width: '50%',
        height: '60%',
        borderRadius: 24,
    }
})


