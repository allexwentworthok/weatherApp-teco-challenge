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
    const loading = useSelector(state => state.weather.loading);

    useEffect(() => { GetPosition() }, []);

    GetPosition = () => {
        try { Geolocation.getCurrentPosition((x) => { dispatch(getWeather({coord: {lat: x.coords.latitude, long: x.coords.longitude}}))},(error) => Alert(error))} 
        catch(error) {Alert(error)}
    }

    return (
        <>
            <Layout>
                {
                    loading === true ?
                    <Button title="Loading..." style={styles.loading} />
                    :
                    <View style={styles.containerCard} >
                        <View style={styles.title} >
                            <Title>Good</Title>
                            <Title>Morning</Title>
                        </View>
                        <CardToday data={weather} {...props} />
                    </View>
                }
                
            </Layout>
            <Selector />
        </>
        
    )
}

const styles = StyleSheet.create({
    loading:{
        marginTop:'40%'
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
