import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import colors from '../assets/colors/colors'

export default function AppText({ text, style, small = false }) {
    return (
        <Text style={[styles.text, style, { fontSize: responsiveFontSize(small ? 1.7 : 2) }]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        // fontFamily:'Exo-Regular',
        color: colors.black
    }
})