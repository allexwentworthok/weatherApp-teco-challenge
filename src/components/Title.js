import React from 'react'
import {Text, StyleSheet } from 'react-native'

export default function Title({ children }) {
    return (<Text style={styles.title} > {children} </Text>)
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#414042',
    }
})