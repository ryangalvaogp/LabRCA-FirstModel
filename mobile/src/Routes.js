import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import {Home} from './pages/home/index'
import { Projetos } from './pages/Projetos/index';
import {detailProjetos} from './pages/DetailProjetos/index'
import {detailEventos} from './pages/DetailEventos/index'
import {Eventos} from './pages/Eventos/index'
import {Contatos} from './pages/Contatos/index'
export const Stack = createStackNavigator();

export const Routes = (
    <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Projetos" component={Projetos} />
        <Stack.Screen name="Eventos" component={Eventos} />
        <Stack.Screen name="detailProjetos" component={detailProjetos} />
        <Stack.Screen name="detailEventos" component={detailEventos} />
        <Stack.Screen name="Contatos" component={Contatos} />
        

        
        </Stack.Navigator>
    </NavigationContainer>
);
