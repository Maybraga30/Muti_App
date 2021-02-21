import React from 'react';
import { KeyboardAvoidingView, Platform, Text, View, Button, Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';
import {styles} from '../assets/CSS/Css';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import App from '../App';

export default function SignUp(props)
{
    return(
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[styles.container2, styles.darkbg]}>
          <View style={styles.login__logomarca2}>
            <Image source={require('../assets/img/icons8.png')} />
         </View>
         <View style={styles.login__form}>
         <Text style={[styles.text_footer, {marginTop:30}]}>Usuário e senha</Text>
         <View style={styles.action}>
         <TextInput style={styles.login__input} placeholder='Nome Completo:' /> 
         </View>
         <View style={styles.action}> 
         <TextInput style={styles.login__input} placeholder='Telefone:' /></View>
         <View style={styles.action}>
         <TextInput style={styles.login__input} placeholder='Email:' /></View>
         <View style={styles.action}> 
         <TextInput style={styles.login__input} placeholder='Senha:' secureTextEntry={true} /></View>
        
            <Text style={[styles.text_footer, {marginTop:30}]}>Endereço</Text>
            <View style={styles.action}> 
            <TextInput style={styles.login__input} placeholder='Rua:' /></View>
            <View style={styles.action}> 
            <TextInput style={styles.login__input} placeholder='Bairro:' /></View>
            <View style={styles.action}> 
            <TextInput style={styles.login__input} placeholder='Cidade:' /></View>
            <View style={styles.action}> 
            <TextInput style={styles.login__input} placeholder='Estado:' /></View>
            
            
            <TouchableOpacity style={styles.login__button} onPress ={()=>props.navigation.navigate('Profile')}>
                <Text style={styles.login__buttonText}>Cadastrar</Text>
            </TouchableOpacity>
         
         </View>
      </KeyboardAvoidingView>
    );
}
