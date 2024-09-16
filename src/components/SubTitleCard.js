import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import AppText from './AppText'
import colors from '../assets/colors/colors'

const SubTitleCard = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.leftBox}>
                <Image style={styles.imgHeart} source={require('../assets/heart.png')} />
            </View>
            <View style={styles.centerBox}>
                <AppText text="Large font title" />
                <View style={styles.subTitleCont}>
                    <AppText small={true} text="Sub-title" style={{}} />
                    <Image resizeMode='contain' style={styles.diamondImg} source={require('../assets/diamonds.png')} />
                </View>
            </View>
            <View style={styles.rightBox}>
                <Image resizeMode='contain' tintColor={'#000'} style={styles.imgArrow} source={require('../assets/arrowright.png')} />
            </View>
        </TouchableOpacity>
    )
}

export default SubTitleCard

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: responsiveHeight(9),
        borderRadius: responsiveFontSize(2),
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 20,
    },
    leftBox: {
        width: '20%',
        backgroundColor: colors.green,
        opacity: 0.9,
        alignItems: "center",
        justifyContent: "center"
    },
    centerBox: {
        width: '70%',
        backgroundColor: "rgba(249, 186, 5, 0.08)",
        alignItems: "center",
        justifyContent: "center"
    },
    rightBox: {
        width: '10%',
        backgroundColor: "rgba(249, 186, 5, 0.08)",
        alignItems: "center",
        justifyContent: "center",
    },
    subTitleCont: {
        flexDirection: "row",
        marginTop: responsiveHeight(0.5),
        width: "40%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    imgHeart: {
        height: responsiveHeight(3),
        width: responsiveHeight(4)
    },
    imgArrow: {
        height: responsiveHeight(2),
        width: responsiveHeight(1),
    },
    diamondImg: {
        height: responsiveHeight(2.5),
        width: responsiveHeight(5),
    }
})