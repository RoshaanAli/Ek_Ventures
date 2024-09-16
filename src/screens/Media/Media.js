// @ts-nocheck
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Dimensions, Image, FlatList, ActivityIndicator, AppState, Share, Alert, Platform } from 'react-native'
import React, { useState, useRef, useMemo, useCallback, useLayoutEffect, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux';
import { responsiveWidth, responsiveFontSize, responsiveScreenFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import Video from 'react-native-video';
import numeral from "numeral"
import { useFocusEffect } from '@react-navigation/native';
import KeepAwake from 'react-native-keep-awake';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from "react-native-vector-icons/Octicons"
import colors from '../../assets/colors/colors';
import AppText from '../../components/AppText';
import Loader from '../../components/Loader';

function RenderMediaItem({
  index,
  item,
  current,
  flatLayout,
}) {
  const [loading, setLoading] = useState(false)
  const [above, onChangeAbove] = useState(false)
  const [pause, onSetPause] = useState(false);
  const mediaPlayerRef = useRef(null);

  const play_pause = () => {
    if (pause) {
      onSetPause(false);
    } else {
      onSetPause(true);
    }
  };

  useEffect(() => {
    if (item._id == current._id) {
      const subscription = AppState.addEventListener('change', nextAppState => {
        if (nextAppState === "background") {
          onSetPause(true)
        }
      });
      return () => {
        subscription.remove();
      };
    }
  }, [current]);

  const playerMemo = useMemo(() => {
    return (
      <>
        <TouchableOpacity
          disabled={!(item.id == current?.id)}
          activeOpacity={1}
          onPress={() => {
            if (item?.id == current?.id) {
              onSetPause(!pause)
            }
          }}
          style={{ alignItems: 'center', flex: 1, width: '100%', zIndex: 1 }}>
          {(pause && (item.id == current.id)) ? (
            <View style={{
              ...styles.videoPlay,
              top: (item?.orientation == undefined || item?.orientation != 'portrait') && above ? (Dimensions.get('window').width / (16 / 9)) / 2 : (flatLayout.height / 2) - responsiveWidth(15 / 2)
            }}>
              <TouchableOpacity onPress={play_pause} style={styles.touchPlayPause}>
                <FontAwesome
                  name={pause ? 'play' : 'pause'}
                  size={responsiveScreenFontSize(3)}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>
          ) : null}
          {loading && (
            <View style={{
              ...styles.videoPlay,
              top: (item?.orientation == undefined || item?.orientation != 'portrait') && above ? (flatLayout.height / 2) - responsiveWidth((15 + 56.25)) : (flatLayout.height / 2) - responsiveWidth(15 / 2)
            }}>
              <Loader color={"white"} />
            </View>
          )}
          {(item.index == current.index || item.index == current.index - 1 || item.index == current.index + 1) ? (
            <Video
              source={{ uri: item.urls.mp4 }}
              ignoreSilentSwitch="ignore"
              paused={(item.index == current?.index) ? pause : true}
              ref={mediaPlayerRef}
              style={[{
                width: '100%'
              },
              (item?.orientation == undefined || item?.orientation != 'portrait') && above ? { height: Dimensions.get('window').width / (16 / 9) } : { flex: 1 }
              ]}
              repeat
              playInBackground={false}
              bufferConfig={{
                minBufferMs: 2000,
                maxBufferMs: 3000,
                bufferForPlaybackMs: 1000,
                bufferForPlaybackAfterRebufferMs: 2000
              }}
              onBuffer={() => setLoading(true)}
              onProgress={() => setLoading(false)}
              posterResizeMode={(item?.orientation == undefined || item?.orientation != 'portrait') ? "contain" : "cover"}
              currentPlaybackTime={500}
              resizeMode={(item?.orientation == undefined || item?.orientation != 'portrait') ? "contain" : "cover"}
              trackId
              selectedVideoTrack={{ type: 'resolution', value: 720 }}
              automaticallyWaitsToMinimizeStalling={false}
            />
          ) : (
            <View style={{ width: '100%', flex: 1, backgroundColor: 'black' }} />
          )}

        </TouchableOpacity>
        {
          (item?.orientation == undefined || item?.orientation != 'portrait') && above &&
          <View style={{ height: flatLayout.height - Dimensions.get('window').width / (16 / 9) }} />
        }
      </>
    )
  }, [item, pause, current, above, flatLayout, loading])

  return (
    <View key={index} style={{
      width: responsiveWidth(100),
      height: flatLayout.height,
    }}>
      {playerMemo}
      <TouchableOpacity style={styles.floatButton} onPress={() => { }} >
        <Entypo
          name={'heart'}
          size={responsiveScreenFontSize(3.5)}
          color={colors.heartRed}
        />
        <Text style={{ color: 'white' }}>{numeral(!item?.likes_count ? 0 : item?.likes_count).format('0a')?.replace(/([0-9\.]+)([kmb])/i, '$1 $2')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.floatButton, { bottom: responsiveHeight(10) }]} onPress={() => { }} >
        <Image source={require("../../assets/comments.png")}
          style={styles.floatbtnImage}
          resizeMode='contain' />
        <Text style={{ color: 'white' }}>{numeral(!item?.comments_count ? 0 : item?.comments_count).format('0a')?.replace(/([0-9\.]+)([kmb])/i, '$1 $2')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.floatButton, { bottom: responsiveHeight(2) }]} onPress={() => { }} >
        <MaterialCommunityIcons
          name={'dots-horizontal'}
          size={responsiveScreenFontSize(3.25)}
          color="white"
        />
      </TouchableOpacity>

      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        width: "100%",
        position: 'absolute',
        zIndex: 2,
        top: responsiveHeight(5) + 5 + (Platform.OS == "ios" ? getStatusBarHeight() : 0),
        paddingHorizontal: "2%",
      }}>
        <AppText text={"Media"} style={{ color: "white", }} />
        <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} style={{
        }}
          onPress={() => { console.log("Camera") }}
        >
          <Image source={require("../../assets/media_icon.png")}
            style={styles.logo}
            resizeMode='contain' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

function Media({
  route,
  navigation,
  videosRed
}) {
  const [current, setCurrent] = useState({});
  const [flatLayout, setFlatLayout] = useState({ width: 0, height: 0 })

  const flatRef = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [navigation])

  const onChangeItem = useCallback(({ viewableItems, changed }) => {
    if (viewableItems[0]?.item) {
      setCurrent({ ...viewableItems[0]?.item, index: viewableItems[0]?.index });
    }
  }, []);

  const getItemLayout = (data, index) => {
    return {
      length: flatLayout.height,
      offset: flatLayout.height * index,
      index,
    };
  };

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: "BLACK" })
    return () => dispatch({ type: "WHITE" })
  }, [])

  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems: 'center',

    }}>
      <StatusBar
        backgroundColor='black'
        barStyle={'light-content'}
      />
      <View
        onLayout={(e) => {
          setFlatLayout(e.nativeEvent.layout)
        }}
        style={{ flex: 1, width: responsiveWidth(100), justifyContent: 'center', }}>
        {
          flatLayout.height ? (
            <FlatList
              data={videosRed}
              scrollEnabled
              initialScrollIndex={route?.params?.setCurrent?.index}
              getItemLayout={getItemLayout}
              style={{ flex: 1 }}
              contentContainerStyle={{ flexGrow: 1, backgroundColor: "black" }}
              onViewableItemsChanged={onChangeItem}
              viewabilityConfig={{
                itemVisiblePercentThreshold: 50,
              }}
              pagingEnabled={true}
              renderItem={({ item, index }) => (
                <RenderMediaItem
                  current={current}
                  index={index}
                  item={{ ...item, index }}
                  flatLayout={flatLayout}
                  flatRef={flatRef}
                />
              )}
              showsVerticalScrollIndicator={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : null
        }
      </View>
      <KeepAwake />
    </View>
  )


}
const styles = StyleSheet.create({
  videoPlay: {
    height: responsiveWidth(15),
    width: responsiveWidth(15),
    opacity: 0.8,
    borderRadius: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    top: responsiveFontSize(45.5),
    position: 'absolute',
    zIndex: 99,
  },
  touchPlayPause: {
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveWidth(15),
    width: responsiveWidth(15),
    backgroundColor: colors.btnBlue,
    borderRadius: responsiveFontSize(50)
  },
  floatButton: {
    width: responsiveHeight(6.5),
    height: responsiveHeight(6.5),
    position: "absolute",
    borderRadius: responsiveScreenFontSize(50),
    justifyContent: "center",
    alignItems: "center",
    right: "2%",
    bottom: responsiveHeight(18),
    justifyContent: 'center',
    zIndex: 1

  },
  logo: {
    height: responsiveHeight(2),
    width: responsiveWidth(10),
  },
  floatbtnImage: {
    height: responsiveHeight(3),
    width: responsiveWidth(10),
  }
});


function mapStateToProps({ videosRed }) {
  return { videosRed }
}

export default connect(mapStateToProps, null)(Media)
