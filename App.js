import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { styles } from "./assets/CSS/Css";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Home, Login,AboutUs,Profile, Mutira, SignUp} from './views';
import Icon from 'react-native-vector-icons/Ionicons';


  const HomeStack = createStackNavigator();
  const LoginStack = createStackNavigator();
  const AboutUsStack = createStackNavigator();

  const Drawer = createDrawerNavigator();

  const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#5867F0',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: 'bold', 
      alignSelf:'center'
    }
  }}>
          <HomeStack.Screen 
          name="Home" 
          component={Home} options={{
            title:"Mutiraê",
            headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} 
              backgroundColor="#5867F0" onPress={() => 
              {navigation.openDrawer()}}>
              </Icon.Button>
            )
          }} />
        </HomeStack.Navigator>
  );
      
    const LoginStackScreen = ({navigation}) => (
        <LoginStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold', 
          alignSelf:'center'
        }
      }}>
              <LoginStack.Screen 
              name="Login" 
              component={Login}
              options={{
                title:"Login", 
                headerStyle:{backgroundColor:"#5867F0"},
                headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} 
                  backgroundColor="#5867F0" onPress={() => 
                  {navigation.openDrawer()}}>
                  </Icon.Button>
                )
              }} />
            </LoginStack.Navigator>
      );

      const AboutUsStackScreen = ({navigation}) => (
        <AboutUsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#5867F0',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold', 
          alignSelf:'center'
        }
      }}>
              <AboutUsStack.Screen 
              name="AboutUs" 
              component={AboutUs} options={{
                title:"Mutiraê",
                headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} 
                  backgroundColor="#5867F0" onPress={() => 
                  {navigation.openDrawer()}}>
                  </Icon.Button>
                )
              }} />
            </AboutUsStack.Navigator>
      );

  const App = () => {
    return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Login" component={LoginStackScreen} />
        <Drawer.Screen name="AboutUs" component={AboutUsStackScreen} />
      </Drawer.Navigator>
      </NavigationContainer>
    );
      }

      export default App;