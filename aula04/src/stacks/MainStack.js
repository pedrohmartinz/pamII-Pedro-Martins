import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Inicio from '../screens/Inicio';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator initialRouteName="Inicio"  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Inicio" component={Inicio} />
       
    </Stack.Navigator>

);