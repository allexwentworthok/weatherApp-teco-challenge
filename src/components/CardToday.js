import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { Button, Card, Image } from 'react-native-elements'
import { useSelector } from 'react-redux';
import { convertDatetime } from '../core/helpers/helper';


/**
 * metodo navigation.getParam() busca por la key en este caso de ejemplo usaba la "a"
 * 
 */

const CardToday = ({data, navigation}) => {

    const loading = useSelector(state => state.weather.loading);

    return (
            <Card containerStyle={styles.cardSize} >
                {
                    loading === true ?
                        <ActivityIndicator size='large' title="Loading..." style={styles.loading} />
                    : 
                    (<>
                        <Image source={{ uri: `https://openweathermap.org/img/w/${data.weather[0].icon}.png` }} containerStyle={styles.imageSize} />
                        <Text style={styles.textSize}>{Number(data.main.temp).toFixed(1)}º</Text>
                        <Text style={styles.subTitle}> {data.name} </Text>
                        <Text style={styles.textNormal}> {data.weather[0].description} </Text>
                        <Button title="Ver mas" containerStyle={styles.button} onPress={() => {navigation.navigate('Forecast', {coord:data, city: data.name} )}}/>
                    </>)
                }
                
            </Card>
    )
}

const styles = StyleSheet.create({
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


export default CardToday