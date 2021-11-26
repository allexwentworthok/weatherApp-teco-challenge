import React, { useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Card, Image } from 'react-native-elements'

const urlIcon = 'https://openweathermap.org/img/w/01d.png'


export default function CardForecast({ data }) {

    useEffect(() => {
        console.log('CardForecast props: ', data)
    }, [])

    return (
            <Card containerStyle={styles.cardSize} >
                <Image source={{ uri: `${ urlIcon }` }} style={styles.imageSize} />
                <Text style={styles.textSize}>a</Text>
                <Text style={styles.textSize}> a </Text>
                <Text style={styles.textSize}> a </Text>
            </Card>
    )
}

const styles = StyleSheet.create({
    textSize: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center'
    },
    cardSize: {
        width: '80%',
        height: '70%',
        marginLeft: 0,
        backgroundColor: '#fff',
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
        width: '50%',
        height: '70%',
        borderRadius: 24,
    }
})
