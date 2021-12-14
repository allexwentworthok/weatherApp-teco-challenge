import React, { useEffect } from 'react'
import { Alert, View, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, ListItem } from 'react-native-elements';
import { convertDatetime } from '../../core/helpers/helper';
import { forecastStyles } from './styles'; 
import { getForecast } from '../../core/config/actions/forecastAction';
import { ScrollView } from 'react-native-gesture-handler';
import { ENV } from '../../core/config/env';
import BackButton from '../../components/BackButton';
import Title from '../../components/Title';

const Forecast = (props) => {
    const dispatch = useDispatch()
    const {coord, name} = props.navigation.getParam('coord');
    const weather  = useSelector(state => state.forecast.forecastState)
    const loading  = useSelector(state => state.forecast.loading)

    useEffect(() => { getData() }, [])
    const getData = () => { try{dispatch(getForecast({coord: { lat:coord.lat, long: coord.lon } }))}
        catch{ Alert('No pudimos cargar la información')}
    }

    return (
        <View style={forecastStyles.container}>
            <View style={{alignItems:'center'}} >
                <Title>{name}</Title>
                <BackButton {...props}/>
            </View>
            <ScrollView centerContent={true} style={forecastStyles.scroll} >
            {
                loading === true ? 
                <ActivityIndicator size="large" />
                :
                <View style={{justifyContent: 'center'}}>
                    {
                        weather.daily.map((x,i) => (
                                <ListItem key={i} bottomDivider containerStyle={forecastStyles.listItem} >
                                    <Avatar source={{ uri: `${ ENV.URL_IMG + x.weather[0].icon}.png` }} />
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

export default Forecast;
