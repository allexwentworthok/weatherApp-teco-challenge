import React from 'react'
import { Button, Icon } from 'react-native-elements'

export default function BackButton({navigation}) {
    return (
        <>
            <Button title="Volver" type="clear" onPress={ ()=> navigation.goBack() } />
        </>
    )
}
