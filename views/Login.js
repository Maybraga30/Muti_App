import React from 'react';
import { KeyboardAvoidingView, Platform, Text, View, Button, Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';
import {styles} from '../assets/CSS/Css';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import App from '../App';

export default function Login(props)
{
    return(
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={[styles.container, styles.darkbg]}>
         <View style={styles.login__logomarca}>
            <Image source={require('../assets/img/t.png')} />
         </View>

         <View style={styles.login__form}>
             <Text style={styles.text_footer}>Email</Text>
             <View style={styles.action}>
                 <FontAwesome
                 name="user-o"
                 color="#05375a"
                 size={20}
                 />
            <TextInput style={styles.login__input} placeholder='Seu email:' />
            </View>

            <Text style={[styles.text_footer, {marginTop:30}]}>Senha</Text>
            <View style={styles.action}>
                <FontAwesome
                name="lock"
                color="#05375a"
                size={20}
                />
            <TextInput style={styles.login__input} placeholder='Sua senha:' secureTextEntry={true} />
            </View>
            <TouchableOpacity style={[styles.login__button, {marginTop:30}]} 
            onPress ={()=>props.navigation.navigate('AboutUs')}>
                <Text style={styles.login__buttonText}>Entrar</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={[styles.login__button2, {marginTop:10}]} 
            onPress ={()=>props.navigation.navigate('SignUp')}>
            <Text style={styles.login__buttonText2}>Cadastrar-se</Text>
            </TouchableOpacity>
            
            
         
         </View>
      </KeyboardAvoidingView>
    );
}

