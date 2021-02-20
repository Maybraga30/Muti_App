import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {LixoEletronico} from '../views';
import Inicio from './Inicio';

const routeStack = createStackNavigator()

const Elet = () => {
    
    return (
        <routeStack.Navigator 
            initialRouteName="GuiaLixo"  
            tabBarOptions={{
                activeTintColor:'#f4d010',
                inactiveTintColor: '#041e50',
                labelStyle: {fontSize: 25, marginBottom: 10}
            }}
    >
            <routeStack.Screen name="Lixo Eletrônico" component={LixoEletronico}/>
            <routeStack.Screen name="Inicio" component={Inicio}/>
           
        </routeStack.Navigator>
    )
}

export default Elet;