/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
    LogBox,
    View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import TabsNav from './routes/TabsNav';
import { Provider } from 'react-redux';
import { store } from './store/index'

export default function App() {

    useEffect(() => {
        SplashScreen.hide();
    }, [])
    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
      ]);

    return (
        <Provider store={store}>
            <NavigationContainer>
                <View style={{ flex: 1, backgroundColor: "white" }}>
                    <TabsNav />
                </View>
            </NavigationContainer>
        </Provider>
    );
}