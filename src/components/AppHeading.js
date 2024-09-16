import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import colors from '../assets/colors/colors'

export default function AppHeading({ text, style }) {
    return (
        <Text style={[styles.heading, style]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        fontFamily: 'Exo-Bold',
        includeFontPadding: false,
        textAlign: 'left',
        color: colors.black
    }
})