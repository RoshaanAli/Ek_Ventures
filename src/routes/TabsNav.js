import * as React from 'react';
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { useSelector } from 'react-redux';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors/colors';
import Media from '../screens/Media/Media';
import Games from '../screens/Games/Games';
import Reports from '../screens/Reports/Reports';
import Account from '../screens/Account/Account';
import StackNav from './StackNav';


const Tab = createBottomTabNavigator();

const CustomTabBarButton = (props) => {
    return (
        <TouchableOpacity
            style={[styles.customTabBarButton, { backgroundColor: props.color.bgColor }]}
            onPress={props.onPress}
        >
            {props.accessibilityState.selected && <View style={styles.boldLine} />}
            {props.children}
        </TouchableOpacity>
    );
};


export default function TabsNav() {
    const tabColor = useSelector(state => state.tabbarRed)
    return (
        <View style={{flex:1,backgroundColor:tabColor.bgColor}}>
            <SafeAreaView style={{flex:1}}>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let icon;

                            if (route.name === 'Home') {
                                icon = focused ? <MaterialIcons name={"home-filled"} size={size} color={colors.btnBlue} /> : <Octicons name={"home"} size={size} color={color} />;
                            }
                            else if (route.name === 'Media') {
                                icon = <Ionicons name={focused ? "play" : "play-outline"} size={size} color={focused ? colors.btnBlue : color} />;
                            }
                            else if (route.name === 'Games') {
                                icon = <Image resizeMode='contain' style={{ width: "30%", tintColor: tabColor.bgColor == "black" ? "gray" : "gray" }} source={require('../assets/games.png')} />;
                            }
                            else if (route.name === 'Reports') {
                                icon = <Image resizeMode='contain' style={{ width: "40%", tintColor: tabColor.bgColor == "black" ? "gray" : "gray" }} source={require('../assets/stats.png')} />;
                            }
                            else if (route.name === 'Account') {
                                icon = <Image resizeMode='contain' style={{ width: "40%", }} source={require('../assets/avatar.png')} />;
                            }
                            return icon
                        },
                        tabBarStyle: {
                            backgroundColor: '#f8f8f8',
                            borderTopWidth: 0,
                            elevation: 0,
                            height: responsiveHeight(6.5)
                        },
                        tabBarActiveTintColor: colors.btnBlue,
                        tabBarInactiveTintColor: 'gray',
                        tabBarLabelStyle: {
                            fontSize: responsiveFontSize(1.4),
                        },
                        headerShown: false,
                        unmountOnBlur: true,
                        tabBarButton: (props) => <CustomTabBarButton {...props} color={tabColor} />,
                    })}
                    initialRouteName="Home"
                >
                    <Tab.Screen name="Home" component={StackNav} />
                    <Tab.Screen name="Media" component={Media} />
                    <Tab.Screen name="Games" component={Games} />
                    <Tab.Screen name="Reports" component={Reports} />
                    <Tab.Screen name="Account" component={Account} />
                </Tab.Navigator>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    customTabBarButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "20%",
        // backgroundColor: colors.white,
    },
    boldLine: {
        backgroundColor: colors.btnBlue,
        width: "60%",
        height: responsiveHeight(0.5),
        borderBottomRightRadius: responsiveFontSize(2),
        borderBottomLeftRadius: responsiveFontSize(2),
    }
});