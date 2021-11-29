import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Button, View} from 'react-native'
import Layout from '../components/Layout'
import Title from '../components/Title'
import CardToday from '../components/CardToday'
import Geolocation from '@react-native-community/geolocation';
import { getWeather } from '../core/config/actions/weatherAction';
import { Alert } from 'react-native';
import Selector from '../components/Selector'

const HomeScreen = (props) => {
    const dispatch = useDispatch();
    const weather  = useSelector(state => state.weather.weatherState);

    useEffect(() => { GetPosition() }, []);

    const GetPosition = async () => {
        try {
            Geolocation.getCurrentPosition((x) => { 
            dispatch(getWeather({coord: {lat: x.coords.latitude, long: x.coords.longitude}}))},
            (error) => {Alert.alert('No pudimos acceder a tu ubicación')},
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )} 
        catch(error) {Alert(error)}
    }

    return (
        <View>
            <Layout>
                    <View style={styles.containerCard} >
                        <View style={styles.title} >
                            <Title>Ale's</Title>
                            <Title>Weather App</Title>
                            <CardToday data={weather} {...props} />
                        </View>
                    </View>
            </Layout>
            <View style={{flex:2}} >
                <Selector />
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
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

export default HomeScreen;
