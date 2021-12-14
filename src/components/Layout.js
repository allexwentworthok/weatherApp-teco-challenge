import React from 'react'
import { StyleSheet, KeyboardAvoidingView, View, useWindowDimensions } from 'react-native'


export default function Layout({ children }) {
const { width, height } = useWindowDimensions();
    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: width * 0.05,
            paddingTop: height / 12,
            maxWidth: '95%',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
    return ( <KeyboardAvoidingView style={styles.container} behavior="padding">{children}</KeyboardAvoidingView>)
}

