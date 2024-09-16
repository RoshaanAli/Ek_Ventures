import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const VideoPreviewItem = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
       <Image style={styles.imagStyle} source={require('../assets/dummyimg.png')} />
    </TouchableOpacity>
  )
}

export default VideoPreviewItem

const styles = StyleSheet.create({
    imageContainer: {
        height: responsiveHeight(40),
        width: responsiveHeight(25),
        // backgroundColor:"red",
        borderRadius: responsiveHeight(2),
        overflow:"hidden",
        marginRight: responsiveHeight(1),
        marginTop: responsiveHeight(1),
    },
    imagStyle: {
        height: responsiveHeight(40),
        width: responsiveHeight(25),
    }
})