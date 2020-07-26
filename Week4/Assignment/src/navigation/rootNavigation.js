import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Complete from '../screen/complete'
import All from '../screen/all'
import Detail from '../screen/detail'
import Active from '../screen/active'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTab from './component'

const CompleteTab = createStackNavigator();
function CompleteStack() {
    return (
        <CompleteTab.Navigator headerMode="none">
            <CompleteTab.Screen name="Complete" component={Complete} />
        </CompleteTab.Navigator>
    );
}

const AllTab = createStackNavigator();
function AllStack() {
    return (
        <AllTab.Navigator headerMode="none">
            <AllTab.Screen name="All" component={All} />
            <AllTab.Screen name="Detail" component={Detail} />
        </AllTab.Navigator>
    );
}

const ActiveTab = createStackNavigator();
function ActiveStack() {
    return (
        <ActiveTab.Navigator headerMode="none">
            <ActiveTab.Screen name="Active" component={Active} />
        </ActiveTab.Navigator>
    );
}

const App = createBottomTabNavigator();
export default function ApplicationStack() {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <App.Navigator
                    initialRouteName="Home"
                    tabBar={props => <CustomTab {...props} />}
                >
                    <App.Screen name="Complete" component={CompleteStack} />
                    <App.Screen name="All" component={AllStack} />
                    <App.Screen name="Active" component={ActiveStack} />
                </App.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    )
}