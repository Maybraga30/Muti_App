import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



import Home from '../views/Home';
import GuiaLixo from '../views/GuiaLixo';


const routeTab = createBottomTabNavigator()

const Inicio = () => {
    return (
        <routeTab.Navigator 
    
            initialRouteName='Home'
            tabBarOptions={{
                activeTintColor:'#f4d010',
                inactiveTintColor: '#041e50',
                labelStyle: {fontSize: 25, marginBottom: 10}
            }}
        >
            <routeTab.Screen name="Home" component={Home}/>
            <routeTab.Screen name="GuiaLixo" component={GuiaLixo}/>
        </routeTab.Navigator>
    )
}

export default Inicio;