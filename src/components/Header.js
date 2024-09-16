import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import colors from '../assets/colors/colors'

const HeaderIcons = ({ onPress, src }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={src}
                style={[styles.rightIcons]}
                resizeMode='contain' />
        </TouchableOpacity>
    )
}

export default function Header() {

    return (
        <View style={styles.container}>
            <View style={styles.leftBox}>
                <Image source={require("../assets/Logo.png")}
                    style={styles.logo}
                    resizeMode='contain' />
            </View>
            <View
                style={styles.left}>
                <HeaderIcons src={require("../assets/search.png")} onPress={() => console.log("Search")} />
                <HeaderIcons src={require("../assets/messages.png")} onPress={() => console.log("Messages")} />
                <HeaderIcons src={require("../assets/notifications.png")} onPress={() => console.log("Notifications")} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(7),
        backgroundColor: colors.white,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.lightgray,
    },
    leftBox: {
        position: 'absolute',
        left: responsiveWidth(5),
    },
    logo: {
        height: responsiveHeight(4),
        width: responsiveWidth(30),
    },
    left: {
        position: 'absolute',
        right: responsiveWidth(5),
        flexDirection: "row"
    },
    rightIcons: {
        height: responsiveHeight(2.8),
        width: responsiveWidth(10),
    }
})