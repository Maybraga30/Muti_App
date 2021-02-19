import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTab from './views/MainTab';
import {DrawerContent} from './views/DrawerContent';
import {SignUp, AboutUs, GuiaLixo, Login, Profile, LixoOrganico} from './views';



  const Drawer = createDrawerNavigator();

  const App = () => {
    return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTab} />
        <Drawer.Screen name="Cadastrar" component={SignUp} />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
      </Drawer.Navigator>
      </NavigationContainer>
    );
      }

      export default App;

    
     