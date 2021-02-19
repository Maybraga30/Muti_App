import React from 'react';
import { Text, View, Button, Image} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity } from 'react-native-gesture-handler';
import App from '../App';

export default function AboutUs(props)
{
    return(

        <View style={styles.container3}>

        <View style={styles.sobre_img}>
        <TouchableOpacity><Image source={require('../assets/img/equipe.png')} /></TouchableOpacity>
         </View>
         <View>
             <Text style={styles.text_about}>
             Somos uma equipe Somos uma equipe  Somos uma equipe 
              Somos uma equipe  Somos uma equipe  Somos uma equipe  
              Somos uma equipe Somos uma equipe  Somos uma equipe 

             </Text>
         </View>
         </View>
        
        
    );
}