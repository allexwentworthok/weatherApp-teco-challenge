import React, { useEffect } from 'react'
import { Alert, Text, View } from 'react-native'
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { getForecast } from '../core/config/actions/forecastAction';

/**
 * metodo navigation.getParam() busca por la key en este caso de ejemplo usaba la "a"
 * 
 */

const Forecast = (props) => {
    const dispatch = useDispatch()
    const {coord} = props.navigation.getParam('coord');
    const weather  = useSelector(state => state.forecast.forecastState)
    const loading  = useSelector(state => state.forecast.loading)

    useEffect(() => { getData() }, [])

    const getData = () => {
        try{ dispatch(getForecast({coord: { lat:coord.lat, long: coord.lon } }))}
        catch{ Alert('No pudimos cargar la información')}
    }

    return (
        <View style={{ marginTop:120 }}>+
            {
                loading === true  ? <Button title="Cargando" />
                : <Text>Hola</Text>
            }
        </View>
    )
}
export default Forecast;