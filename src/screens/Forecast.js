import React, { useEffect, useState } from 'react'
import { Alert, Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Avatar, Button, Icon, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import BackButton from '../components/BackButton';
import Layout from '../components/Layout';
import Title from '../components/Title';
import { getForecast } from '../core/config/actions/forecastAction';
import { convertDatetime } from '../core/helpers/helper';

/**
 * metodo navigation.getParam() busca por la key en este caso de ejemplo usaba la "a"
 * 
 */

const Forecast = (props) => {
    const dispatch = useDispatch()
    const {coord} = props.navigation.getParam('coord');
    const {name} = props.navigation.getParam('coord');
    const weather  = useSelector(state => state.forecast.forecastState)
    const loading  = useSelector(state => state.forecast.loading)

    useEffect(() => { getData() }, [])
    const getData = () => {
        try{dispatch(getForecast({coord: { lat:coord.lat, long: coord.lon } }))}
        catch{ Alert('No pudimos cargar la información')}
    }



    return (
        <View style={styles.container}>
            <View>
                <Title> {name}</Title>
                <BackButton {...props}/>
            </View>
            <ScrollView centerContent={true} style={styles.scroll} >
            {
                loading === true ? 
                <ActivityIndicator size="large" />
                :
                <View>
                    {
                        weather.daily.map((x,i) => (
                            <View style={{justifyContent: 'center', marginBottom:12}} >
                                <ListItem key={i} bottomDivider containerStyle={styles.listItem} >
                                <Avatar source={{ uri: `https://openweathermap.org/img/w/${x.weather[0].icon}.png` }} />
                                    <ListItem.Content>
                                    <ListItem.Title>{convertDatetime(x.dt)}</ListItem.Title>
                                    <ListItem.Subtitle>Maxima: {Number(x.temp.max).toFixed(1)}º</ListItem.Subtitle>
                                    <ListItem.Subtitle>Minima: {Number(x.temp.min).toFixed(1)}º</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                            </View>
                        ) )
                    }
                </View>
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        maxHeight: 720,
        marginTop:100
    },
    scroll: {
        marginTop:'5%',
        height: '100%'
    },
    listItem:{
        borderRadius:18,
        marginHorizontal:12
    }
})

export default Forecast;
