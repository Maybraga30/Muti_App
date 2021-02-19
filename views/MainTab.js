import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login,AboutUs,Profile, SignUp, GuiaLixo} from '../views';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
  const LoginStack = createStackNavigator();
  const SignUpStack = createStackNavigator();
  const ProfileStack= createStackNavigator();
  const AboutUsStack = createStackNavigator();
  const GuiaLixoStack = createStackNavigator();
  const LixoEletronicoStack = createStackNavigator();
  const LixoOrganicoStack = createStackNavigator();
  const LixoRemedioStack = createStackNavigator();
  const LixoVidroStack = createStackNavigator();


  const Tab = createMaterialBottomTabNavigator();

  const MainTab = () => (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#5867F0',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Login"
      component={LoginStackScreen}
      options={{
        tabBarLabel: 'Entrar',
        tabBarColor: '#5867F0',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="GuiaLixo"
      component={GuiaLixoStackScreen}
      options={{
        tabBarLabel: 'Guia',
        tabBarColor: '#5867F0',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="SignUp"
      component={SignUpStackScreen}
      options={{
        tabBarLabel: 'Cadastrar',
        tabBarColor: '#808080',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>

  );

  export default MainTab;


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
      const ProfileStackScreen = ({navigation}) => (
        <ProfileStack.Navigator screenOptions={{
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
              <ProfileStack.Screen 
              name="Profile" 
              component={Profile} options={{
                title:"Perfil",
                headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} 
                  backgroundColor="#5867F0" onPress={() => 
                  {navigation.openDrawer()}}>
                  </Icon.Button>
                )
              }} />
            </ProfileStack.Navigator>
      );

    