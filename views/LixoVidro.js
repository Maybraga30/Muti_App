import React from 'react';
import { Text, View, Button, Image, ScrollView} from 'react-native';
import {styles} from '../assets/CSS/Css';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from '@react-navigation/native';

export default function LixoVidro(props)
{
    return(
        <View style={styles.container3}>

        <View style={styles.sobre_img}>
        <TouchableOpacity><Image source={require('../assets/img/equipe.png')} /></TouchableOpacity>
         </View>
         <View>
             <Text style={styles.text_about}>
             Um futuro com embalagens de vidro retornáveis tem de ser a
                  ossa meta, pois evita o custo de reciclá-lo. Até lá, reutilize ao máximo
seus recipientes. E, sempre que possível, evite garrafas long neck: não
são retornáveis e o processo de reutilização (que as transforma em
múltiplos cacos de vidro) ainda é complexo e caro.

             </Text>
         </View>
         </View>
        
        
    );
}
