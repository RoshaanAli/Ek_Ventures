import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors/colors'

const Account = () => {
    return (
        <View style={styles.container}>
            <Text style={{color:colors.black}}>Account</Text>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})