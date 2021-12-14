import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../../core/config/actions/weatherAction';
import { homeStyles } from './styles' 
import Geolocation from '@react-native-community/geolocation';
import CardToday from '../../components/CardToday'
import Selector from '../../components/Selector'
import Layout from '../../components/Layout'
import Title from '../../components/Title'

const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const weather  = useSelector(state => state.weather.weatherState);
    
    useEffect(() => { GetPosition() }, []);

    const GetPosition = () => {
        Geolocation.getCurrentPosition((x) => { 
            dispatch(getWeather({coord: {lat: x.coords.latitude, long: x.coords.longitude}}))},
            (e) => {GetPosition()},
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )
    }

    return (
        <View><Layout>
                    <View style={homeStyles.containerCard} >
                        <View style={homeStyles.title} >
                            <Title>Ale's</Title>
                            <Title>Weather App</Title>
                            <CardToday data={weather} {...props} />
                        </View>
                    </View>
            </Layout>
            <View style={{flex:2}} ><Selector data={weather} /></View>
        </View>
        
    )
}

export default HomeScreen;
