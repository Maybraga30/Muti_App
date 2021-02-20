import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {MainTab, LixoEletronico, LixoOrganico, LixoRemedio} from '.';
import Icon from 'react-native-vector-icons/Ionicons';

const MainTabStack = createStackNavigator();
const LixoEletronicoStack = createStackNavigator();
const LixoOrganicoStack = createStackNavigator();
const LixoRemedioStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const Separar = () => (

<Tab.Navigator
initialRouteName="Home"
activeColor="#fff"
>
  <Tab.Screen
    name="MainTab"
    component={MainTabStackScreen}
    options={{
      tabBarLabel: 'Home',
      tabBarColor: '#5867F0',
      tabBarIcon: ({ color }) => (
        <Icon name="ios-home" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="LixoEletronico"
    component={LixoEletronicoStackScreen}
    options={{
      tabBarLabel: 'LixoEletrônico',
      tabBarColor: '#5867F0',
      tabBarIcon: ({ color }) => (
        <Icon name="ios-aperture" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="LixoOrganico"
    component={LixoOrganicoStackScreen}
    options={{
      tabBarLabel: 'Orgânico',
      tabBarColor: '#5867F0',
      tabBarIcon: ({ color }) => (
        <Icon name="ios-aperture" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="LixoRemedio"
    component={LixoRemedioStackScreen}
    options={{
      tabBarLabel: 'Medicamentos',
      tabBarColor: '#808080',
      tabBarIcon: ({ color }) => (
        <Icon name="ios-aperture" color={color} size={26} />
      ),
    }}
  />
</Tab.Navigator>

);

export default Separar;



const MainTabStackScreen = ({navigation}) => (
    <MainTabStack.Navigator screenOptions={{
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
          <MainTabStack.Screen 
          name="Main" 
          component={MainTab} options={{
            title:"Mutiraê",
            headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} 
              backgroundColor="#5867F0" onPress={() => 
              {navigation.openDrawer()}}>
              </Icon.Button>
            )
          }} />
        </MainTabStack.Navigator>
  );
      
const LixoEletronicoStackScreen = ({navigation}) => (
  <LixoEletronicoStack.Navigator screenOptions={{
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
        <LixoEletronicoStack.Screen 
        name="LixoEletronico" 
        component={LixoEletronico}
        options={{
          title:"Lixo Eletronônico", 
          headerStyle:{backgroundColor:"#5867F0"},
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} 
            backgroundColor="#5867F0" onPress={() => 
            {navigation.openDrawer()}}>
            </Icon.Button>
          )
        }} />
      </LixoEletronicoStack.Navigator>
);

const LixoOrganicoStackScreen = ({navigation}) => (
  <LixoOrganicoStack.Navigator screenOptions={{
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
        <LixoOrganicoStack.Screen 
        name="LixoOrganico" 
        component={LixoOrganico} options={{
          title:"Lixo Orgânico",
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} 
            backgroundColor="#5867F0" onPress={() => 
            {navigation.openDrawer()}}>
            </Icon.Button>
          )
        }} />
      </LixoOrganicoStack.Navigator>
);

const LixoRemedioStackScreen = ({navigation}) => (
  <LixoRemedioStack.Navigator screenOptions={{
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
        <LixoRemedioStack.Screen 
        name="LixoRemedio" 
        component={LixoRemedio} options={{
          title:"Lixo Medicamentoso",
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} 
            backgroundColor="#5867F0" onPress={() => 
            {navigation.openDrawer()}}>
            </Icon.Button>
          )
        }} />
      </LixoRemedioStack.Navigator>
);    
    