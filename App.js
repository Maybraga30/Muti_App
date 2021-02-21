import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTab from './views/MainTab';
import Org from './routes/Org';
import Elet from './routes/Elet';
import Rem from './routes/Rem';
import Vidro from './routes/Vidro';
import Dicas from './routes/Dicas';
import Limp from './routes/Limp';
import Masc from './routes/Masc';
import {DrawerContent} from './views/DrawerContent';
import {SignUp, AboutUs} from './views';


const Drawer = createDrawerNavigator();


  const App = () => {
    return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTab} />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
        <Drawer.Screen name="Org" component={Org} />
        <Drawer.Screen name="Elet" component={Elet} />
        <Drawer.Screen name="Rem" component={Rem} />
        <Drawer.Screen name="Vidro" component={Vidro} />
        <Drawer.Screen name="Dicas" component={Dicas} />
        <Drawer.Screen name="Masc" component={Masc} />
        <Drawer.Screen name="Limp" component={Limp} />
      </Drawer.Navigator>
      </NavigationContainer>
    );
  }



      export default App;



    
     
