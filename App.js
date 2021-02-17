import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login,AboutUs,Profile, Mutira} from './views';


export default function App() {

  const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title:"Bem Vindos", 
            headerStyle:{backgroundColor:"#F58634"},
            headerTintColor: '#333',
            headerTitleStyle:{fontWeight: 'bold', alignSelf:'center'}
          }} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="AboutUs" component={AboutUs} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Mutira" component={Mutira} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }