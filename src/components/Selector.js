import React, { useRef, useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { useDispatch } from 'react-redux';
import { getWeather } from '../core/config/actions/weatherAction';

const city = [
    {key: 1, label: 'BuenosAires', value: { lat:-34.6085769030798, long:-58.47543282627552}},
    {key: 2, label: 'España', value: { lat:40.461657803868405, long:-3.649577661595032 }},
    {key: 3, label: 'Londres', value: { lat:51.537457933288664, long: -0.16186771650325227}},
    {key: 4, label: 'Amsterdam', value: { lat: 52.34303462762227, long: 4.86580992179384 }},
]

function Selector( props ) {
    const dispatch = useDispatch()
    const [selectedCity, setSelectedCity] = useState(selectedCity);
    const pickerRef = useRef(selectedCity);

    const handleSelect = (itemValue) => { 
        setSelectedCity(itemValue),
        dispatch(getWeather({coord: itemValue}))
    }

    return (
        <Picker ref={pickerRef} mode='dropdown' selectedValue={selectedCity} onValueChange={(itemValue) => handleSelect(itemValue)}>
            <Picker.Item key="" label="Ciudad actual"  />
            {
                city.map(x =>{  
                    return <Picker.Item key={x.key} label={x.label} value={x.value} />
                })
            }
        </Picker>
    )
}
export default Selector

