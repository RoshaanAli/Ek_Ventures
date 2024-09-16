import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors/colors'

const Games = () => {
    return (
        <View style={styles.container}>
            <Text style={{color:colors.black}}>Games</Text>
        </View>
    )
}

export default Games

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})