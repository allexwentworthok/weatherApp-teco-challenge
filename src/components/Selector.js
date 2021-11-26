import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { useDispatch } from 'react-redux';
import { getWeather } from '../core/config/actions/weatherAction';

const city = {
    'BuenosAires': { lat:-34.6085769030798, long:-58.47543282627552 },
    'España': { lat:40.461657803868405, long:-3.649577661595032 },
    'Londres': { lat:51.537457933288664, long: -0.16186771650325227},
    'Amsterdam': { lat: 52.34303462762227, long: 4.86580992179384 }
}

export default function Selector({ props }) {
    const dispatch = useDispatch()
    const [selectedCity, setSelectedCity] = useState(selectedCity);
    
    useEffect(() => {
        setSelectedCity(selectedCity)
    }, [selectedCity])

    handleSelect = (itemValue, itemIndex) =>{
        setSelectedCity(itemValue)
        dispatch(getWeather({coord: itemValue}))
    }
    return (
        <Picker selectedValue={selectedCity} onValueChange={(itemValue, itemIndex) => handleSelect(itemValue, itemIndex)}>
            <Picker.Item label="Ciudad actual" />
            <Picker.Item label="Amsterdam" value={city.Amsterdam} />
            <Picker.Item label="Buenos Aires" value={city.BuenosAires} />
            <Picker.Item label="España" value={city.España} />
            <Picker.Item label="Londres" value={city.Londres} />
        </Picker>
    )
}
