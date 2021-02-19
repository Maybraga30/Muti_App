import React from 'react';
import {View} from 'react-native';
import {styles} from '../assets/CSS/Css';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRiple,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from 'react-native-reanimated';


export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
              <View style={styles.userInfoSection}>
                  <View style={{flexDirection:'row', marginTop: 15}}>
                      <Avatar.Image source={require('../assets/img/t.png')} 
                      size={80}
                      />
                      <View style={{marginLeft:15, flexDirection:'column'}}>
                          <Title style={styles.title}>Nome do Usuário</Title>
                          <Caption style={styles.caption}>@usuário</Caption>
                      </View>
                  </View>

                  <View style={styles.row2}>
                      <View style={styles.section}>
                          <Paragraph style={[styles.paragraph, 
                            styles.caption]}>80</Paragraph>
                          <Caption style={styles.caption}>Mutirões</Caption>
                      </View>
                      <View style={styles.section}>
                          <Paragraph style={[styles.paragraph, 
                            styles.caption]}>5</Paragraph>
                          <Caption style={styles.caption}>Notificações</Caption>
                      </View>
                  </View>
              </View>

              <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
            icon={({color, size}) => (
                <Icon name="home-outline"
                color={color}
                size={size}
                />
            )}
                label="Home"
                onPress={() => {props.navigation.navigate('Home')}}
                />
                <DrawerItem
            icon={({color, size}) => (
                <Icon name="account-outline"
                color={color}
                size={size}
                />
            )}
                label="Profile"
                onPress={() => {props.navigation.navigate('Profile')}}
                />
                <DrawerItem
            icon={({color, size}) => (
                <Icon name="home-outline"
                color={color}
                size={size}
                />
            )}
                label="Sobre Nós"
                onPress={() => {props.navigation.navigate('AboutUs')}}
                />
                <DrawerItem
            icon={({color, size}) => (
                <Icon name="bookmark-outline"
                color={color}
                size={size}
                />
            )}
                label="Separação do lixo"
                onPress={() => {props.navigation.navigate('GuiaLixo')}}
                />
                <DrawerItem
            icon={({color, size}) => (
                <Icon name="account-check-outline"
                color={color}
                size={size}
                />
            )}
                label="Login"
                onPress={() => {props.navigation.navigate('Login')}}
                />
              </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
            icon={({color, size}) => (
                <Icon name="exit-to-app"
                color={color}
                size={size}
                />
            )}
                label="Sair"
                onPress={() => {}}
                />

        </Drawer.Section>
        </View>
    );
}