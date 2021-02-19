import React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Home, Login,AboutUs,Perfil, Mutira, SignUp, GuiaLixo} from './views';
import Icon from 'react-native-vector-icons/Ionicons';


  const HomeStack = createStackNavigator();
  const LoginStack = createStackNavigator();
  const SignUpStack = createStackNavigator();
  const PerfilStack = createStackNavigator();
  const AboutUsStack = createStackNavigator();
  const GuiaLixoStack = createStackNavigator();

  const Drawer = createDrawerNavigator();

  const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#5867F0',
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      fontWeight: 'bold', 
      alignSelf:'center',
      paddingRight: 50,
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
          alignSelf:'center',
          paddingRight: 50,
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
          alignSelf:'center',
          paddingRight: 50,
        }
      }}>
              <AboutUsStack.Screen 
              name="AboutUs" 
              component={AboutUs} options={{
                title:"AboutUs",
                headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} 
                  backgroundColor="#5867F0" onPress={() => 
                  {navigation.openDrawer()}}>
                  </Icon.Button>
                )
              }} />
            </AboutUsStack.Navigator>
      );
      const GuiaLixoStackScreen = ({navigation}) => (
        <GuiaLixoStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#5867F0',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold', 
          alignSelf:'center',
          paddingRight: 50,
        }
      }}>
              <GuiaLixoStack.Screen 
              name="GuiaLixo" 
              component={GuiaLixo} options={{
                title:"Separação do Lixo",
                headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} 
                  backgroundColor="#5867F0" onPress={() => 
                  {navigation.openDrawer()}}>
                  </Icon.Button>
                )
              }} />
            </GuiaLixoStack.Navigator>
      );
      const SignUpStackScreen = ({navigation}) => (
        <SignUpStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#5867F0',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold', 
          alignSelf:'center',
          paddingRight: 50,
        }
      }}>
              <SignUpStack.Screen 
              name="SignUp" 
              component={SignUp} options={{
                title:"Separação do Lixo",
                headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} 
                  backgroundColor="#5867F0" onPress={() => 
                  {navigation.openDrawer()}}>
                  </Icon.Button>
                )
              }} />
            </SignUpStack.Navigator>
      );

  const App = () => {
    return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Login" component={LoginStackScreen} />
        <Drawer.Screen name="Cadastrar" component={SignUpStackScreen} />
        <Drawer.Screen name="AboutUs" component={AboutUsStackScreen} />
        <Drawer.Screen name="Guia de Separação de Lixo" component={GuiaLixoStackScreen} />
      </Drawer.Navigator>
      </NavigationContainer>
    );
      }

      export default App;