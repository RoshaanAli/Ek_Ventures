import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import Video from 'react-native-video'

const VideoPreviewItem = ({ onPress, data }) => {
  const { item } = data
  return (
    <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
      <Video
        source={{ uri: item?.urls?.mp4 }}
        paused={true}
        style={styles.bannerStyle}
        resizeMode='cover'
        selectedVideoTrack={{ type: 'resolution', value: 480 }}
      />
    </TouchableOpacity>
  )
}

export default VideoPreviewItem

const styles = StyleSheet.create({
  imageContainer: {
    height: responsiveHeight(40),
    width: responsiveHeight(25),
    borderRadius: responsiveHeight(2),
    overflow: "hidden",
    marginRight: responsiveHeight(1),
    marginTop: responsiveHeight(1),
  },
  bannerStyle: {
    height: responsiveHeight(40),
    width: responsiveHeight(25),
  }
})