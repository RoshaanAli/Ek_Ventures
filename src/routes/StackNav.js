import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Header from '../components/Header';



function StackNav() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="home"
            screenOptions={() => ({
                header: (props) => <Header {...props} />,
            })}
        >
            <Stack.Screen
                name="home"
                component={Home}
            />
        </Stack.Navigator>
    )
}

export default StackNav

const styles = StyleSheet.create({})