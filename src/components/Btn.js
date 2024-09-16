import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import colors from '../assets/colors/colors'

const Btn = ({ text, onPress, containerStyle, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
            <Image resizeMode='contain' style={styles.cameraIcon} source={require('../assets/camera.png')} />
            <Text style={[styles.textStyle,textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Btn

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(5),
        width: "100%",
        backgroundColor: colors.btnBlue,
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "center",
        borderRadius: responsiveHeight(1),
        marginTop: responsiveHeight(2)
    },
    textStyle: {
        color: colors.white,
        fontSize: responsiveFontSize(1.8),
        marginLeft: responsiveHeight(1)
    },
    cameraIcon: {
        height: responsiveHeight(2),
        width: responsiveHeight(3),
    }
})