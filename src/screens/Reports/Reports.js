import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../assets/colors/colors'

const Reports = () => {
    return (
        <View style={styles.container}>
            <Text style={{color:colors.black}}>Reports</Text>
        </View>
    )
}

export default Reports

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})