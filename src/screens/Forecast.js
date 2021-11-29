import React, { useEffect } from 'react'
import { Alert, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import BackButton from '../components/BackButton';
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
            <View style={{alignItems:'center'}} >
                <Title>{name}</Title>
                <BackButton {...props}/>
            </View>
            <ScrollView centerContent={true} style={styles.scroll} >
            {
                loading === true ? 
                <ActivityIndicator size="large" />
                :
                <View style={{justifyContent: 'center'}}>
                    {
                        weather.daily.map((x,i) => (
                                <ListItem key={i} bottomDivider containerStyle={styles.listItem} >
                                    <Avatar source={{ uri: `https://openweathermap.org/img/w/${x.weather[0].icon}.png` }} />
                                    <ListItem.Content>
                                    <ListItem.Title>{convertDatetime(x.dt)}</ListItem.Title>
                                    <ListItem.Subtitle>Maxima: {Number(x.temp.max).toFixed(1)}º</ListItem.Subtitle>
                                    <ListItem.Subtitle>Minima: {Number(x.temp.min).toFixed(1)}º</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
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

export default Forecast;
