import React from 'react'
import {Text } from 'react-native'
import { titleStyles } from '../styles/componentStyles'

export default function Title({ children }) {
    return (<Text style={titleStyles.title} > {children} </Text>)
}

