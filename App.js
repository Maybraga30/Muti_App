import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { styles } from "./assets/CSS/Css";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login,AboutUs,Profile, Mutira, SignUp} from './views';


export default function App() {

  const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title:"Mutiraê", 
            headerStyle:{backgroundColor:"#5867F0"},
            headerTintColor: '#FFF',
            headerTitleStyle:{fontWeight: 'bold', alignSelf:'center'}
          }} />
          <Stack.Screen name="Login"  component={Login} options={{
            title:"Login", 
            headerStyle:{backgroundColor:"#5867F0"},
            headerTintColor: '#FFF',
            headerTitleStyle:{fontWeight: 'bold', alignSelf:'center'}
          }} />
          <Stack.Screen name="AboutUs" component={AboutUs} options={{
            title:"Sobre Nós", 
            headerStyle:{backgroundColor:"#5867F0"},
            headerTintColor: '#FFF',
            headerTitleStyle:{fontWeight: 'bold', alignSelf:'center'}
          }} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Mutira" component={Mutira} options={{
            title:"Bem Vindos", 
            headerStyle:{backgroundColor:"#5867F0"},
            headerTintColor: '#FFF',
            headerTitleStyle:{fontWeight: 'bold', alignSelf:'center'}
          }} />
          <Stack.Screen name="SignUp" component={SignUp}  options={{
            title:"Cadastro", 
            headerStyle:{backgroundColor:"#5867F0"},
            headerTintColor: '#FFF',
            headerTitleStyle:{fontWeight: 'bold', alignSelf:'center'}
          }}
           />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }