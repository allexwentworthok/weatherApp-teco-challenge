import React from 'react'
import { ActivityIndicator, Text } from 'react-native'
import { Button, Card, Image } from 'react-native-elements'
import { useSelector } from 'react-redux';
import { cardStyles } from '../styles/componentStyles';
import { ENV } from '../core/config/env';

/**
 * Componente de la tarjeta que recibe el argumento de data y navigation
 * Despues renderizo la data y termino utilizando esa misma data para poder llamar mas informacion sobre el clima en esa ciudad
 * Mas precisamente los proximos 8 dias.
 */

const CardToday = ({data, navigation}) => {
    // Al momento de realizar la peticion cambiamos mediante redux la informacion de loading a true
    // cuando este llega, lo ponemos en false. Asi evito problemas.
    const loading = useSelector(state => state.weather.loading);
    return (
            <Card containerStyle={cardStyles.cardSize} >
                {
                    loading === true ?
                        <ActivityIndicator size='large' title="Loading..." style={cardStyles.loading} />
                    : 
                    (<>
                        <Image source={{ uri: `${ ENV.URL_IMG + data.weather[0].icon}.png` }} containerStyle={cardStyles.imageSize} />
                        <Text style={cardStyles.textSize}>{Number(data.main.temp).toFixed(1)}º</Text>
                        <Text style={cardStyles.subTitle}> {data.name} </Text>
                        <Text style={cardStyles.textNormal}> {data.weather[0].description} </Text>
                        <Button title="Ver mas" containerStyle={cardStyles.button} onPress={() => {navigation.navigate('Forecast', {coord:data, city: data.name} )}}/>
                    </>)
                }
                
            </Card>
    )
}

export default CardToday